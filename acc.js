document.addEventListener("DOMContentLoaded", function () {
    const dropdownContent = document.getElementById("dropdownn");
    const shapeContainer = document.getElementById("shape-container");

    // Function to disable or enable events inside the dropdown
    function manageDropdownEvents() {
        if (dropdownContent.classList.contains("show")) {
            dropdownContent.querySelectorAll("*").forEach(element => {
                element.style.pointerEvents = "auto"; // Enable events
            });
        } else {
            dropdownContent.querySelectorAll("*").forEach(element => {
                element.style.pointerEvents = "none"; // Disable events
            });
        }
    }

    // Toggle dropdown visibility, manage events, and scroll to top when shape-container is clicked
    shapeContainer.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click event from bubbling up
        dropdownContent.classList.toggle("show");
        manageDropdownEvents(); // Update the state of events based on visibility

        // Smooth scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    });

    // Close dropdown and disable events when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdownContent.contains(event.target) && event.target !== shapeContainer) {
            dropdownContent.classList.remove("show");
            manageDropdownEvents(); // Update the state of events when closed
        }
    });

    // Initialize: Ensure events are disabled by default
    manageDropdownEvents();
});



document.addEventListener('DOMContentLoaded', function() {
    const shapedSquare = document.getElementById('shaped-square');
    const slidingBlock = document.getElementById('slidingg-block');
    const closeButton = document.getElementById('close-button');
    const overlay = document.getElementById('overlay'); // Reference to the overlay

    shapedSquare.addEventListener('click', function() {
        slidingBlock.style.display = 'block';
        overlay.style.display = 'block'; // Show the overlay
        document.body.style.overflow = 'hidden'; // Disable scrolling
        setTimeout(() => {
            slidingBlock.style.right = '0'; // Slide the block into view
        }, 0);
    });

    closeButton.addEventListener('click', function() {
        slidingBlock.style.right = '-800px'; // Slide the block out of view
        setTimeout(() => {
            slidingBlock.style.display = 'none';
            overlay.style.display = 'none'; // Hide the overlay
            document.body.style.overflow = 'auto'; // Enable scrolling
        }, 500); // Match the CSS transition duration
    });
});



// Get today's date in the format yyyy-mm-dd
const today = new Date();
const formattedDate = today.toISOString().split('T')[0];

// Set the "Check-in" and "Check-out" dates to today's date
document.getElementById('check-in').value = formattedDate;
document.getElementById('check-out').value = formattedDate;


document.addEventListener("DOMContentLoaded", function() {
    // Get the check class element
    const checkElement = document.querySelector(".check");

    // Add click event listener to the check element
    checkElement.addEventListener("click", function(event) {
        // Prevent the event from bubbling up to the parent
        event.stopPropagation();
    });
});


// Function to toggle dropdown visibility on input click
function toggleDropdown(inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);

    input.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });

    // Close dropdown if clicking outside
    document.addEventListener('click', (event) => {
        if (!input.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
}

// Function to set value on dropdown item click
function setupDropdownValues(inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);
    const items = dropdown.querySelectorAll('div[data-value]');

    items.forEach(item => {
        item.addEventListener('click', () => {
            input.value = item.getAttribute('data-value');
            dropdown.style.display = 'none'; // Hide dropdown after selection
        });
    });
}

// Set up dropdowns and values for both inputs
toggleDropdown('room-number', 'roomdropdow'); // Updated ID
toggleDropdown('adults', 'adultsdropdow'); // Updated ID
setupDropdownValues('room-number', 'roomdropdow'); // Updated ID
setupDropdownValues('adults', 'adultsdropdow'); // Updated ID



document.addEventListener('DOMContentLoaded', function () {
    const modifyBooking = document.getElementById('modify-booking');
    const popover = document.getElementById('popover');
    const closePopover = document.getElementById('close-popover');
    const continuePopover = document.getElementById('continue-popover');

    // Show popover on "Modify Booking" click
    modifyBooking.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents event from affecting other elements
        popover.style.display = 'block';
    });

    // Hide popover on "Close" button click
    closePopover.addEventListener('click', (event) => {
        event.stopPropagation(); // Ensures the close click only affects the button
        popover.style.display = 'none';
    });

    // Prevent the popover from closing when clicking inside it
    popover.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});


document.getElementById('roomForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    const roomNumber = document.getElementById('room-number').value;

    try {
        // Send room number to the server
        const response = await fetch('rate.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `room-number=${encodeURIComponent(roomNumber)}`
        });

        if (response.ok) {
            const targetUrl = await response.text();
            window.open(targetUrl, '_blank'); // Open in new tab
        } else {
            alert('Invalid room number!'); // Show error if input is invalid
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while processing your request.');
    }
});


