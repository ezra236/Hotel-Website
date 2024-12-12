<?php
// Database connection
$servername = "localhost";
$username = "root"; // Update with your database username
$password = ""; // Update with your database password
$dbname = "UserBookingDB";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the submitted confirmation number (random number)
if (isset($_POST['confirmation_number'])) {
    $confirmation_number = $_POST['confirmation_number'];

    // Prepare the SQL query to update the customer_cancelled column
    $sql = "UPDATE UserBookingDetails 
            SET Customer_cancelled = TRUE
            WHERE random_number = ?";

    // Prepare statement
    if ($stmt = $conn->prepare($sql)) {
        // Bind parameters (s for string, i for integer, d for double)
        $stmt->bind_param("i", $confirmation_number);

        // Execute statement
        if ($stmt->execute()) {
            echo "Booking canceled successfully.";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close statement
        $stmt->close();
    }
}

// Close connection
$conn->close();
?>
