<?php
/*****************************************************************
 *  Secure Contact Form Handler with Rate-Limiting (PHP 8+)
 *****************************************************************/

declare(strict_types=1);

/* ---------- CONFIGURE --------------------------------------- */
$redirectBase = 'https://steelblue-nightingale-280613.hostingersite.com/contact-us';
$to           = 'admin@indivirtus.com';
$rateDir      = __DIR__ . '/rate_limit';       // make sure this folder is writable
$maxRequests  = 5;                              // how many submissions …
$windowSecs   = 3600;                           // … per this many seconds (1 h)
/* ------------------------------------------------------------- */

// tiny helper
function redirect(string $base, string $qs): never {
    header("Location: {$base}?{$qs}");
    exit;
}

// XSS / general sanitiser
function clean(string $v): string {
    return htmlspecialchars(strip_tags(trim($v)), ENT_QUOTES, 'UTF-8');
}

// very small file-based store: returns true if IP is now over limit
function isRateLimited(string $ip, string $dir, int $limit, int $window): bool
{
    // ensure folder exists
    if (!is_dir($dir) && !mkdir($dir, 0700, true)) {
        // if we cannot create folder, play safe: treat as limited
        return true;
    }

    $file = $dir . '/' . md5($ip) . '.json';
    $now  = time();

    $history = [];
    if (is_file($file)) {
        $history = json_decode((string)file_get_contents($file), true) ?: [];
        // keep only timestamps in the sliding window
        $history = array_filter($history, fn($ts) => ($now - $ts) < $window);
    }

    if (count($history) >= $limit) {
        return true;                   // too many recent attempts
    }

    // record this attempt and save
    $history[] = $now;
    file_put_contents($file, json_encode($history), LOCK_EX);

    return false;
}

/* ---------- MAIN -------------------------------------------- */
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect($redirectBase, 'error=invalid_request');
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
if (isRateLimited($ip, $rateDir, $maxRequests, $windowSecs)) {
    redirect($redirectBase, 'error=too_many_attempts');
}

/* ---- Collect & validate user input ---- */
$name    = clean($_POST['name']    ?? '');
$email   = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$contact = clean($_POST['contact'] ?? '');
$message = clean($_POST['message'] ?? '');

/* Honeypot anti-bot field (must be empty) */
if (!empty($_POST['website'] ?? '')) {
    redirect($redirectBase, 'error=spam_detected');
}

if ($name === '' || $email === '' || $message === '') {
    redirect($redirectBase, 'error=empty');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect($redirectBase, 'error=invalid_email');
}

/* ---- Extra header-injection defence ---- */
$injPattern = '/(content-type:|bcc:|cc:|to:)/i';
if (preg_match($injPattern, $name) || preg_match($injPattern, $email)) {
    redirect($redirectBase, 'error=invalid_input');
}

/* ---- Compose & send HTML email ---- */
$subject = 'New Contact Form Submission';

$emailBody = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  body {font-family: Arial, sans-serif; color:#333;}
  h2   {color:#0056b3;}
  p    {margin:0 0 10px;}
</style>
</head>
<body>
  <h2>New Contact Form Submission</h2><br>
  <p><strong>Name:</strong> {$name}</p><br>
  <p><strong>Email:</strong> {$email}</p><br>
  <p><strong>Contact:</strong> {$contact}</p><br>
  <p><strong>Message:</strong><br>
     {nl2br($message)}
  </p>
</body>
</html>
HTML;

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: noreply@indivirtus.com\r\n";
$headers .= "Reply-To: {$email}\r\n";

if (mail($to, $subject, $emailBody, $headers)) {
    redirect($redirectBase, 'success=true');
}

redirect($redirectBase, 'error=send_failed');
?>