document.getElementById("continue-popover").addEventListener("click", function() {
    // Get the value of the confirmation number
    const confirmationNumber = document.getElementById("confirmation_number").value;

    // Redirect to cancel.html with the confirmation number as a query parameter
    window.location.href = `cancel.html?confirmation_number=${encodeURIComponent(confirmationNumber)}`;
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This will add a smooth scroll effect
    });
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
    unmatchedRoomIdss.push(roomId);

    const closeBtn = blockBox.querySelector('p');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            blockBox.style.display = "none"; // Hide the block-box when clicked
        });
    }
}


let unmatchedRoomIdss = [];

// Function that is called when square-box2 is clicked
function addRoomsToSelectionn() {
    // Get the room ID from the URL
    const urlRoomId = getRoomIdFromURL();

    // Push the URL room ID into the unmatched array if not already present
    if (!unmatchedRoomIdss.includes(urlRoomId)) {
        unmatchedRoomIdss.push(urlRoomId);
    }


    // Call the function to update the total and room details
    updateRoomDetailss(unmatchedRoomIdss);
}


// Function to calculate the new total price and display room names
function updateRoomDetailss(roomIds) {
    // Clear the content of the "amount" class
    const amountContainer = document.querySelector('.pay-d');
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
        <p style="font-size: 20px; font-weight:bold; color: #2c3e50;">Selected Rooms:<br> </p>
        <p>${roomNames.join('<br> ')}</p>
        <p style="font-size: 22px; color: #2c3e50; text-decoration:underline">Total Price: Ksh ${totalPrice}</p>
    `;
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
        <p style="font-size: 20px; font-weight:bold; color: #2c3e50;">Selected Rooms:<br> </p>
        <p>${roomNames.join('<br> ')}</p>
        <p style="font-size: 22px; color: #2c3e50; text-decoration:underline">Total Price: Ksh ${totalPrice}</p>
    `;

    adjustAmountHeight(); // Adjust the height of the amount container
}


