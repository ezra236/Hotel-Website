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

// SQL query to retrieve data where Customer_cancelled = 1
$sql = "SELECT first_name, last_name, random_number, availability, last_line, room_number, customer_cancelled
        FROM UserBookingDetails
        WHERE customer_cancelled = 1";

// Execute the query
$result = $conn->query($sql);

// Check if there are results
if ($result->num_rows > 0) {
    // Start the table
    echo "<table class='booking-table'>";
    echo "<thead><tr>";
    echo "<th>First Name</th><th>Last Name</th><th>Random Number</th><th>Availability</th><th>Last Line</th><th>Room Number</th><th>Customer Cancelled</th>";
    echo "</tr></thead>";
    echo "<tbody>";

    // Output the data of each row
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($row['first_name']) . "</td>";
        echo "<td>" . htmlspecialchars($row['last_name']) . "</td>";
        echo "<td>" . htmlspecialchars($row['random_number']) . "</td>";
        echo "<td>" . htmlspecialchars($row['availability']) . "</td>";
        echo "<td>" . htmlspecialchars($row['last_line']) . "</td>";
        echo "<td>" . htmlspecialchars($row['room_number']) . "</td>";
        echo "<td>" . ($row['customer_cancelled'] == 1 ? 'Yes' : 'No') . "</td>";
        echo "</tr>";
    }

    // End the table
    echo "</tbody></table>";
} else {
    echo "No records found.";
}

// Close the connection
$conn->close();
?>


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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="refresh" content="5000">
    <link rel="icon" href="lilo.png" type="image/png">
    <title>Prime Guest Lodge</title>
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
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Tokyo</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>New York</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Dubai</td>
                <td>4</td>
            </tr>
            <tr>
                <td>5</td>
                <td>London</td>
                <td>5</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Sydney</td>
                <td>6</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Rome</td>
                <td>7</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Cairo</td>
                <td>8</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Berlin</td>
                <td>9</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Bangkok</td>
                <td>10</td>
            </tr>
        </tbody>
    </table>

    <div id="message"></div>

<div class="For-Em">

    <div class="form-container">
        <form id="bookForm">
            <h3>BOOKING INFORMATION</h3>
            <h4>Mark as Booked</h4>
            <P>---------------------------------------------------------------------------</P>
            <label for="input1"> Romm Bookings ID</label>
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

           <P class="q">---------------------------------------------------------------------------</P>
        </form>


        <form id="unavaila">
            <h4>Mark as Unavailable</h4>
            <label for="input4"> Room Details ID</label>
            <input type="text" id="roomu" name="roomu" placeholder="Room">

           <button type="submit" class="unroom-btn" name="action" value="remove">REMOVE ROOM</button>

           <P class="q">---------------------------------------------------------------------------</P>
        </form>


        <form id="deleteForm">
            <label for="input2"> Delete</label>
            <input type="text" id="input2" name="input2" required>

            <button type="submit" class="delete-btn" name="action" value="delete">Delete</button>
        </form>
    </div>

    <div class="email">
      <form id="email" action="email.php" method="POST">
        <label for="inpute">SEND Email</label>
        <input type="email" id="inpute" name="inpute" required>
        <button type="submit" class="email-btn" name="action" value="email">SEND</button>
      </form>
    </div>

</div>



    <script src="Admn.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</body>
</html>









