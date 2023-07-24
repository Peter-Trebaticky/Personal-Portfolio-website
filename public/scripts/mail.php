<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $to = "trebatickysk@gmail.com"; 
  $subject = $_POST["subject"]; 
  $message = $_POST["message"]; 
  $email = $_POST["email"]; 

  $headers = "From: $email" . "\r\n"; 
  $headers .= "Reply-To: $email" . "\r\n"; 
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  if (mail($to, $subject, $message, $headers)) {
    $_SESSION["mailStatus"] = "success";
  } else {
    $_SESSION["mailStatus"] = "error";
  }

  header("Location: ../index.html?mailStatus=" . $_SESSION["mailStatus"]);
  exit();
}
?>
