document.addEventListener("DOMContentLoaded", function() {
    const shapeContainer = document.getElementById("shape-container");
    const dropdownContent = document.getElementById("dropdownn");

    shapeContainer.addEventListener("click", function() {
        dropdownContent.classList.toggle("show"); // Toggle show class

        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
    });
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


document.getElementById('check-rates').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = 'rates.html'; // Redirect to rates.html
});


document.getElementById("continue-popover").addEventListener("click", function() {
    // Get the value of the confirmation number
    const confirmationNumber = document.getElementById("confirmation_number").value;

    // Redirect to cancel.html with the confirmation number as a query parameter
    window.location.href = `cancel.html?confirmation_number=${encodeURIComponent(confirmationNumber)}`;
});




const scrollArrow = document.querySelector('.scroll-arrow');

scrollArrow.addEventListener('click', () => {
    const firstRoom = document.querySelector('.roomm'); // Get the first element with class 'roo1'
    if (firstRoom) {
        firstRoom.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start' // Align to the start of the viewport
        });
    }
});



document.querySelectorAll('.roomn a').forEach(p => {
    p.addEventListener('click', function() {
      // Remove the 'selected' class from all p elements
      document.querySelectorAll('.roomn a').forEach(p => {
        p.classList.remove('selected');
      });
      
      // Add the 'selected' class to the clicked p
      this.classList.add('selected');
    });
  });





  document.querySelectorAll('.roomn a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-id'); // Get data-id
        const targetElement = document.getElementById(targetId);
        const container = document.querySelector('.roomd');

        if (targetElement) {
            container.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
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

// Function to generate the calendar for a given month and year
function generateCalendar(month, year) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthName = monthNames[month];
    const monthYear = `${monthName} ${year}`;
    
    // Get the verify-dates block and update the month name in the header
    const calendarBlock = document.querySelector('.verify-dates');
    const monthHeader = calendarBlock.querySelector('#month-name');
    monthHeader.innerText = monthYear;

    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();

    // Get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Clear previous dates
    const calendar = calendarBlock.querySelector('.calendar');
    calendar.innerHTML = '';

    // Add day names to the calendar
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    dayNames.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.innerText = day;
        calendar.appendChild(dayElement);
    });

    // Add empty cells for the days before the 1st of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('empty');
        calendar.appendChild(emptyCell);
    }

    // Add the actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement('div');
        dateElement.classList.add('calendar-date');
        dateElement.innerText = day;

        // Disable past dates
        if (isPastDate(day, month, year)) {
            dateElement.classList.add('disabled');
        } else {
            // Check if the day is in the selectedDates array
            const isSelected = selectedDates.some(d => d.day === day && d.month === month && d.year === year);
            if (isSelected) {
                dateElement.style.backgroundColor = '#6d3e3e';
                dateElement.style.color = '#fff';
            }

            // Add an event listener to the date box
            dateElement.addEventListener('click', function() {
                selectDate(dateElement, day, month, year);
            });
        }

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

// Function to handle the date selection (and changing check-in/check-out dates)
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
            window.open(`pay.html?room=${selectedRoomId}&checkin=${lastCheckInDate.day}-${lastCheckInDate.month + 1}-${lastCheckInDate.year}&checkout=${lastCheckOutDate.day}-${lastCheckOutDate.month + 1}-${lastCheckOutDate.year}`, '_blank');
        } else {
            alert('Please select both check-in and check-out dates before proceeding.');
        }
    });
}