function adjustAmountHeight() {
    // Get the amount container
    const amountContainer = document.querySelector('.amount');
    
    // Get the list of displayed rooms
    const roomElements = amountContainer.querySelectorAll('p:nth-of-type(2)'); // Assuming room names are in the second <p>
    
    // Split room names into an array
    const roomList = roomElements[0]?.innerHTML.split('<br>') || []; 

    // Check if more than 4 rooms are displayed
    if (roomList.length > 4) {
        // Get the current height of the amount container
        const currentHeight = parseFloat(window.getComputedStyle(amountContainer).height);
        
        // Increase the height by a factor of 1.3
        amountContainer.style.height = `${currentHeight * 1.3}px`;
    }
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
        room_name: "Rome",
        price: 1600,
        image: "im7.jpg"  // Image for Los Angeles room
    },
    roo8: {
        room_name: "Cairo",
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
        <img src="${room.image}" alt="${room.room_name}">
        <p><strong>Price per night: $${room.price}</strong></p>
    `;
} else {
    // Display "Room not found" if the room ID is invalid or missing
    squareBox1.innerHTML = `
        <p>Room not found.</p>
    `;
}




// Get the button, block, and overlay
const bookButton = document.querySelector('.book-button');
const hiddenBlock = document.getElementById('hiddenBlock');
const overlay = document.getElementById('overlayy');

// Add an event listener to the button to show the block
bookButton.addEventListener('click', function() {
    // Display the block and overlay
    hiddenBlock.style.display = 'block';
    overlay.style.display = 'block';

    // Add the 'active' class to trigger the bottom-to-top effect
    setTimeout(() => {
        hiddenBlock.classList.add('active');
    }, 10);  // A small delay to ensure the block is displayed first

    // Disable background scroll
    document.body.style.overflow = 'hidden';
});

// Get the close button and add event listener
const closeButton = document.querySelector('.m');

// Add click event listener to the close button
closeButton.addEventListener('click', function() {
    // Remove the 'active' class to reverse the effect
    hiddenBlock.classList.remove('active');

    // Hide the block and overlay after the animation
    setTimeout(() => {
        hiddenBlock.style.display = 'none';
        overlay.style.display = 'none';
    }, 500);  // Wait for the transition to complete before hiding

    // Re-enable background scroll
    document.body.style.overflow = 'auto';
});








document.querySelector('.formm-submit').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    // Get the form data
    const title = document.querySelector('#title').value;
    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const paymentCode = document.querySelector('#code').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;

    // Validate form fields
    if (!title || !firstName || !lastName || !paymentCode || !phone || !email) {
        alert('Please fill in all fields!');
        return;
    }

    // Get the content from the "pay-d" class
    const paymentDetails = document.querySelector('.pay-d').textContent.trim();

    // Validate if the payment details are not empty
    if (paymentDetails === '') {
        alert('Payment details cannot be empty!');
        return;
    }

    // Split the content into lines
    const lines = paymentDetails.split('\n');

    // Ensure there are at least two lines (first and last)
    if (lines.length < 2) {
        alert('Insufficient data in payment details!');
        return;
    }

    // Get the first part (all lines except the last one) for the first column
    const firstPart = lines.slice(0, -1).join('\n').trim();
    const lastLine = lines[lines.length - 1].trim();

    // Get the query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const room = urlParams.get('room');
    const checkin = urlParams.get('checkin');
    const checkout = urlParams.get('checkout');

    if (!room || !checkin || !checkout) {
        alert('Room, check-in, and check-out details are required in the URL!');
        return;
    }

    // Generate a random number
    const randomNumber = Math.floor(Math.random() * 1000000);

    // Create the box element
    let box = document.createElement('div');

    // Style the box using JavaScript
    box.style.position = 'fixed';
    box.style.top = '50%';
    box.style.left = '45%';
    box.style.transform = 'translate(-50%, -50%)';
    box.style.width = '300px';
    box.style.height = '210px';
    box.style.border = '10px solid #c44d16';
    box.style.backgroundColor = 'white';
    box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    box.style.borderRadius = '1px';
    box.style.textAlign = 'center';
    box.style.lineHeight = '10px';
    box.style.fontFamily = 'Arial, sans-serif';
    box.style.fontSize = '18px';
    box.style.color = 'black';
    box.style.zIndex = '20000';

    // Add the box to the body
    document.body.appendChild(box);

    // Create an AJAX request to send data to submit_payment.php
    const xhr1 = new XMLHttpRequest();
    xhr1.open('POST', 'submit_payment.php', true);
    xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr1.onload = function () {
        if (xhr1.status === 200) {
            // Update box content with well-organized text
box.innerHTML = `
<p style="margin: 10px; font-size: 18px; line-height: 1.5;">
    Guest Details submitted successfully!<br>
    We will send you your reception number to your email.<br>
    Have a great day!<br><br>
    <strong>Once Prime, Always Prime!</strong>
</p>`;

        } else {
            box.textContent = 'Error submitting payment.';
        }

        setTimeout(() => {
            document.body.removeChild(box);
        }, 15000);

    };

    // Send the data to submit_payment.php
    xhr1.send(`title=${encodeURIComponent(title)}&first_name=${encodeURIComponent(firstName)}&last_name=${encodeURIComponent(lastName)}&payment_code=${encodeURIComponent(paymentCode)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&first_part=${encodeURIComponent(firstPart)}&last_line=${encodeURIComponent(lastLine)}&room=${encodeURIComponent(room)}&check_in=${encodeURIComponent(checkin)}&check_out=${encodeURIComponent(checkout)}&random_number=${randomNumber}`);
});






function boxdisp() {
    const box = document.getElementById('notificationBox');
    box.style.display = 'block';

    setTimeout(() => {
        box.style.display = 'none';
    }, 5000);
}





const form = document.getElementById('emailForm');
        const modal = document.getElementById('modal');
        const overlayy = document.getElementById('overlayr');
        const closeModal = document.getElementById('closeModal');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission
            const email = document.getElementById('email').value;

            // Simulate sending email with fetch or AJAX (optional)
            fetch('send_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `email=${encodeURIComponent(email)}`,
            }).then(response => {
                if (response.ok) {
                    // Show modal
                    modal.style.display = 'block';
                    overlayy.style.display = 'block';
                } else {
                    alert('Failed to submit email. Please try again.');
                }
            }).catch(error => {
                console.error('Error:', error);
            });
        });

        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
            overlayy.style.display = 'none';
        });


        


        if (/Mobi|Android/i.test(navigator.userAgent)) {
            let lastScrollY = window.scrollY;
        
            document.addEventListener('scroll', () => {
                const finis = document.querySelector('.finis');
                const navContainer = document.querySelector('.nav-container');
        
                if (window.scrollY > lastScrollY) {
                    // Scrolling down
                    finis.style.top = '-40px'; // Hide the finis container
                    navContainer.style.top = '0px'; // Move nav-container to top
                } else {
                    // Scrolling up
                    finis.style.top = '0px'; // Show the finis container
                    navContainer.style.top = '40px'; // Reset nav-container position
                }
        
                lastScrollY = window.scrollY; // Update the last scroll position
            });
        
            document.addEventListener('keydown', (event) => {
                const finis = document.querySelector('.finis');
                const navContainer = document.querySelector('.nav-container');
        
                if (event.key === 'ArrowDown') {
                    finis.style.top = '-40px'; // Hide the finis container
                    navContainer.style.top = '0px'; // Move nav-container to top
                }
        
                if (event.key === 'ArrowUp') {
                    finis.style.top = '0px'; // Show the finis container
                    navContainer.style.top = '40px'; // Reset nav-container position
                }
            });
        }








        const formm = document.getElementById('newsletterForms');
        const popupBox = document.getElementById('popupBox');

        formm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent default form submission
            
            const formData = new FormData(formm);
            
            try {
                const response = await fetch('send_email.php', {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    popupBox.style.display = 'flex'; // Show the popup box
                    formm.reset(); // Reset form fields
                } else {
                    alert('Failed to submit the email.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred.');
            }
        });

        function closePopup() {
            popupBox.style.display = 'none';
        }