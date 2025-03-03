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













// Get all the "BOOK" buttons and the verify-dates element
const bookButtons = document.querySelectorAll('.buttonn');
const verifyDates = document.querySelector('.verify-dates');
const closeButton = document.querySelector('.verify-dates .close');

// Add event listener to each "BOOK" button
bookButtons.forEach(button => {
    button.addEventListener('click', function() {
        verifyDates.classList.add('show'); // Show the verify-dates block with transition
    });
});


// Add event listener to the close button (X)
closeButton.addEventListener('click', function() {
    // Hide the verify-dates block when X is clicked
    verifyDates.classList.remove('show');
    
    // Reset the selected dates array
    selectedDates = [];
    
    // Reset check-in and check-out dates
    checkInDate = null;
    checkOutDate = null;

    // Reset the check-in and check-out display elements
    const checkInElement = document.querySelector('.verify-dates #check-in');
    const checkOutElement = document.querySelector('.verify-dates #check-out');
    checkInElement.innerHTML = '<span>Check-in: Not selected</span>';
    checkOutElement.innerHTML = '<span>Check-out: Not selected</span>';

    // Reset the calendar's date selections
    const calendar = document.querySelector('.verify-dates .calendar');
    const calendarDates = calendar.querySelectorAll('.calendar-date');

    // Remove the selected styling from all dates
    calendarDates.forEach(dateElement => {
        dateElement.style.backgroundColor = '#f1f1f1';
        dateElement.style.color = 'black';
    });
});










// Define the current date and month for navigation
let currentDate = new Date();
let currentMonth = currentDate.getMonth();  
let currentYear = currentDate.getFullYear(); 
let currentDay = currentDate.getDate(); 

// Store the previously selected date (day, month, year)
let selectedDates = [];

// Track the check-in and check-out dates
let checkInDate = null;
let checkOutDate = null;



function generateCalendar(month, year) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const calendarBlock = document.querySelector('.verify-dates');
    const monthHeader = calendarBlock.querySelector('#month-name');
    const calendar = calendarBlock.querySelector('.calendar');
    monthHeader.innerText = `${monthNames[month]} ${year}`;
    calendar.innerHTML = '';

    // Add day names
    dayNames.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.innerText = day;
        calendar.appendChild(dayElement);
    });

    // Fill in empty cells before first day
    const firstDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('empty');
        calendar.appendChild(emptyCell);
    }

    // Generate days
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement('div');
        dateElement.classList.add('calendar-date');
        dateElement.innerText = day;

        if (isPastDate(day, month, year)) {
            dateElement.classList.add('disabled');
            // Disable any event for past dates
            
        } else{
            if (checkInDate && checkInDate.day === day && checkInDate.month === month && checkInDate.year === year) {
                // Apply the check-in style
                dateElement.style.backgroundColor = '#6d3e3e';
                dateElement.style.color = '#fff';
            } else if (checkOutDate && checkOutDate.day === day && checkOutDate.month === month && checkOutDate.year === year) {
                // Apply the check-out style
                dateElement.style.backgroundColor = '#6d3e3e';
                dateElement.style.color = '#fff';
            } else if (checkInDate && checkOutDate) {
                // Apply the range color
                const startDate = new Date(checkInDate.year, checkInDate.month, checkInDate.day);
                const endDate = new Date(checkOutDate.year, checkOutDate.month, checkOutDate.day);
                const currentDate = new Date(year, month, day);
            
                // Check if the current date is within the range of check-in and check-out
                if (currentDate >= startDate && currentDate <= endDate) {
                    dateElement.style.backgroundColor = '#a66e6e';  // Color for dates between check-in and check-out
                    dateElement.style.color = '#fff';
                }
            }            

        }

        dateElement.addEventListener('click', function() {
            selectDate(dateElement, day, month, year);
        });

        calendar.appendChild(dateElement);
    }
}    
    
    

// Function to check if the date is in the past
function isPastDate(day, month, year) {
    const today = new Date();
    const selectedDate = new Date(year, month, day);
    return selectedDate < today;
}

// Function to change the month when the user clicks on next/prev buttons
function changeMonth(offset) {
    currentMonth += offset;
    
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    // Update the year if it's beyond December
    generateCalendar(currentMonth, currentYear);
}



// Helper function to calculate the number of days between two dates
function getDaysBetweenDates(startDate, endDate) {
    const days = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        days.push(new Date(currentDate));  // Add the current date to the array
        currentDate.setDate(currentDate.getDate() + 1);  // Move to the next day
    }

    return days;
}

