<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = "";
$database = "UserBookingDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $action = $_POST['action']; // Determine the action
    if ($action === "delete") {
        $id = intval($_POST['input2']); // Get the input value
        $sql = "DELETE FROM UserBookingDetails WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            if ($stmt->affected_rows > 0) {
                echo "Row with ID $id deleted successfully.";
            } else {
                echo "No row found with ID $id.";
            }
        } else {
            echo "Error deleting row: " . $stmt->error;
        }
        $stmt->close();
    }
}

// Close the database connection
$conn->close();
?>
