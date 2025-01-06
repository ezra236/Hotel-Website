<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "UserBookingDB";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the POST data
$room = $_POST['room'];  // Room ID from the URL or request
$filteredRooms = json_decode($_POST['filteredRooms'], true);  // Decode the filtered rooms array

// Check if room and filteredRooms are present
if ($room && !empty($filteredRooms)) {
    // Step 1: Check if there is a record with the matching button value (room)
    $query = "SELECT id, Added_Room FROM UserBookingDetails WHERE button = ? ORDER BY id DESC LIMIT 1";

    if ($stmt = $conn->prepare($query)) {
        // Bind the room to the query (as the button value)
        $stmt->bind_param("s", $room);
        $stmt->execute();
        $result = $stmt->get_result();

        // Step 2: Check if a valid row exists with the matching button value
        if ($result->num_rows > 0) {
            // Get the latest row's id and current Added_Room value
            $row = $result->fetch_assoc();
            $latestId = $row['id'];
            $currentAddedRoom = $row['Added_Room'];

            // Step 3: Append the new rooms to the existing Added_Room value
            foreach ($filteredRooms as $unmatchedRoom) {
                // Check if there's already a value in Added_Room to prevent leading/trailing commas
                if ($currentAddedRoom) {
                    $currentAddedRoom .= "," . $unmatchedRoom;  // Append new room value
                } else {
                    $currentAddedRoom = $unmatchedRoom;  // First room value
                }
            }

            // Step 4: Now update the Added_Room for the latest row with the appended rooms
            $updateQuery = "UPDATE UserBookingDetails SET Added_Room = ? WHERE id = ?";

            if ($updateStmt = $conn->prepare($updateQuery)) {
                // Bind the updated Added_Room value to the update query
                $updateStmt->bind_param("si", $currentAddedRoom, $latestId);
                $updateStmt->execute();

                // Close the update statement
                $updateStmt->close();
                echo "Unmatched rooms added to the database successfully!";
            } else {
                echo "Error preparing update statement!";
            }
        } else {
            echo "No record found with the specified button (room) value!";
        }

        // Close the select statement
        $stmt->close();
    } else {
        echo "Error preparing select statement!";
    }
} else {
    echo "Invalid room or unmatched rooms!";
}

// Close the database connection
$conn->close();
?>
