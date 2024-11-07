// Define the current date and month for navigation
let currentDate = new Date();
let currentMonth = currentDate.getMonth();  // current month (0-11)
let currentYear = currentDate.getFullYear(); // current year
let currentDay = currentDate.getDate(); // current day

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
    
    // Update the month name in the header
    document.getElementById('month-name').innerText = monthYear;

    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();

    // Get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Clear previous dates
    const calendar = document.querySelector('.calendar');
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
    if (currentMonth === 0 && currentDate.getMonth() === 11 && currentDate.getFullYear() === currentYear) {
        currentYear++;
    }

    generateCalendar(currentMonth, currentYear);
}

// Function to handle the date selection (and changing check-in/check-out dates)
function selectDate(dateElement, day, month, year) {
    // If the selected date is already a check-in or check-out date, allow changing it
    const isCheckInSelected = checkInDate && checkInDate.day === day && checkInDate.month === month && checkInDate.year === year;
    const isCheckOutSelected = checkOutDate && checkOutDate.day === day && checkOutDate.month === month && checkOutDate.year === year;

    if (isCheckInSelected) {
        // If the user double-clicks the selected check-in date, reset it
        checkInDate = null;
        document.getElementById('check-in').innerHTML = '<span>Check-in: Not selected</span>';
        dateElement.style.backgroundColor = '#f1f1f1';
        dateElement.style.color = 'black';
    } else if (isCheckOutSelected) {
        // If the user double-clicks the selected check-out date, reset it
        checkOutDate = null;
        document.getElementById('check-out').innerHTML = '<span>Check-out: Not selected</span>';
        dateElement.style.backgroundColor = '#f1f1f1';
        dateElement.style.color = 'black';
    } else {
        // If Check-in is not selected yet, set it
        if (!checkInDate) {
            checkInDate = { day, month, year };
            document.getElementById('check-in').innerHTML = `Check-in: ${day} ${getMonthName(month)} ${year}`;
            dateElement.style.backgroundColor = '#6d3e3e';
            dateElement.style.color = '#fff';

            // Add the selected date to the selectedDates array
            selectedDates.push({ day, month, year });

            // Set a timeout to revert the color and reset the text after 10 seconds
            setTimeout(function() {
                // Revert the color if the date is still in selectedDates
                if (selectedDates.find(d => d.day === day && d.month === month && d.year === year)) {
                    dateElement.style.backgroundColor = '#f1f1f1';
                    dateElement.style.color = 'black';
                    // Remove from selectedDates after timeout
                    selectedDates = selectedDates.filter(
                        d => !(d.day === day && d.month === month && d.year === year)
                    );

                    // Reset the check-in text back to "Not selected"
                    document.getElementById('check-in').innerHTML = '<span>Check-in: Not selected</span>';
                }
            }, 10000000); // 10 seconds
        }
        // If Check-out is not selected yet, set it
        else if (!checkOutDate && (year > checkInDate.year || (year === checkInDate.year && month > checkInDate.month) || (year === checkInDate.year && month === checkInDate.month && day > checkInDate.day))) {
            checkOutDate = { day, month, year };
            document.getElementById('check-out').innerHTML = `Check-out: ${day} ${getMonthName(month)} ${year}`;
            dateElement.style.backgroundColor = '#6d3e3e';
            dateElement.style.color = '#fff';

            // Add the selected check-out date to the selectedDates array
            selectedDates.push({ day, month, year });

            // Set a timeout to revert the color and reset the text after 10 seconds
            setTimeout(function() {
                // Revert the color if the date is still in selectedDates
                if (selectedDates.find(d => d.day === day && d.month === month && d.year === year)) {
                    dateElement.style.backgroundColor = '#f1f1f1';
                    dateElement.style.color = 'black';
                    // Remove from selectedDates after timeout
                    selectedDates = selectedDates.filter(
                        d => !(d.day === day && d.month === month && d.year === year)
                    );

                    // Reset the check-out text back to "Not selected"
                    document.getElementById('check-out').innerHTML = '<span>Check-out: Not selected</span>';
                }
            }, 10000000); // 10 seconds
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

// Initialize the calendar with the current month
generateCalendar(currentMonth, currentYear);
