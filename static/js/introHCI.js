'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Zifei is Scott's wife");
		$(".jumbotron p").toggleClass("active");
	});

	$("#submitBtn").click(updateproject);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

function updateproject(e) {
	var projectvalue = $("#project").val();
	$(projectvalue).animate({
		width: $("#width").val()
	});
	var newdescription = $("#description").val();
	$(projectvalue + " .project-description").text(newdescription);
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();
    var count = 0;

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    console.log("clicked");
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       // description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       $(".project-description p").toggleClass("change");
   }
       
}