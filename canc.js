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





const form = document.getElementById('emailForm');
        const modal = document.getElementById('modal');
        const overlay = document.getElementById('overlayr');
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
                    overlay.style.display = 'block';
                } else {
                    alert('Failed to submit email. Please try again.');
                }
            }).catch(error => {
                console.error('Error:', error);
            });
        });

        closeModal.addEventListener('click', function () {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });





        document.getElementById('newsletterForms').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            // Form Data
            const formData = new FormData(this);
        
            // Submit the form using Fetch API
            fetch('send_email.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    document.getElementById('centerBox').style.display = 'block';
                } else {
                    alert('There was an error submitting the form.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong!');
            });
        });
        
        // Function to close the box
        function closeBox() {
            document.getElementById('centerBox').style.display = 'none';
        }





// Function to move the nav-container down by 40px
function moveNavDown() {
    const navContainer = document.querySelector('.nav-container');
    navContainer.style.top = '0px';  
}

// Function to move the nav-container back to top 0
function moveNavUp() {
    const navContainer = document.querySelector('.nav-container');
    navContainer.style.top = '0';  
}

// Check if the screen width is mobile size
function isMobile() {
    return window.innerWidth <= 768;  // Adjust the threshold for mobile screen size
}

// Apply the navigation behavior only on mobile
if (isMobile()) {
    document.addEventListener('keydown', function (event) {
        if (event.key === "ArrowDown") {
            moveNavDown();
        } else if (event.key === "ArrowUp") {  // Detect the up arrow key (key code 38)
            moveNavUp();
        }
    });

    let lastScrollY = window.scrollY;

    // Listen for scroll event to move the nav-container down when scrolling
    window.addEventListener('scroll', function () {
        const navContainer = document.querySelector('.nav-container');
        if (window.scrollY > lastScrollY) {  // When scrolling down
            moveNavDown();
        } else if (window.scrollY < lastScrollY) {  // When scrolling up
            moveNavUp();
        }
        
        lastScrollY = window.scrollY;
    });
}
