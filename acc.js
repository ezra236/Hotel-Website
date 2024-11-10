function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        checkin: urlParams.get('checkin'),
        checkout: urlParams.get('checkout')
    };
}

// Function to update the days section with check-in and check-out dates
function updateDates() {
    const { checkin, checkout } = getQueryParams();
    if (checkin && checkout) {
        document.getElementById('check-in-display').innerHTML = `Check-in:<br><br> ${checkin}`;
        document.getElementById('check-out-display').innerHTML = `Check-out:<br><br> ${checkout}`;
    }
}

// Call the function to update the dates when the page loads
window.onload = updateDates;


const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get('room'); // Get the room ID from the URL

// Content for each room
const roomDetails = {
    roo1: {
        name: "Paris"
    },
    roo2: {
        name: "Tokyo"
    },
    roo3: {
        name: "New York"
    },
    roo4: {
        name: "Dubai"
    },
    roo5: {
        name: "London"
    },
    roo6: {
        name: "Sydney"
    },
    roo7: {
        name: "Rome"
    },
    roo8: {
        name: "Cairo"
    },
    roo9: {
        name: "Berlin"
    },
    roo10: {
        name: "Bangkok"
    }
};




// Function to get the dates and calculate the total price
function calculateTotalPrice() {
    const { checkin, checkout } = getQueryParams(); // Get check-in and check-out dates from the URL

    if (checkin && checkout) {
        // Parse the check-in and check-out date strings (dd-mm-yyyy format)
        const checkInDate = parseDate(checkin);
        const checkOutDate = parseDate(checkout);

        if (!checkInDate || !checkOutDate) {
            console.log("Invalid date format. Please ensure the dates are in the format dd-mm-yyyy.");
            return;
        }

        // Calculate the difference in time (in milliseconds)
        const timeDifference = checkOutDate - checkInDate;

        // Convert time difference from milliseconds to days
        const daysDifference = timeDifference / (1000 * 3600 * 24);

        // Get the room name from the roomDetails object using roomId
        const room = roomDetails[roomId];
        const roomPrice = getRoomPrice(room.name); // Get the price for the selected room
        
        if (roomPrice === "City not found") {
            console.log("Invalid room.");
            return;
        }

        // Calculate the total cost
        const totalPrice = roomPrice * daysDifference;

        // Display the result in the 'amount' div
        const amountElement = document.querySelector('.amount');
        amountElement.innerHTML = `Room:&nbsp&nbsp ${room.name} <br> Days:&nbsp&nbsp&nbsp ${daysDifference} days <br> Ksh:&nbsp&nbsp&nbsp&nbsp&nbsp ${totalPrice}`;
    } else {
        console.log("Check-in or Check-out date is missing.");
    }
}

// Helper function to parse the date in dd-mm-yyyy format
function parseDate(dateString) {
    const [day, month, year] = dateString.split('-'); // Split the date by "-"
    const date = new Date(`${year}-${month}-${day}`); // Reformat to yyyy-mm-dd and create a Date object

    // Check if the date is valid
    if (isNaN(date)) {
        return null; // Return null if the date is invalid
    }

    return date;
}

// Call the function to calculate and display the days
calculateTotalPrice();



// Function to get the room price based on the selected city (room)
function getRoomPrice(city) {
    const pricePerRoom = 1200; // Price for each room in Ksh

    let price;

    switch (city) {
        case "Paris":
        case "Tokyo":
        case "New York":
        case "Dubai":
        case "London":
        case "Sydney":
        case "Rome":
        case "Cairo":
        case "Berlin":
        case "Bangkok":
            price = pricePerRoom; // All cities have the same price
            break;
        default:
            price = "City not found"; // In case the city is not in the list
    }

    return price;
}





// Toggle the visibility of the menu
function toggleMenu() {
    const menu = document.getElementById('menuLinks');
    menu.classList.toggle('show');
}



// Get the roomId from the URL
const urlParamss = new URLSearchParams(window.location.search);
const roomIdd = urlParams.get('room'); // Get the room ID from the URL

