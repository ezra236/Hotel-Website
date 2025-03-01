<?php
// Database connection
$servername = "localhost"; // Change to your server
$username = "root"; // Change to your username
$password = ""; // Change to your password
$dbname = "UserCredentials";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get input values from the form
$user_input = $_POST['username'];
$pass_input = $_POST['password'];

// SQL query to fetch credentials from the database
$sql = "SELECT * FROM Credentials WHERE username = '$user_input' AND password = '$pass_input'";
$result = $conn->query($sql);

// Check if the username and password match
if ($result->num_rows > 0) {
    // Fetch the result
    $row = $result->fetch_assoc();

    // Check which credentials match
    if ($row['username'] == 'Reception' && $row['password'] == '123qw') {
        // Redirect to Admin.php
        header("Location: Admin.php");
    } elseif ($row['username'] == 'Arungai59' && $row['password'] == '123own') {
        // Redirect to Owner.php
        header("Location: Owner.php");
    }
} else {
    // If no match is found, redirect to Guest.html
    header("Location: Guest.html");
}

$conn->close();
?>
