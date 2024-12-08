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
                <th>Room Submitted For Booking</th>
                <th>Price To Be Paid</th>
                <th>Availability</th>
                <th>Random Number</th>
                <th>Check-In</th>
                <th>Check-Out</th>
            </tr>";

    // Fetch and display the data from the first query
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
                <td>" . $row['Availability'] . "</td>
                <td>" . $row['random_number'] . "</td>
                <td>" . $row['check_in'] . "</td>
                <td>" . $row['check_out'] . "</td>
              </tr>";
    }

    // End of the table after first query's data
    echo "</table>";

} else {
    // No records found for the first query
    echo "No records found in the UserBookingDetails table.";
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book and Delete Form</title>
    <link rel="stylesheet" href="styad.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

<table>
        <thead>
            <tr>
                <th>#</th>
                <th>Room Name</th>
                <th>Room Number</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Paris</td>
                <td>101</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Tokyo</td>
                <td>102</td>
            </tr>
            <tr>
                <td>3</td>
                <td>New York</td>
                <td>103</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Dubai</td>
                <td>104</td>
            </tr>
            <tr>
                <td>5</td>
                <td>London</td>
                <td>105</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Sydney</td>
                <td>106</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Rome</td>
                <td>107</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Cairo</td>
                <td>108</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Berlin</td>
                <td>109</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Bangkok</td>
                <td>110</td>
            </tr>
        </tbody>
    </table>

    <div class="form-container">
        <form id="bookForm">
            <label for="input1"> Mark As Booked</label>
            <input type="text" id="input1" name="input1" required>

            <button type="submit" class="book-btn" name="action" value="book">Book</button>

        </form>


        <form id="Roomform">
            <label for="input3"> Room Number</label>
            <input type="text" id="room1" name="room1" placeholder="Room 1">
            <input type="text" id="room2" name="room2" placeholder="Room 2">
            <input type="text" id="room3" name="room3" placeholder="Room 3">
    
            <label for="idInput"> ID</label>
            <input type="text" id="idInput" name="idInput" required placeholder="Enter ID">

           <button type="submit" class="room-btn" name="action" value="room">ADD ROOM</button>
        </form>


        <form id="deleteForm">
            <label for="input2"> Delete</label>
            <input type="text" id="input2" name="input2" required>

            <button type="submit" class="delete-btn" name="action" value="delete">Delete</button>
        </form>
    </div>

    </div>

    <div id="message"></div>


    <script src="Admn.js"></script>
</body>
</html>








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
$sql = "SELECT first_name, last_name, random_number, Availability, last_line, Room_Number, check_in, check_out FROM UserBookingDetails";
$result2 = $conn->query($sql);

echo '<div class="tab">';
echo '<table class="booking-table">';
echo '<thead>
        <tr>
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
