<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and collect form data
    $name = htmlspecialchars(trim($_POST["name"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $contact = htmlspecialchars(trim($_POST["contact"] ?? ''));
    $message = htmlspecialchars(trim($_POST["message"] ?? ''));

    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill in all required fields.";
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Set recipient email address
    $to = "admin@indivirtus.com"; // <-- Change this if needed
    $subject = "New Contact Form Submission";

    // Compose the email body
    $body = "Name: $name\nEmail: $email\nContact: $contact\nMessage: $message";

    // Set headers
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

// Redirect after 5 seconds
$redirectUrl = "https://www.indivirtus.com/contact-us"; // Replace with your main site URL


header("Location: https://www.indivirtusrnd.com/contact-us");
exit;
?>
