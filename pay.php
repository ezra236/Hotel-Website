<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "reservation_system";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get form data
    $title = $_POST['title'];
    $first_name = $_POST['first-name'];
    $last_name = $_POST['last-name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $offer = $_POST['country'];
    $check_in = $_POST['check-in'];
    $adults = $_POST['adults'];
    $children = $_POST['children'];
    $comments = $_POST['comments'];
    $special_offers = isset($_POST['special-offers']) ? 1 : 0;

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO reservations (title, first_name, last_name, email, phone, offer, check_in, adults, children, comments, special_offers) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssiiss", $title, $first_name, $last_name, $email, $phone, $offer, $check_in, $adults, $children, $comments, $special_offers);

    // Execute the statement
    if ($stmt->execute()) {
        http_response_code(200); // Send HTTP 200 response
    } else {
        http_response_code(500); // Send HTTP 500 response
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