// Function to display the room details in the chosen section
function displayChosenRoom() {
    if (roomIdd) {
        // Find the room with the specified ID within the display section
        const selectedRoom = document.getElementById(roomIdd);
        
        if (selectedRoom) {
            // Extract image, text, and other details
            const roomImage = selectedRoom.querySelector('img').src;
            const roomTitle = selectedRoom.querySelector('h3').textContent;
            const roomDescription = selectedRoom.querySelector('p').textContent;


            document.querySelector('.option').innerHTML = `
             <p>SELECT</p>
             <label>
              <input type="radio" name="rateOption" value="1200" />
               Best Available Rate Ksh 1200
             </label>
             <br>
             <label>
              <input type="radio" name="rateOption" value="1500" />
               Best Available Rate with Breakfast Ksh 1500
             </label>
             <br>
            <button class="book-button">BOOK</button>
             `;


            // Set background image and style it
            document.querySelector('.imagee').style.backgroundImage = `url(${roomImage})`;
            document.querySelector('.imagee').style.backgroundSize = 'cover';
            document.querySelector('.imagee').style.backgroundPosition = 'center';
            document.querySelector('.imagee').style.height = '350px'; // Adjust height
            document.querySelector('.imagee').style.width = '300px';
            document.querySelector('.imagee').style.borderRadius = '1px'; // Rounded corners
            document.querySelector('.imagee').style.marginLeft = '15px'; 

            let roomImager1 = "Bedroom free icons designed by max_icons.jpg"; // First image
            let roomImager2 = "Profile Icon Silhouette PNG Transparent, Avatar Icon Profile Icon Member Login Vector Isolated, Login Icons, Profile Icons, Avatar Icons PNG Image For Free Download.jpg"; // Second image

            // Create a container to hold both image-paragraph pairs side by side
            let containerElement = document.createElement('div');
            containerElement.style.display = 'flex';  // Use Flexbox to display items side by side
            containerElement.style.gap = '20px'; // Optional: Add space between image-paragraph pairs

            // Function to create an image and paragraph pair
               function createImageParagraphPair(imageSrc, textContent) {
                     // Create a div container for the image and paragraph pair
                    let pairContainer = document.createElement('div');
                    pairContainer.style.display = 'flex';
                    pairContainer.style.flexDirection = 'column'; // Stack the image and paragraph vertically
                    pairContainer.style.alignItems = 'center'; // Center them horizontally

                    // Create the image element
                    let imageElement = document.createElement('img');
                    imageElement.src = imageSrc;
                    imageElement.style.width = '50px';
                    imageElement.style.height = '50px';
                    imageElement.style.borderRadius = '5px';

                    // Create the paragraph element
                    let paragraphElement = document.createElement('p');
                    paragraphElement.textContent = textContent;
                    paragraphElement.style.marginTop = '0px'; // Optional: Adjust the margin

                    // Append the image and paragraph to the pair container
                    pairContainer.appendChild(imageElement);
                    pairContainer.appendChild(paragraphElement);

                  return pairContainer;
                }

                    
            let pair1 = createImageParagraphPair(roomImager1, "King's Bed");

            // Create the second image-paragraph pair
            let pair2 = createImageParagraphPair(roomImager2, "Queen's Bed");

            // Append both pairs to the container
            containerElement.appendChild(pair1);
            containerElement.appendChild(pair2);

            // Now append the container to the .text element
            document.querySelector('.text').appendChild(containerElement);



            // Set the inner HTML of the text container (title and description)
            document.querySelector('.text').innerHTML += `<h3 style="font-size: 25px; font-family: 'Times New Roman', Times, serif; color: #ae1d1d;">${roomTitle}</h3><p>${roomDescription}</p>`;


            // Additional text styling can also be applied directly
            document.querySelector('.text').style.marginTop = '10px';
            document.querySelector('.text').style.fontSize = '18px';
            document.querySelector('.text').style.color = '#333';

        }
    }
}

// Call the function to display the room details in the chosen section
displayChosenRoom();
