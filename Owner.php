<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "UserBookingDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data for the second set of columns
$sql = "SELECT id, first_name, last_name, random_number, Availability, last_line, Room_Number, check_in, check_out FROM UserBookingDetails";
$result2 = $conn->query($sql);

echo '<div class="tab">';
echo '<table class="booking-table">';
echo '<thead>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Random Number</th>
            <th>Availability</th>
            <th>Last Line</th>
            <th>Room Number</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
        </tr>
      </thead>
      <tbody>';

// Check if there are any rows in the result
if ($result2->num_rows > 0) {
    // Fetch and display the data from the second query
    while ($row2 = $result2->fetch_assoc()) {
        echo "<tr>
                <td>{$row2['id']}</td>
                <td>{$row2['first_name']}</td>
                <td>{$row2['last_name']}</td>
                <td>{$row2['random_number']}</td>
                <td>{$row2['Availability']}</td>
                <td>{$row2['last_line']}</td>
                <td>{$row2['Room_Number']}</td>
                <td>{$row2['check_in']}</td>
                <td>{$row2['check_out']}</td>
              </tr>";
    }
} else {
    echo "<tr><td colspan='7'>No data available for the second query</td></tr>";
}

echo '</tbody>';
echo '</table>';
echo '</div>';


// Close the database connection
$conn->close();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="lilo.png" type="image/png">
    <title>Prime Guest Lodge</title>
    <link rel="stylesheet" href="styow.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

    <div class="form-container">
        <form id="deleteForm">
            <label for="input2"> Delete</label>
            <input type="text" id="input2" name="input2" required>

            <button type="submit" class="delete-btn" name="action" value="delete">Delete</button>
        </form>
    </div>

    <p id="message"></p> <!-- For displaying success or error messages -->

<script src="own.js"></script>
</body>
</html>