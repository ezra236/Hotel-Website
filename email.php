<?php
// Include the PHPMailer class
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader (if you are using Composer)
require 'vendor/autoload.php'; // Path to Composer's autoload file

// Database connection (use your actual DB credentials)
$servername = "localhost";
$username = "root";
$password = ""; // Your DB password (if any)
$dbname = "UserBookingDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the email input from the form
if (isset($_POST['inpute'])) {
    $userEmail = $_POST['inpute'];

    // Sanitize the input to prevent SQL injection
    $userEmail = $conn->real_escape_string($userEmail);

    // Query to check if the email exists in the UserBookingDetails table
    $sql = "SELECT random_number FROM UserBookingDetails WHERE email = '$userEmail' LIMIT 1";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        // Email exists, get the reservation number (random_number)
        $row = $result->fetch_assoc();
        $reservationNumber = $row['random_number'];

        // Create a new PHPMailer instance
        $mail = new PHPMailer(true);

        try {
            // Server settings
            $mail->isSMTP();  // Set mailer to use SMTP
            $mail->Host = 'smtp.gmail.com';  // Set the SMTP server to send through
            $mail->SMTPAuth = true;  // Enable SMTP authentication
            $mail->Username = 'primeezra25@gmail.com';  // SMTP username (your email)
            $mail->Password = 'fwfa lapb pfll zews';  // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // Enable TLS encryption
            $mail->Port = 587;  // TCP port to connect to (587 is for TLS)

            // Recipients
            $mail->setFrom('primeezra25@gmail.com', 'Prime Organization');  // Organization email (sender)
            $mail->addAddress($userEmail);  // Recipient's email

            // Content
            $mail->isHTML(true);  // Set email format to HTML
            $mail->Subject = 'Reservation Confirmation';
            $mail->Body = "
            <html>
            <head>
                <title>Reservation Confirmation</title>
            </head>
            <body>
                <h2>Dear Customer,</h2>
                <p>Your payment was successful. Your reservation number is <strong>$reservationNumber</strong>.</p>
                <p>Thank you for booking with us.</p>
                <p>Best regards,</p>
                <p><strong>Prime Organization</strong></p>
            </body>
            </html>
            ";

            // Send email
            $mail->send();
            echo "Email successfully sent to $userEmail";
        } catch (Exception $e) {
            echo "Email could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        // If email doesn't exist in the database
        echo "No booking found for this email address.";
    }
}

// Close database connection
$conn->close();
?>
