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

// Query to retrieve data from the UserBookingDetails table
$query = "SELECT * FROM UserBookingDetails ORDER BY id DESC";

// Execute the query
$result = $conn->query($query);

// Check if there are any rows in the result
if ($result->num_rows > 0) {
    // Start of the table
    echo "<table border='1'>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Payment Code</th>
                <th>Phone</th>
                <th>Email</th>
                <th>First Part</th>
                <th>Last Line</th>
                <th>Button</th>
                <th>Random Number</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Added Room</th>
            </tr>";

    // Fetch and display the data
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row['id'] . "</td>
                <td>" . $row['title'] . "</td>
                <td>" . $row['first_name'] . "</td>
                <td>" . $row['last_name'] . "</td>
                <td>" . $row['payment_code'] . "</td>
                <td>" . $row['phone'] . "</td>
                <td>" . $row['email'] . "</td>
                <td>" . $row['first_part'] . "</td>
                <td>" . $row['last_line'] . "</td>
                <td>" . $row['button'] . "</td>
                <td>" . $row['random_number'] . "</td>
                <td>" . $row['check_in'] . "</td>
                <td>" . $row['check_out'] . "</td>
                <td>" . $row['Added_Room'] . "</td>
              </tr>";
    }

    // End of the table
    echo "</table>";
} else {
    // No records found
    echo "No records found in the UserBookingDetails table.";
}

// Close the database connection
$conn->close();
?>
