<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and collect form data
    $name = htmlspecialchars(trim($_POST["name"] ?? ''));
    $email = htmlspecialchars(trim($_POST["email"] ?? ''));
    $contact = htmlspecialchars(trim($_POST["contact"] ?? ''));
    $message = htmlspecialchars(trim($_POST["message"] ?? ''));

    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill in all required fields.";
        exit;
    }

    // Set your email address here
    $to = "admin@indivirtus.com"; // <-- CHANGE THIS TO YOUR EMAIL ADDRESS
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nContact: $contact\nMessage: $message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us. We will get back to you soon.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>