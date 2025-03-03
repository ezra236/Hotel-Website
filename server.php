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

// Room ID mapping to Room_Number
$room_map = [
    "roo1" => 1,
    "roo2" => 2,
    "roo3" => 3,
    "roo4" => 4,
    "roo5" => 5,
    "roo6" => 6,
    "roo7" => 7,
    "roo8" => 8,
    "roo9" => 9,
    "roo10" => 10,
];

// Extract query parameters from the URL
$room_id = isset($_GET['room']) ? htmlspecialchars($_GET['room']) : null;
$checkin = isset($_GET['checkin']) ? htmlspecialchars($_GET['checkin']) : 'Not provided';
$checkout = isset($_GET['checkout']) ? htmlspecialchars($_GET['checkout']) : 'Not provided';

// Get Room_Number from room_id
$room_number = $room_map[$room_id] ?? null;

if ($room_number) {
    // Query the database for the room's availability
    $availability_sql = "SELECT Availability 
                     FROM UserBookingDetails 
                     WHERE Room_Number REGEXP '(^|,)$room_number(,|$)'"; 
    $availability_result = $conn->query($availability_sql);

    if ($availability_result->num_rows > 0) {
        $row = $availability_result->fetch_assoc();
        $availability = $row['Availability'];

        // Check if the room is already booked
        if ($availability == "1") {
            echo "
            <div style='
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: white;
                padding: 20px;
                border: 2px solid #e25623;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
                text-align: center;
                z-index: 1000;
            '>
                <h2 style='color: #e25623;'>Room $room_number is already booked!</h2>
                <p>You cannot access this page for the selected room.</p>
                <button onclick='window.location.href=\"room.html\"'  style='padding: 12px 35px; background-color: #e25623; color: white; border: none; cursor: pointer;'>
                    Go Back
                </button>
            </div>
            <div style='
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 999;
            '></div>
            ";
            exit; // Stop further execution of the script
        }
    } else {
        
    }
} else {
    echo "Invalid room ID.";
    exit;
}

// Close the database connection
$conn->close();

// Room data: Map room IDs to their content and prices
$rooms = [
    "roo1" => [
        "room_name" => "Paris",
        "image" => "im1.avif",
        "description" => "This kind of room would be perfect for those looking to escape into a setting that feels both chic and relaxing...",
        "price" => 1200,
    ],
    "roo2" => [
        "room_name" => "Tokyo",
        "image" => "im2.jpg",
        "description" => "Embrace the perfect blend of tradition and modernity in Tokyo...",
        "price" => 1500,
    ],
    "roo3" => [
        "room_name" => "New York",
        "image" => "im3.avif",
        "description" => "Stay in the heart of the action in New York...",
        "price" => 1200,
    ],
    "roo4" => [
        "room_name" => "Dubai",
        "image" => "im4.jpg",
        "description" => "Indulge in unparalleled luxury in Dubai...",
        "price" => 1500,
    ],
    "roo5" => [
        "room_name" => "London",
        "image" => "im5.jpg",
        "description" => "Enjoy a sophisticated stay in London...",
        "price" => 1300,
    ],
    "roo6" => [
        "room_name" => "Sydney",
        "image" => "im6.jpg",
        "description" => "Experience the stunning coastal views of Sydney...",
        "price" => 1200,
    ],
    "roo7" => [
        "room_name" => "Rome",
        "image" => "im7.jpg",
        "description" => "Immerse yourself in the rich history of Rome...",
        "price" => 1400,
    ],
    "roo8" => [
        "room_name" => "Cairo",
        "image" => "im8.jpg",
        "description" => "Discover the wonders of Cairo...",
        "price" => 1100,
    ],
    "roo9" => [
        "room_name" => "Berlin",
        "image" => "im9.jpg",
        "description" => "Enjoy a stylish and contemporary stay in Berlin...",
        "price" => 1250,
    ],
    "roo10" => [
        "room_name" => "Bangkok",
        "image" => "im10.jpg",
        "description" => "Indulge in the bustling energy of Bangkok...",
        "price" => 1300,
    ],
];

