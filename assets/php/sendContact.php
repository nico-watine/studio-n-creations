<?php 
$ToEmail = 'nico.w@tine.rocks'; //ex. admin@scriptgates.com or scriptgates@gmail.com
$EmailSubject = "SNC Message!!!"."\n"; 
// $mailheader = "From: ".$_POST["email"]."\n";
$mailheader = "From: "."njwatine@gmail.com"."\n";
$mailheader .= "Reply-To: "."njwatine@gmail.com"."\n";  
// $MESSAGE_BODY = "Name: ".$_POST["name"]."\n"; 
$MESSAGE_BODY = "Name: " . "\n" . $_POST["name"] . "\n"; 
$MESSAGE_BODY .= "Email: " . "\n" . $_POST["email"] . "\n";
$MESSAGE_BODY .= "Message: " . "\n" . $_POST["message"] . "\n"; 
mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Error!"); 

header("Location: /#thank-you");
?>
