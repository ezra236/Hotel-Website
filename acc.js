function toggleMenu() {
    // Toggle the "open" class on the hamburger menu
    document.getElementById("hamburgerMenu").classList.toggle("open");
    // Show or hide the menu links
    document.getElementById("menuLinks").classList.toggle("show");
}


// Function to get the room ID from the URL
function getRoomIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('room'); // Assuming the room ID is passed as a query parameter, e.g., ?room=roo1
}

// Function to handle the room selection
function selectRoom(roomId) {
    // Get the room ID from the URL
    const urlRoomId = getRoomIdFromURL();

    // If the button's room ID matches the room ID in the URL
    if (roomId === urlRoomId) {
        // Show the message box for "Room Already Selected"
        document.getElementById("messageBox").style.display = "block";
        document.getElementById("blockBox").style.display = "none"; // Hide the block box if room is already selected
    } else {
        // Call another function to show the block-box
        showBlockBox(roomId);
    }
}

// Global array to store room IDs that are not equal to the URL room ID
let unmatchedRoomIds = [];

// Function to display the block-box (full screen loading message)
function showBlockBox(roomId) {
    document.getElementById("blockBox").style.display = "block"; // Show the block box
    document.getElementById("messageBox").style.display = "none"; // Hide the message box if different room is selected

    unmatchedRoomIds.push(roomId);

    const closeBtn = blockBox.querySelector('p');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            blockBox.style.display = "none"; // Hide the block-box when clicked
        });
    }
}


// Function to get the room ID from the URL
function getRoomIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('room'); // Get the room_id parameter from the URL
}


// Function that is called when square-box2 is clicked
function addRoomsToSelection() {
    // Get the room ID from the URL
    const urlRoomId = getRoomIdFromURL();

    // Push the URL room ID into the unmatched array if not already present
    if (!unmatchedRoomIds.includes(urlRoomId)) {
        unmatchedRoomIds.push(urlRoomId);
    }

    // Show the dialog box when clicked and display the unmatched room IDs in the alert
    alert('Click has been listened to! Unmatched Room IDs: ' + unmatchedRoomIds.join(', '));

    // Call the function to update the total and room details
    updateRoomDetails(unmatchedRoomIds);
}

// Function to calculate the new total price and display room names
function updateRoomDetails(roomIds) {
    // Clear the content of the "amount" class
    const amountContainer = document.querySelector('.amount');
    amountContainer.innerHTML = '';

    // Create a new array to track unique room IDs
    let uniqueRoomIds = [];

    // Loop through the room IDs and ensure no duplicates
    roomIds.forEach((roomId) => {
        // Check if roomId already exists in the uniqueRoomIds array
        if (uniqueRoomIds.includes(roomId)) {
            // If it exists more than once, remove the first occurrence
            const index = uniqueRoomIds.indexOf(roomId);
            if (index !== -1) {
                uniqueRoomIds.splice(index, 1);
            }
        }
        // Add the current roomId to the uniqueRoomIds array
        uniqueRoomIds.push(roomId);
    });

    // Now calculate the new total and display the room details
    let totalPrice = 0;
    let roomNames = [];

    uniqueRoomIds.forEach((roomId) => {
        if (rooms[roomId]) {
            const room = rooms[roomId];
            totalPrice += room.price; // Add the price to the total
            roomNames.push(room.room_name); // Collect the room names
        }
    });

    // Display the room names and total price in the "amount" class
    amountContainer.innerHTML = `
        <p>Selected Rooms: ${roomNames.join(', ')}</p>
        <p>Total Price: $${totalPrice}</p>
    `;
}


    

// Predefined room data
const rooms = {
    roo1: {
        room_name: "Paris",
        price: 1200,
        image: "im1.avif"  // Image for Paris room
    },
    roo2: {
        room_name: "Tokyo",
        price: 1500,
        image: "im2.jpg"  // Image for Tokyo room
    },
    roo3: {
        room_name: "New York",
        price: 1200,
        image: "im3.avif"  // Image for New York room
    },
    roo4: {
        room_name: "Dubai",
        price: 1500,
        image: "im4.jpg"  // Image for Dubai room
    },
    roo5: {
        room_name: "London",
        price: 1300,
        image: "im5.jpg"  // Image for London room
    },
    roo6: {
        room_name: "Sydney",
        price: 1400,
        image: "im6.jpg"  // Image for Sydney room
    },
    roo7: {
        room_name: "Los Angeles",
        price: 1600,
        image: "im7.jpg"  // Image for Los Angeles room
    },
    roo8: {
        room_name: "Rome",
        price: 1250,
        image: "im8.jpg"  // Image for Rome room
    },
    roo9: {
        room_name: "Berlin",
        price: 1350,
        image: "im9.jpg"  // Image for Berlin room
    },
    roo10: {
        room_name: "Bangkok",
        price: 1100,
        image: "im10.jpg"  // Image for Bangkok room
    }
};

// Function to get query parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fetch the room ID from the URL
const roomId = getQueryParam("room");

// Get the div where content will be displayed
const squareBox1 = document.getElementById("squareBox1");

// Check if the room exists in the data
if (roomId && rooms[roomId]) {
    const room = rooms[roomId];
    squareBox1.innerHTML = `
        <h2>CURRENT ROOM: ${room.room_name}</h2>
        <img src="${room.image}" alt="${room.room_name}" style="max-width: 100%; height: auto;">
        <p><strong>Price per night: $${room.price}</strong></p>
    `;
} else {
    // Display "Room not found" if the room ID is invalid or missing
    squareBox1.innerHTML = `
        <p>Room not found.</p>
    `;
}