// Update the selectDate function to apply styles to dates between check-in and check-out
function selectDate(dateElement, day, month, year) {
    const isCheckInSelected = checkInDate && checkInDate.day === day && checkInDate.month === month && checkInDate.year === year;
    const isCheckOutSelected = checkOutDate && checkOutDate.day === day && checkOutDate.month === month && checkOutDate.year === year;

    const checkInElement = document.querySelector('.verify-dates #check-in');
    const checkOutElement = document.querySelector('.verify-dates #check-out');

    if (checkOutDate) {
        // Define the reset function to be used later
        const resetSelections = function() {
            // Reset the calendar's date selections
            const calendar = document.querySelector('.verify-dates .calendar');
            const calendarDates = calendar.querySelectorAll('.calendar-date');
            calendarDates.forEach(calendarDate => {
                calendarDate.style.backgroundColor = '#f1f1f1'; // Reset background color
                calendarDate.style.color = 'black'; // Reset text color
            });

            // This will prevent any Check-in date selection after Check-out
            checkInElement.innerHTML = '<span>Check-in: Not selected</span>';
            checkOutElement.innerHTML = '<span>Check-out: Not selected</span>';
            checkInDate = null;
            checkOutDate = null;

            // Remove the event listener after the reset action
            document.removeEventListener('click', resetSelections);
        };

        // Add the event listener to listen for any click on the document
        document.addEventListener('click', resetSelections);
    }

    if (isCheckInSelected) {
        checkInDate = null;
        checkInElement.innerHTML = '<span>Check-in: Not selected</span>';
        dateElement.style.backgroundColor = '#f1f1f1';
        dateElement.style.color = 'black';
    } else if (isCheckOutSelected) {
        checkOutDate = null;
        checkOutElement.innerHTML = '<span>Check-out: Not selected</span>';
        dateElement.style.backgroundColor = '#f1f1f1';
        dateElement.style.color = 'black';
    } else {
        if (!checkInDate) {
            // Set the check-in date
            checkInDate = { day, month, year };
            checkInElement.innerHTML = `Check-in: ${day} ${getMonthName(month)} ${year}`;
            dateElement.style.backgroundColor = '#6d3e3e';
            dateElement.style.color = '#fff';

            // Add the selected check-in date with type
            selectedDates.push({ day, month, year, type: 'check-in' });
        } else if (!checkOutDate && (year > checkInDate.year || (year === checkInDate.year && month > checkInDate.month) || (year === checkInDate.year && month === checkInDate.month && day > checkInDate.day))) {
            // Set the check-out date
            checkOutDate = { day, month, year };
            checkOutElement.innerHTML = `Check-out: ${day} ${getMonthName(month)} ${year}`;
            dateElement.style.backgroundColor = '#6d3e3e';
            dateElement.style.color = '#fff';

            // Add the selected check-out date with type
            selectedDates.push({ day, month, year, type: 'check-out' });

            // Highlight the range between check-in and check-out
            const startDate = new Date(checkInDate.year, checkInDate.month, checkInDate.day);
            const endDate = new Date(checkOutDate.year, checkOutDate.month, checkOutDate.day);

            const daysInRange = getDaysBetweenDates(startDate, endDate);

            // Loop through all calendar dates and apply styles to the dates in the range
            const calendar = document.querySelector('.verify-dates .calendar');
            const calendarDates = calendar.querySelectorAll('.calendar-date');
            calendarDates.forEach(calendarDate => {
                const dayInCalendar = parseInt(calendarDate.innerText, 10);
                const monthInCalendar = currentMonth;
                const yearInCalendar = currentYear;

                // Check if the current day in the calendar is within the range
                const isInRange = daysInRange.some(date => {
                    return date.getDate() === dayInCalendar &&
                           date.getMonth() === monthInCalendar &&
                           date.getFullYear() === yearInCalendar;
                });

                if (isInRange) {
                    calendarDate.style.backgroundColor = '#a66e6e';  // Color for dates between check-in and check-out
                    calendarDate.style.color = '#fff';
                }
            });
        }
    }
}

    


// Helper function to get month name from index
function getMonthName(month) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month];
}

// Initialize the calendar with the current month inside .verify-dates
generateCalendar(currentMonth, currentYear);


// Function to retrieve the last check-in date
function getLastCheckInDate() {
    // Iterate backwards to find the last check-in date entry
    for (let i = selectedDates.length - 1; i >= 0; i--) {
        if (selectedDates[i].type === 'check-in') {
            return selectedDates[i];
        }
    }
    return null; // Return null if no check-in date is found
}

// Getter function to get the last check-in and check-out dates from selectedDates
function getLastCheckInCheckOutDates() {
    if (selectedDates.length === 0) return null;  // Return null if no dates are selected

    const lastCheckInDate = getLastCheckInDate();  // First element as the last check-in
    const lastCheckOutDate = selectedDates[selectedDates.length - 1];  // Last element as the last check-out
    
    return { lastCheckInDate, lastCheckOutDate };
}

// Store the room id globally
let selectedRoomId = '';

// Function to be called when the room is selected
function proceedToPay(roomId) {
    selectedRoomId = roomId; // Store the clicked room's ID
    document.getElementById('right-button').addEventListener('click', function () {
        // Get the last check-in and check-out dates using the getLastCheckInCheckOutDates function
        const { lastCheckInDate, lastCheckOutDate } = getLastCheckInCheckOutDates();

        // Ensure that both dates are selected
        if (lastCheckInDate && lastCheckOutDate) {
            // Open a new tab with the URL including the room ID and check-in/check-out dates
            window.open(`server.php?room=${selectedRoomId}&checkin=${lastCheckInDate.day}-${lastCheckInDate.month + 1}-${lastCheckInDate.year}&checkout=${lastCheckOutDate.day}-${lastCheckOutDate.month + 1}-${lastCheckOutDate.year}`, '_blank');
        } else {
            alert('Please select both check-in and check-out dates before proceeding.');
        }
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




