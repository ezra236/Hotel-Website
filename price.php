<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = ""; // Replace with your database password
$dbname = "UserFormDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect form data
    $title = $_POST['title'];
    $first_name = $_POST['first-name'];
    $last_name = $_POST['last-name'];
    $payment_code = $_POST['p-code'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    // Insert form data into the database
    $stmt = $conn->prepare("INSERT INTO UserDetails (title, first_name, last_name, payment_code, phone, email) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $title, $first_name, $last_name, $payment_code, $phone, $email);

    if ($stmt->execute()) {
        echo "Form submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
