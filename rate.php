<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $roomNumber = $_POST['room-number'];
    $roomPages = [
        "1" => "paris.html",
        "2" => "tokyo.html",
        "3" => "york.html",
        "4" => "dubai.html",
        "5" => "london.html",
        "6" => "sydney.html",
        "7" => "rome.html",
        "8" => "cairo.html",
        "9" => "berlin.html",
        "10" => "bangkok.html"
    ];

    if (array_key_exists($roomNumber, $roomPages)) {
        echo $roomPages[$roomNumber];
    } else {
        http_response_code(400); // Bad Request
        echo "Invalid room number!";
    }
    exit();
}
?>
