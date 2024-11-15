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
        retrieveTotalPrice(totalPrice);
        calculateAndDisplayTotal(totalPrice);
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
        <br>
        <label>
        <input type="radio" name="rateOption2" value="1500" />
        Best Available Rate with Breakfast Ksh 300
        </label>
        <br>
        <button class="book-button">BOOK</button>
        `;

        // After updating the HTML content, add the event listener
        document.querySelector('.book-button').addEventListener('click', handleBookButtonClick);


            // Set background image and style it
            document.querySelector('.imagee').style.backgroundImage = `url(${roomImage})`;
            document.querySelector('.imagee').style.backgroundSize = 'cover';
            document.querySelector('.imagee').style.backgroundPosition = 'center';
            document.querySelector('.imagee').style.height = '320px'; // Adjust height
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
            let pair2 = createImageParagraphPair(roomImager2, "1 person");

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




function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This will add a smooth scroll effect
    });
}




// JavaScript to display the full-screen modal only for button clicks
document.querySelectorAll('.selectBtn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('selectionMessage').style.display = 'flex';
        displayC();
    });
});

// Function to close the modal
function closeModal() {
    document.getElementById('selectionMessage').style.display = 'none';
}


    
    

// Get the roomId from the URL
const urlParamso = new URLSearchParams(window.location.search);
const rooomId = urlParams.get('room'); // Get the room ID from the URL

// Function to display the current room details (image and title)
function displayCurrentRoom(roomId) {
    if (rooomId) {
        // Find the room with the specified ID within the display section
        const selectedRoom = document.getElementById(rooomId);
        if (!selectedRoom) {
            console.error(`No room found with ID: ${rooomId}`);
            return;
        }

        // Extract image and title details
        const roomImage = selectedRoom.querySelector('img')?.src;
        const roomTitle = selectedRoom.querySelector('h3')?.textContent;

        if (!roomImage || !roomTitle) {
            console.error("Room image or title not found.");
            return;
        }

        // Get the modal-content element and clear any previous content
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = '';

        // Create the first box with the room image and title
        const roomBox = document.createElement('div');
        roomBox.classList.add('box', 'room-box');
        roomBox.innerHTML = `
            <p style="color: #b3582f;">CURRENT ROOM</p>
            <img src="${roomImage}" alt="${roomTitle}" style="width: 95%; border-radius: 1px;">
            <h3>${roomTitle}</h3>
        `;
        
        // Append the roomBox to the modal content
        modalContent.appendChild(roomBox);

        // Display the modal by changing display property to flex
        document.getElementById('selectionMessage').style.display = 'flex';
    } else {
        console.error("Room ID not provided in URL.");
    }
}


// Function to initialize both boxes
function displayC(roomId) {
    displayCurrentRoom(roomId); 
    createAddRoomBox();         
}



let roommId = "";  

// Function to handle the button click and store the room ID
function calculate(button) {
    // Get the ID of the button element that was clicked
    roommId = button.id;  
    console.log(roommId);  
}

// Function to create the 'ADD ROOM' box with "+" symbol
function createAddRoomBox() {
    // Get the modal-content element
    const modalContent = document.querySelector('.modal-content');

    // Create the second box with the addition sign and "ADD ROOM" text
    const addRoomBox = document.createElement('div');
    addRoomBox.classList.add('box', 'add-room-box');
    addRoomBox.innerHTML = `
        <span style="font-size: 48px; font-weight: bold;">+</span>
        <p>ADD ROOM</p>
    `;
    
    // Append the addRoomBox to the modal content
    modalContent.appendChild(addRoomBox);

    // Add click event to the 'ADD ROOM' box
    addRoomBox.addEventListener('click', function() {
        console.log(roommId);

        // Call the handleAddRoomClick function with roommId
        handleAddRoomClick(roommId);

        // Display a dialog box to show that it was clicked
        showDialogBox(`Room with ID ${roommId} has been added!`);
    });
}


// Function to handle 'ADD ROOM' box click and calculate the cost
function handleAddRoomClick(roommId) {
    console.log("Adding room with ID:", roommId);  // Corrected to roommId

    // Assuming these utility functions exist
    const { checkin, checkout } = getQueryParams();
    if (checkin && checkout) {
        const checkInDate = parseDate(checkin);
        const checkOutDate = parseDate(checkout);

        if (!checkInDate || !checkOutDate) {
            console.log("Invalid date format. Ensure dates are in dd-mm-yyyy.");
            return;
        }

        const daysDifference = (checkOutDate - checkInDate) / (1000 * 3600 * 24);
        const room = roomDetails[roommId]; 
        const roomPrice = getRoomPrice(room.name); 

        if (roomPrice === "City not found") {
            console.log("Invalid room.");
            return;
        }

        const totalPrice = roomPrice * daysDifference;
        const amountElement = document.querySelector('.amount');

        // Check if there is already content in the element
        if (amountElement.innerHTML.trim() !== '') {
            // Append new content below the existing content
            amountElement.innerHTML += `<br><br>Room:&nbsp;&nbsp;${room.name} <br> Days:&nbsp;&nbsp;&nbsp;${daysDifference} days <br> Ksh:&nbsp;&nbsp;&nbsp;&nbsp;${totalPrice}`;
            displayGrandTotal();
            calculateAndDisplayT(totalPrice);
        }
       }
}



// Function to display a dialog box confirming the click
function showDialogBox(message) {
    // Create a dialog box div
    const dialogBox = document.createElement('div');
    dialogBox.classList.add('dialog-box');
    dialogBox.innerHTML = `
        <p>${message}</p>
        <button onclick="closeDialogBox()">CLOSE</button>
    `;

    // Append the dialog box to the body
    document.body.appendChild(dialogBox);

    // Optionally, add some styling for the dialog box (inline style for simplicity)
    dialogBox.style.position = 'fixed';
    dialogBox.style.top = '50%';
    dialogBox.style.left = '50%';
    dialogBox.style.transform = 'translate(-50%, -50%)';
    dialogBox.style.padding = '20px';
    dialogBox.style.backgroundColor = 'white';
    dialogBox.style.border = '1px solid black';
    dialogBox.style.zIndex = '1000';
}

// Function to close the dialog box
function closeDialogBox() {
    const dialogBox = document.querySelector('.dialog-box');
    if (dialogBox) {
        dialogBox.remove();
    }
}




// Function to retrieve and display the cumulative total price
function displayGrandTotal() {
    const amountElement = document.querySelector('.amount');
    const roomEntries = amountElement.innerHTML.match(/Ksh:&nbsp;&nbsp;&nbsp;&nbsp;(\d+)/g);

    // Calculate the sum of all individual room prices
    let grandTotal = 0;
    if (roomEntries) {
        roomEntries.forEach(entry => {
            const price = parseInt(entry.match(/\d+/)[0], 10);
            grandTotal += price;
        });
    }

    // Append the grand total below the existing room information
    amountElement.innerHTML += `<br><br><strong style="color: #ad5525; font-size: 18px; font-family: 'Times New Roman', Times, serif;">Total Price(Added Rooms): Ksh: ${grandTotal}</strong>`;
}



// Function to append the total price to the amount div
function retrieveTotalPrice(totalPrice) {
    // Get the last .amount element where you want to append the total
    const amountElement = document.querySelector('.amount');

    // Append the total price below the content
    amountElement.innerHTML += `<br><br><strong>Total Price: Ksh: ${totalPrice}</strong>`;
}





function handleBookButtonClick() {
    // Find the block element that you want to display
    const block = document.querySelector('.bookingInfo');
  
    // Add the class to trigger the animation
    block.classList.add('show');
}
  


// Function to handle closing the booking info block and clearing the total
function closeBookingInfo() {
    const block = document.querySelector('.bookingInfo');
    block.classList.remove('show');

    // Clear the total from the .information element
    const informationElement = document.querySelector('.information');
    if (informationElement) {
        // Remove the total text if it exists
        informationElement.innerHTML = informationElement.innerHTML.replace(/<br><br><strong>Total: Ksh \d+<\/strong>/, '');
    }
}

// Add the event listener for the close button click
document.querySelector('.closes-button').addEventListener('click', closeBookingInfo);





// Function to calculate the total price and display in .information
function calculateAndDisplayTotal(totalPrice) {
    // Compute the sum
    const sum = totalPrice;

    // Find the element with class "information" and update its content
    const informationElement = document.querySelector('.information');
    informationElement.innerHTML = `Price: Ksh ${sum}`;
}



// Function to calculate the total price and display in .information
function calculateAndDisplayT(totalPrice) {
    const informationElement = document.querySelector('.information');
    if (informationElement) {
        // Check if there is existing content
        if (informationElement.innerHTML.trim() !== '') {
            informationElement.innerHTML += `<br><br>Price: Ksh ${totalPrice}`;
        } else {
            // Set content if empty
            informationElement.innerHTML = `Total Price: Ksh ${totalPrice}`;
        }
    } else {
        console.log("Element with class 'information' not found.");
    }
}


// Add event listener to the book button
document.querySelector('.book-button').addEventListener('click', calculateAndDisplayGrandTotal);


function calculateAndDisplayGrandTotal() {
    // Select the .information element
    const informationElement = document.querySelector('.information');

    if (informationElement) {
        // Extract all price values from the element
        const prices = informationElement.innerHTML.match(/Ksh (\d+)/g);

        if (prices) {
            // Parse the numeric values
            const parsedPrices = prices.map(price => parseInt(price.replace('Ksh ', ''), 10));

            // Check if the "Best Available Rate with Breakfast" option is checked
            const isRateOption2Checked = document.querySelector('input[name="rateOption2"]:checked');

            if (isRateOption2Checked) {
                // Add 300 to each price if rateOption2 is checked
                for (let i = 0; i < parsedPrices.length; i++) {
                    parsedPrices[i] += 300;
                }
            }

            // Calculate the total by summing the prices
            const total = parsedPrices.reduce((sum, value) => sum + value, 0);

            // Append the grand total to the .information element
            informationElement.innerHTML += `<br><br><strong>Total: Ksh ${total}</strong>`;
        } else {
            console.log("No prices found in the information element.");
        }
    } else {
        console.log("Element with class 'information' not found.");
    }
}




