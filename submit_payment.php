<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = ""; // Replace with your database password
$dbname = "UserBookingDB";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize inputs
    $title = $conn->real_escape_string($_POST['title']);
    $first_name = $conn->real_escape_string($_POST['first_name']);
    $last_name = $conn->real_escape_string($_POST['last_name']);
    $payment_code = $conn->real_escape_string($_POST['payment_code']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $email = $conn->real_escape_string($_POST['email']);
    $first_part = $conn->real_escape_string($_POST['first_part']);
    $last_line = $conn->real_escape_string($_POST['last_line']);
    $room = $conn->real_escape_string($_POST['room']);
    $check_in = $conn->real_escape_string($_POST['check_in']);
    $check_out = $conn->real_escape_string($_POST['check_out']);
    $random_number = (int) $_POST['random_number'];

    // Prepare and execute the SQL query
    $sql = "INSERT INTO UserBookingDetails (
                title, 
                first_name, 
                last_name, 
                payment_code, 
                phone, 
                email, 
                first_part, 
                last_line, 
                button, 
                random_number, 
                check_in, 
                check_out
            ) VALUES (
                '$title', 
                '$first_name', 
                '$last_name', 
                '$payment_code', 
                '$phone', 
                '$email', 
                '$first_part', 
                '$last_line', 
                '$room', 
                $random_number, 
                STR_TO_DATE('$check_in', '%d-%m-%Y'), 
                STR_TO_DATE('$check_out', '%d-%m-%Y')
            )";

    if ($conn->query($sql) === TRUE) {
        echo "Data successfully inserted!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Invalid request method.";
}

// Close the database connection
$conn->close();
?>
