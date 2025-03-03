<?php
// Database configuration
$host = 'localhost';
$username = 'root';
$password = ''; // Update if needed
$database = 'primeemails';

// Create a connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get email from POST request
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$current_page = $_SERVER['HTTP_REFERER'];  // Get the referring page

if (!empty($email)) {
    // Prepare and bind statement to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO subscribers (email) VALUES (?)");
    $stmt->bind_param("s", $email);

    // Execute the query
    if ($stmt->execute()) {
        // Redirect to the referring page if it's NOT one of the specified pages
        if (strpos($current_page, 'Guest.html') === false && 
            strpos($current_page, 'room.html') === false && 
            strpos($current_page, 'server.php') === false) {
            header("Location: " . $current_page);
            exit();
        } else {
            echo "Email submitted successfully.";
        }
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
