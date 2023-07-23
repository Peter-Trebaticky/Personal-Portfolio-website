<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $to = "trebatickysk@gmail.com"; 
  $subject = $_POST["subject"]; 
  $message = $_POST["message"]; 
  $email = $_POST["email"]; 

  $headers = "From: $email" . "\r\n"; 
  $headers .= "Reply-To: $email" . "\r\n"; 
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";


  mail($to, $subject, $message, $headers);


//  header("Location: mail.html");
//  exit();
}
?>
