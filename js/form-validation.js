
$(document).ready(function($) {

	// hide error messages by default
	$(".error").hide();
	
	
	$('#index-contact-form input').click(function(e) {
        $(".error").fadeOut();
    });
	
	// on submit...
	$("#index-contact-form #submit").click(function() {
		$(".error").hide();
		
		//required:
		
		//name
		var name = $("input#name").val();
		if(name == ""){
			//$("#error").fadeIn().text("Name required.");
			$('#error-name').fadeIn('slow');
			$("input#name").focus();
			return false;
		}

		// Email (check if entered anything)
		var email = $("input#email").val();
		// Make sure entered address is valid
		if (email !== "") {  // If something was entered
			if (!isValidEmailAddress(email)) {
				$('#error-email').fadeIn('slow'); //error message
				$("input#email").focus();   //focus on email field
				return false;  
			}
		}

		// Email regix validation string
		function isValidEmailAddress(emailAddress) {
		    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
		    return pattern.test(emailAddress);
		};

		// Message Text Input
		var comments = $("#message").val();
		
		if(comments == ""){
			$('#error-message').fadeIn('slow');
			$("input#message").focus();
			return false;
		}
	}); 
	
    return false;
});


