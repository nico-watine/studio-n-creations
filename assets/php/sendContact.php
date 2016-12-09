<?php 
$ToEmail = "messages@studioncreations.com"; 
$EmailSubject = "Studio N Creations Message"."\n"; 
$mailheader = "From: " . "nico@studioncreations.com"."\n";
$mailheader .= "Reply-To: " . "nico@studioncreations.com"."\n";  
$MESSAGE_BODY = "Name: " . "\n" . $_POST["name"] . "\n"; 
$MESSAGE_BODY .= "Email: " . "\n" . $_POST["email"] . "\n";
$MESSAGE_BODY .= "Message: " . "\n" . $_POST["message"] . "\n"; 
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Error!"); 

header("Location: /#thank-you");
?>
