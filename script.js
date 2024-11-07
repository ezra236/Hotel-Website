// Define the current date and month for navigation
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Store the previously selected date (day, month, year)
let selectedDate = null;

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

        // Add an event listener to the date box
        dateElement.addEventListener('click', function() {
            selectDate(dateElement, day, month, year);
        });

        // Check if the date matches the selected date and apply the color
        if (selectedDate && selectedDate.day === day && selectedDate.month === month && selectedDate.year === year) {
            dateElement.style.backgroundColor = '#6d3e3e';
            dateElement.style.color = '#fff'; // Change text color to white for better contrast
        }

        calendar.appendChild(dateElement);
    }
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

    generateCalendar(currentMonth, currentYear);
}

// Store multiple selected dates
let selectedDates = [];

// Function to handle the date selection
function selectDate(dateElement, day, month, year) {
    // Check if there are already 2 selected dates
    if (selectedDates.length >= 2) {
        alert('You can only select 2 dates for check in and out.');
        return; // Prevent further selection
    }

    // Check if the date is already selected
    const alreadySelected = selectedDates.find(
        d => d.day === day && d.month === month && d.year === year
    );

    if (alreadySelected) {
        // If already selected, deselect it and revert to original color
        dateElement.style.backgroundColor = '#f1f1f1';
        dateElement.style.color = 'black';

        // Remove it from the selectedDates array
        selectedDates = selectedDates.filter(
            d => !(d.day === day && d.month === month && d.year === year)
        );
    } else {
        // Add the new date to selectedDates
        selectedDates.push({ day, month, year, element: dateElement });

        // Change the background color of the selected date
        dateElement.style.backgroundColor = '#6d3e3e';
        dateElement.style.color = '#fff';

        // Set a timeout to revert the color after 10 seconds
        setTimeout(function() {
            // Revert the color if the date is still in selectedDates
            if (selectedDates.find(d => d.day === day && d.month === month && d.year === year)) {
                dateElement.style.backgroundColor = '#f1f1f1';
                dateElement.style.color = 'black';
                // Remove from selectedDates after timeout
                selectedDates = selectedDates.filter(
                    d => !(d.day === day && d.month === month && d.year === year)
                );
            }
        }, 10000); // 10 seconds
    }
}

// Initialize the calendar with the current month
generateCalendar(currentMonth, currentYear);
