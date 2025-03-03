<?php
header('Content-Type: application/json');

// Database connection details
$servername = "localhost";
$username = "root";
$password = ""; // Replace with your MySQL root password
$dbname = "BookingDB";

// Connect to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed."]);
    exit();
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $restaurant = $_POST['restaurant'];
    $title = $_POST['title'];
    $first_name = $_POST['first-name'];
    $last_name = $_POST['last-name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $date = $_POST['date'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO BookingDetails (restaurant, title, first_name, last_name, email, phone, date) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $restaurant, $title, $first_name, $last_name, $email, $phone, $date);

    // Execute the query
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Thank you for your enquiry on $restaurant. We will get back to you as soon as we can."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to save your enquiry. Please try again."]);
    }

    $stmt->close();
}

$conn->close();
?>