// Fetch the content of the selected room
$selected_room = $rooms[$room_id] ?? null;

// Function to calculate the difference in days between check-in and check-out
function calculate_days($checkin, $checkout) {
    $checkin_date = new DateTime($checkin);
    $checkout_date = new DateTime($checkout);
    $interval = $checkin_date->diff($checkout_date);
    return $interval->days; // Return the number of days
}

// Calculate the total cost
$total_cost = 0;
if ($selected_room && $checkin !== 'Not provided' && $checkout !== 'Not provided') {
    $days = calculate_days($checkin, $checkout);

    // Check if the days are 0 and redirect if so
    if ($days == 0) {
        header("Location: room.html"); // Redirect to room.html
        exit; // Ensure the script stops after the redirect
    }

    $total_cost = $days * $selected_room['price']; // Calculate total cost
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="refresh" content="5000">
    <link rel="icon" href="lilo.png" type="image/png">
    <title>Prime Guest Lodge</title>
    <link rel="stylesheet" href="stye.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

<div class="finis">
        <p class="po"> PRIME GUEST LODGE</p>
</div>

<div class="nav-container"> 
        <div class="logo">
            <img src="logo.png" alt="Logo" /> 
      </div>
      <div class="dropdown">
         <a href="room.html" class="rooms-link">Accomodation</a>
           <div class="dropdown-content">
            <p>Available Rooms</p>
            <a href="paris.html" target="_blank">Paris</a>
            <a href="tokyo.html" target="_blank">Tokyo</a>
            <a href="york.html" target="_blank">New York</a>
            <a href="dubai.html" target="_blank">Dubai</a>
            <a href="london.html" target="_blank">London</a>
            <a href="sydney.html" target="_blank">Sydney</a>
            <a href="rome.html" target="_blank">Rome</a>
            <a href="cairo.html" target="_blank">Cairo</a>
            <a href="berlin.html" target="_blank">Berlin</a>
            <a href="bangkok.html" target="_blank">Bangkok</a>
            <a href="istanbul.html" target="_blank">Istanbul</a>
            <a href="mosco.html" target="_blank">Moscow</a>
            <a href="toronto.html" target="_blank">Toronto</a>
           </div>
      </div>
        <nav>
         <span class="separator">|</span>
         <a href="offers.html">Offers</a>
         <span class="separator">|</span>
         <a href="dining.html">Dining</a>
         <span class="separator">|</span>
         <a href="locate.html">Location</a>
         <span class="separator">|</span>
         <a href="contact.html">Contact Us</a>
        </nav>
        <div class="yu">
            <div class="squared-shape" id="shaped-square">
                <p>More</p>
            </div>
        </div>
        <div class="shape-container" id="shape-container">
            <div class="triangle">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M8.59 9.17L12 12.58l3.41-3.41L17 10.59l-5 5-5-5z'/%3E%3C/svg%3E" alt="Triangle Icon" class="triangle-image">
            </div>
            <div class="square"></div>
            <p class="shape-text"><br>Check Availability</p>
         
        </div>  
    </div>
    
    
    <div id="overlay"></div>
    
    
    <div class="blockk" id="slidingg-block">
        <p class="parag" id="close-button">X</p>
        <div class="inblock">
            <img src="logoo.jpg">
            <p>PRIME GUEST HOME</p>
        </div>
        <div class="linkk">
            <a href="room.html">ACCOMODATION</a>
            <a href="offers.html">OFFERS</a>
            <a href="dining.html">DINING</a>
            <a href="locate.html">LOCATION</a>
            <a href="contact.html">CONTACT Us</a>
            <a href="feedback.html">FEEDBACK</a>
            <a href="herit.html">HERITAGE</a>
        </div>
        <div class="logimage">
            <img src="logoo.jpg">
        </div>
    </div>
    
    
    <div class="dropdownn">
        <div class="dropdownn-content" id="dropdownn">
            <div class="check">
                <div class="circle">
                    <div class="checkmark"></div>
                </div>
                <div class="tex">
                    <p><span style="color: #ff4500;">Rooms From KSH 1205.00 </span><br>
                        Best rate guaranteed<br>
                        Exclusive offers available
                    </p>
                </div>
                <form action="rate.php" method="POST" id="roomForm">
                    <label for="check-in">Check-in:</label>
                    <input type="text" id="check-in" name="check-in" class="flatpickr" />
        
                    <label for="check-out">Check-out:</label>
                    <input type="text" id="check-out" name="check-out" class="flatpickr" />
        
                    <label for="room-number">Room Number:</label>
                    <input type="numberr" id="room-number" name="room-number" />
                    <div class="dropdow" id="roomdropdow">
                        <!-- Dropdown items -->
                        <div data-value="1">1</div>
                        <div data-value="2">2</div>
                        <div data-value="3">3</div>
                        <div data-value="4">4</div>
                        <div data-value="5">5</div>
                        <div data-value="6">6</div>
                        <div data-value="7">7</div>
                        <div data-value="8">8</div>
                        <div data-value="9">9</div>
                        <div data-value="10">10</div>
                    </div>
        
                    <label for="adults">Adults:</label>
                    <input type="numberr" id="adults" name="adults" />
                    <div class="dropdoww" id="adultsdropdow">
                        <!-- Dropdown items -->
                        <div data-value="1">1</div>
                        <div data-value="2">2</div>
                        <div data-value="3">3</div>
                        <div data-value="4">4</div>
                        <div data-value="5">5</div>
                        <div data-value="6">6</div>
                        <div data-value="7">7</div>
                        <div data-value="8">8</div>
                        <div data-value="9">9</div>
                        <div data-value="10">10</div>
                    </div>
        
                    <button type="submit">Check Rates</button>
    
                </form>
                <div class="linkc">
                    <p id="modify-booking">Modify Booking</p>
                    <div class="popover" id="popover">
                        <p><span style="color: #cb4f1d;">Modify/ Cancel Reservations</span></p>
                        <p><span style="color: black; font-size: 14px; font-weight: normal;"> Please enter the following to retrieve your reservation</span></p>
                        <label for="confirmation_number" class="popover-label">Confirmation Number:</label>
                        <input type="text" id="confirmation_number" name="confirmation_number" />
    
                        <div class="popover-buttons">
                           <button id="close-popover" class="popp">Close</button>
                           <button id="continue-popover" class="popp">Continue</button>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
     </div>
    



    <div class="chosen">
        <div class="imagee">
            <?php if ($selected_room): ?>
                <img src="<?php echo $selected_room['image']; ?>" alt="Selected Room Image">
            <?php else: ?>
                <p>No room selected or room not found.</p>
            <?php endif; ?>
        </div>
        <div class="text">
           <div class="image-container">
                <!-- First Image -->
              <div class="image-item">
                <img src="Profile Icon Silhouette PNG Transparent, Avatar Icon Profile Icon Member Login Vector Isolated, Login Icons, Profile Icons, Avatar Icons PNG Image For Free Download.jpg" alt="Image 1">
                <p>2 people</p>
              </div>

               <!-- Second Image -->
              <div class="image-item">
                <img src="Bedroom free icons designed by max_icons.jpg" alt="Image 2">
                <p>King's Bed</p>
              </div>
           </div>
            <?php if ($selected_room): ?>
                <p class="n"><?php echo $selected_room['room_name']; ?></p>
                <p><?php echo $selected_room['description']; ?></p>
            <?php endif; ?>
        </div>
        <div class="option">
           <p>Add an extra room to your booking if desired. Otherwise, proceed to book the room you have selected.</p>
           <button class="book-button">BOOK</button>
        </div>
    </div>




    <div class="containerrd">
    <img src="Download real estate building logo icon design vector for free.jpg" alt="Add Room Image" class="image">
    <span class="textr">Add Room <p>&darr;</p></span>
    </div>




    <div class="overlayy" id="overlayy"></div>

<div class="hidden-block" id="hiddenBlock">
        <button class="m"> X</button>

    <div class="containerd">
        <div class="pay-d">
        <p id="message" style="color: #ad4717; display: none;  font-size:22px; font-weight:bold;"></p>
            <?php if ($selected_room): ?>
                <p style="font-size: 20px; font-family:'Times New Roman', Times, serif; font-weight:800;">Room: <?php echo htmlspecialchars($selected_room['room_name']); ?></p>
                <p>Days: <?php echo $days . ' day' . ($days > 1 ? 's' : ''); ?></p>
                <p style="font-size: 22px; font-family:'Times New Roman', Times, serif; font-weight:bold; text-decoration:underline;">Total: Ksh <?php echo number_format($total_cost, 2); ?></p>
            <?php endif; ?>
        </div>

        <div class="formm-container">
    <h2 class="formm-title">GUEST DETAILS</h2>
    <p class="formm-note">
        Prime Guest Lodge
    </p>
    <form>
        <div class="formm-group">
            <label for="title" class="formm-label">TITLE</label>
            <select id="title" name="title" class="formm-input" required>
                <option value="" disabled selected>-</option>
                <option value="dr">Dr</option>
                <option value="ms">Honorable</option>
                <option value="mr">Mr</option>
                <option value="ms">Ms</option>
            </select>
        </div>
        <div class="formm-row">
            <div class="formm-group">
                <label for="first-name" class="formm-label">FIRST NAME</label>
                <input type="text" id="first-name" name="first-name" class="formm-input">
            </div>
            <div class="formm-group">
                <label for="last-name" class="formm-label">LAST NAME</label>
                <input type="text" id="last-name" name="last-name" class="formm-input" >
            </div>
        </div>
        <div class="formm-group">
            <label for="country" class="formm-label">THE PAYMENT CODE</label>
            <input type="text" id="code" name="p-code" class="formm-input" >
        </div>
        <div class="formm-row">
            <div class="formm-group">
                <label for="phone" class="formm-label">PHONE</label>
                <input type="text" id="phone" name="phone" class="formm-input" placeholder="+00 000 000 000">
            </div>
            <div class="formm-group">
                <label for="email" class="formm-label">EMAIL</label>
                <input type="email" id="email" name="email" class="formm-input" placeholder="email@example.com" required>
            </div>
        </div>
        <button type="submit" class="formm-submit">Submit</button>
    </form>
</div>
</div>
</div>


    <!-- Message Box for Already Selected -->
    <div class="message-box" id="messageBox" style="display: none;">Room Already Selected</div>


    <!-- Full-Screen Block -->
<div class="block-box" id="blockBox" style="display: none;">
        <p> X </p>

        <div class="box-container">
        <!-- First Square Box -->
        <div class="square-box1" id="squareBox1">

        </div>
        
        <!-- Second Square Box -->
        <div class="square-box2" onclick="addRoomsToSelection(); addRoomsToSelectionn();  boxdisp();">
            <h3>ADD ROOM</h3>
            <h5>+</h5>
        </div>
    </div>

</div>


<div id="notificationBox">Room Added</div>


    <!-- Main Container -->
    <div class="container" tabindex="0">
        <!-- Scroll Container -->
        <div class="scroll-container">
            <div class="display">
                <!-- First Row: roo1, roo2 -->
                <div class="room-row">
                    <div class="roo1" id="roo1">
                        <img src="im1.avif" alt="Room Image">
                        <div class="text-container">
                            <h3>Paris</h3>
                            <p>This kind of room would be perfect for those looking to escape into a setting that feels both chic and relaxing...</p>
                            <p>Room Amenities:</p>
                            <ul>
                              <li>Free Wi-Fi</li>
                              <li>Air Conditioning</li>
                              <li>Flat-screen TV</li>
                              <li>Room Service</li>
                              <li>Private Bathroom</li>
                              <li>Complimentary Breakfast</li>
                            </ul>
                            <button class="selectBtn" id="roo1" onclick="selectRoom('roo1')">SELECT</button>  
                        </div>
                    </div>
                    <div class="roo2" id="roo2">
                        <img src="im2.jpg" alt="Room Image">
                        <div class="text-container">
                            <h3>Tokyo</h3>
                            <p>Embrace the perfect blend of tradition and modernity in Tokyo...</p>
                            <p>Room Amenities:</p>
                            <ul>
                              <li>Free Wi-Fi</li>
                              <li>Air Conditioning</li>
                              <li>Flat-screen TV</li>
                              <li>Room Service</li>
                              <li>Private Bathroom</li>
                              <li>Complimentary Breakfast</li>
                            </ul>
                            <button class="selectBtn" id="roo2" onclick="selectRoom('roo2')">SELECT</button>  
                        </div>
                    </div>
                </div>
                
                <!-- Second Row: roo3, roo4 -->
                <div class="room-row">
                    <div class="roo3" id="roo3">
                        <img src="im3.avif" alt="Room Image">
                        <div class="text-container">
                            <h3>New York</h3>
                            <p>Stay in the heart of the action in New York...</p>
                            <p>Room Amenities:</p>
                            <ul>
                              <li>Free Wi-Fi</li>
                              <li>Air Conditioning</li>
                              <li>Flat-screen TV</li>
                              <li>Room Service</li>
                              <li>Private Bathroom</li>
                              <li>Complimentary Breakfast</li>
                            </ul>
                            <button class="selectBtn" id="roo3" onclick="selectRoom('roo3')">SELECT</button>  
                        </div>
                    </div>
                    <div class="roo4" id="roo4">
                        <img src="im4.jpg" alt="Room Image">
                        <div class="text-container">
                            <h3>Dubai</h3>
                            <p>Indulge in unparalleled luxury in Dubai...</p>
                            <p>Room Amenities:</p>
                            <ul>
                              <li>Free Wi-Fi</li>
                              <li>Air Conditioning</li>
                              <li>Flat-screen TV</li>
                              <li>Room Service</li>
                              <li>Private Bathroom</li>
                              <li>Complimentary Breakfast</li>
                            </ul>
                            <button class="selectBtn" id="roo4" onclick="selectRoom('roo4')">SELECT</button> 
                        </div>
                    </div>
                </div>
                
                <!-- Third Row: roo5, roo6 -->
                <div class="room-row">
                    <div class="roo5" id="roo5">
                        <img src="im5.jpg" alt="Room Image">
                        <div class="text-container">
                            <h3>London</h3>
                            <p>Enjoy a sophisticated stay in London...</p>
                            <p>Room Amenities:</p>
                            <ul>
                              <li>Free Wi-Fi</li>
                              <li>Air Conditioning</li>
                              <li>Flat-screen TV</li>
                              <li>Room Service</li>
                              <li>Private Bathroom</li>
                              <li>Complimentary Breakfast</li>
                            </ul>
                            <button class="selectBtn" id="roo5" onclick="selectRoom('roo5')">SELECT</button>  
                        </div>
                    </div>
                    <div class="roo6" id="roo6">
                        <img src="im6.jpg" alt="Room Image">
                        <div class="text-container">
                            <h3>Sydney</h3>
                            <p>Experience the stunning coastal views of Sydney...</p>
                            <p>Room Amenities:</p>
                            <ul>
                              <li>Free Wi-Fi</li>
                              <li>Air Conditioning</li>
                              <li>Flat-screen TV</li>
                              <li>Room Service</li>
                              <li>Private Bathroom</li>
                              <li>Complimentary Breakfast</li>
                            </ul>
                            <button class="selectBtn" id="roo6" onclick="selectRoom('roo6')">SELECT</button> 
                        </div>
                    </div>
                </div>
                
                <!-- Fourth Row: roo7, roo8 -->
                <div class="room-row">
                    <div class="roo7" id="roo7">
                        <img src="im7.jpg" alt="Room Image">
                        <div class="text-container">
                            <h3>Rome</h3>
                            <p>Immerse yourself in the rich history of Rome...</p>
                            <p>Room Amenities:</p>
                            <ul>
                              <li>Free Wi-Fi</li>
                              <li>Air Conditioning</li>
                              <li>Flat-screen TV</li>
                              <li>Room Service</li>
                              <li>Private Bathroom</li>
                              <li>Complimentary Breakfast</li>
                            </ul>
                            <button class="selectBtn" id="roo7" onclick="selectRoom('roo7')">SELECT</button>   
                        </div>
                    </div>
                    <div class="roo8" id="roo8">
                        <img src="im8.jpg" alt="Room Image">
                        <div class="text-container">
                            <h3>Cairo</h3>
                            <p>Discover the wonders of Cairo...</p>
                            <p>Room Amenities:</p>
                            <ul>
                              <li>Free Wi-Fi</li>
                              <li>Air Conditioning</li>
                              <li>Flat-screen TV</li>
                              <li>Room Service</li>
                              <li>Private Bathroom</li>
                              <li>Complimentary Breakfast</li>
                            </ul>
                            <button class="selectBtn" id="roo8" onclick="selectRoom('roo8')">SELECT</button>
                             
                        </div>
                    </div>
                </div>
                
                <!-- Fifth Row: roo9, roo10 -->
                <div class="room-row">
                    <div class="roo9" id="roo9">
                        <img src="im9.jpg" alt="Room Image">
                        <div class="text-container">
                            <h3>Berlin</h3>
                            <p>Enjoy a stylish and contemporary stay in Berlin...</p>
                            <p>Room Amenities:</p>
                            <ul>
                              <li>Free Wi-Fi</li>
                              <li>Air Conditioning</li>
                              <li>Flat-screen TV</li>
                              <li>Room Service</li>
                              <li>Private Bathroom</li>
                              <li>Complimentary Breakfast</li>
                            </ul>
                            <button class="selectBtn" id="roo9" onclick="selectRoom('roo9')">SELECT</button> 
                        </div>
                    </div>
                    <div class="roo10" id="roo10">
                        <img src="im10.jpg" alt="Room Image">
                        <div class="text-container">
                            <h3>Bangkok</h3>
                            <p>Indulge in the bustling energy of Bangkok...</p>
                            <p>Room Amenities:</p>
                            <ul>
                              <li>Free Wi-Fi</li>
                              <li>Air Conditioning</li>
                              <li>Flat-screen TV</li>
                              <li>Room Service</li>
                              <li>Private Bathroom</li>
                              <li>Complimentary Breakfast</li>
                            </ul>
                            <button class="selectBtn" id="roo10" onclick="selectRoom('roo10')">SELECT</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
        <!-- Know Class -->
        <div class="know">
            <div class="amount">
              <?php if ($selected_room): ?>
                <p>Room: <?php echo htmlspecialchars($selected_room['room_name']); ?></p>
                <p>Days: <?php echo $days . ' day' . ($days > 1 ? 's' : ''); ?></p>
                <p>Total: Ksh <?php echo number_format($total_cost, 2); ?></p>
              <?php endif; ?>
            </div>
            <div class="datess">
              <p>Check-in Date: <?php echo $checkin; ?></p>
              <p>Check-out Date: <?php echo $checkout; ?></p>
            </div>
        </div>
    </div>





    <div class="triangled" onclick="scrollToTop()">
        <div class="arrowd"></div>
    </div> 

    <div class="acc"> 
        <div class="block">
                <img src="logoo.jpg" style="cursor: pointer;">
        </div>
    
        <div class="info">
            <div class="section section1">
                <h3><a href="contact.html" class="about-link">Contact Details</a> </h3>
                <p><a href="contact.html" class="about-lin">0799963300</a></p>
                <p><a href="contact.html" class="about-lin">0708364240</a></p>
                <p class="pp">Prime Guest Lodge</p>
                <p class="oo">Maua basin, Meru</p>
            </div>
            <div class="section section2">
                <h3> <a href="herit.html" class="about-link">About Us</a></h3>
                <p><a href="contact.html" class="about-lin">Contact Us</a></p>
                <p><a href="locate.html" class="about-lin">Location</a></p>
            </div>
            <div class="section section3">
                <h3><a href="contact.html" class="about-link">Email Details</a> </h3>
                <p class="u"><a href="contact.html" class="about-lin">Kaithia@gmail.com</a></p>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://example.com/" target="_blank">
                    <img src="f.jpeg" alt="Facebook Share" class="social-icon">
                </a><br>
                <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                <form id="emailForm">
                    <div class="input-button-container">
                        <label for="email">Email Address:</label>
                        <input type="email" id="email" name="email" required>
                        <button type="submit" class="su">&#8594;</button>
                    </div>                
                </form>
            </div>
        </div>
    </div>
    




    <div class="overlayr" id="overlayr"></div>
    <div class="modal" id="modal">
        <p>Email submitted successfully!</p>
        <h2>PRIME GUEST NEWS, OFFERS AND ANNOUNCEMENTS</h2>
        <p>
          <strong>NEWSLETTER SIGNUP</strong><br>
        We love sharing our news and announcements with you on a regular basis so that you know what is happening in the world of Prime. To receive information about our ongoing specials and promotions, please complete the form below, and we will make sure to stay in touch.
        </p>
        <p>
            Your privacy is important to us, and we will never share or sell any information you provide to us. The notices you receive will be from Prime Lodge with hopes of enhancing your next experience with us.
        </p>
        <button id="closeModal">OK</button>
    </div>




    <div class="foop">
        <div class="ffsud">
            <h3><a href="contact.html">Contact Details</a> </h3>
                <p>0799963300</a></p>
                <p>0708364240</a></p>
                <p>Prime Guest Lodge</p>
                <p>Maua basin, Meru</p>
        </div>
        <div class="ddsud">
            <h3><a href="contact.html">Email Details</a> </h3>
            <p><a href="contact.html">Kaithia@gmail.com</a></p>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://example.com/" target="_blank">
                <img src="f.jpeg" alt="Facebook Share" class="social-icons">
            </a>
        </div>
        <div class="dams">
            <p style="font-weight: bold;">SUBSCRIBE TO OUR NEWSLETTER</p>
            <form id="newsletterForms">
                <label for="email" style="color: #000000;">Email Address:</label>
                <input type="email" id="emails" name="email" required>
                <button type="submit" class="sug">
                    &#8594; <!-- Arrow symbol -->
                </button>
            </form>
        </div>
    </div>



    <div id="popupBox" class="popupBox">
        <div class="popupBox-content">
            <p>Email submitted successfully!</p>
            <button onclick="closePopup()">Close</button>
        </div>
    </div>

    
        
        <div class="footer">
            
            <div class="copyright">
                © 2024 Prime Guest Lodge | Made by ezramuthomi@gmail.com
            </div>
            <div class="stp">
            <a href="site.html">Site map</a> 
            <a href="Tou.html">Terms of use</a> 
            <a href="privacy.html">Privacy Policy</a>
            </div>
        </div>
        


    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script>
        // Initialize Flatpickr
        flatpickr('.flatpickr', {
            dateFormat: "Y-m-d", // Adjust date format as needed
        });
    </script>

    <script src="acc.js"></script>
</body>
</html>


    

