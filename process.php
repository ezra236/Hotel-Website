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
    $action = $_POST['action']; // Determine the action (book, delete, room, remove)

    if ($action === "book") {
        // Mark as Booked
        $id = intval($_POST['input1']); // Get the input value
        $sql = "UPDATE UserBookingDetails SET Availability = '1' WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            echo "Row with ID $id marked as booked.";
        } else {
            echo "Error marking as booked: " . $stmt->error;
        }
        $stmt->close();
    } elseif ($action === "delete") {
        // Delete Row
        $id = intval($_POST['input2']); // Get the input value
        $sql = "DELETE FROM UserBookingDetails 
                WHERE id = ? AND (Availability IS NULL OR Availability = '') AND (Room_Number IS NULL OR Room_Number = '')";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            echo "Row with ID $id deleted successfully.";
        } else {
            echo "Error deleting row: " . $stmt->error;
        }
        $stmt->close();
    } elseif ($action === "room") {
        // Update Room Numbers
        $id = intval($_POST['id']); // Get the ID
        $rooms = $_POST['rooms']; // Get the room numbers as a comma-separated string
        $sql = "UPDATE UserBookingDetails SET Room_Number = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("si", $rooms, $id);

        if ($stmt->execute()) {
            echo "Room numbers updated to: $rooms for ID $id.";
        } else {
            echo "Error updating room numbers: " . $stmt->error;
        }
        $stmt->close();
    } elseif ($action === "remove") {
        // Remove Room Availability
        $id = intval($_POST['id']); // Get the input value
        $sql = "UPDATE UserBookingDetails SET Availability = 'NONE' WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            echo "Room availability removed for ID $id.";
        } else {
            echo "Error removing room availability: " . $stmt->error;
        }
        $stmt->close();
    }
}

// Close the database connection
$conn->close();
?>
