<?php
// Extract query parameters from the URL
$checkin = isset($_GET['checkin']) ? htmlspecialchars($_GET['checkin']) : 'Not provided';
$checkout = isset($_GET['checkout']) ? htmlspecialchars($_GET['checkout']) : 'Not provided';

// Extract query parameters from the URL
$room_id = isset($_GET['room']) ? htmlspecialchars($_GET['room']) : null;

// Room data: Map room IDs to their content and prices
$rooms = [
    "roo1" => [
        "room_name" => "Paris",
        "image" => "im1.avif",
        "description" => "This kind of room would be perfect for those looking to escape into a setting that feels both chic and relaxing...",
        "price" => 1200, // Price per day in USD
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="refresh" content="5000">
    <link rel="icon" href="lilo.png" type="image/png">
    <title>Prime Guest Lodge</title>
    <link rel="stylesheet" href="stye.css">
</head>
<body>

    <div class="navbar">
        <div class="hamburger-menu" id="hamburgerMenu" onclick="toggleMenu()">
            <div class="line"></div>
            <div class="line"></div>
        </div>
    
        <!-- Menu links -->
        <ul class="menu-links" id="menuLinks">
            <li><a href="Guest.html">Go To Home Page</a></li>
        </ul>
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
           <p>SELECT</p>
           <br>
           <label>
           <input type="radio" name="rateOption2" value="1500" />
           Best Available Rate with Breakfast Ksh 300
           </label>
           <br>
           <button class="book-button">BOOK</button>
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
        <div class="square-box2" onclick="addRoomsToSelection()">
            <h3>ADD ROOM</h3>
            <h5>+</h5>
        </div>
    </div>

</div>




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
                <img src="lilo.png" style="cursor: pointer;">
        </div>
    
        <div class="info">
            <div class="section section1">
                <h3><a href="us.html" class="about-link">Contact Details</a> </h3>
                <p><a href="us.html" class="about-lin">0799963300</a></p>
                <p><a href="us.html" class="about-lin">0708364240</a></p>
                <p class="pp">Prime Guest Lodge</p>
                <p class="oo">Maua basin, Meru</p>
            </div>
            <div class="section section2">
                <h3> <a href="us.html" class="about-link">About Us</a></h3>
                <p><a href="us.html" class="about-lin">Contact Us</a></p>
                <p><a href="us.html" class="about-lin">Location</a></p>
            </div>
            <div class="section section3">
                <h3><a href="us.html" class="about-link">Email Details</a> </h3>
                <p class="u"><a href="us.html" class="about-lin">Kaithia@gmail.com</a></p>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://example.com/" target="_blank">
                    <img src="f.jpeg" alt="Facebook Share" class="social-icon">
                </a><br>
                <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
            <form action="send_email.php" method="post">
                <div class="input-button-container">
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required>
                    <button type="submit" class="su">
                        &#8594; <!-- Arrow symbol -->
                    </button>
                </div>
            </form>
            </div>
        </div>
    </div>
    
        
        <div class="footer">
            
            <div class="copyright">
                © 2024 Prime Guest Lodge | Made by ezramuthomi@gmail.com
            </div>
            <div class="stp">
            <a href="#">Site map</a> 
            <a href="#">Terms of use</a> 
            <a href="#">Privacy Policy</a>
            </div>
        </div>



    <script src="acc.js"></script>
</body>
</html>


    