// Extract the room ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get('room'); // Get the room ID from the URL

// Content for each room
const roomDetails = {
    roo1: {
        name: "Paris",
        description: "This kind of room would be perfect for those looking to escape into a setting that feels both chic and relaxing—a little slice of Paris right where you are, capturing the timeless ambiance of the world’s most romantic city. Perfect for unwinding, enjoying a book, or indulging in room service that makes you feel like you're right along the Seine!",
        image: "im1.avif"
    },
    roo2: {
        name: "Tokyo",
        description: "Embrace the perfect blend of tradition and modernity in Tokyo, where elegant rooms provide a tranquil retreat after exploring the vibrant city life.",
        image: "im2.jpg"
    },
    roo3: {
        name: "New York",
        description: "Stay in the heart of the action in New York, where stylish accommodations offer breathtaking skyline views and easy access to iconic attractions.",
        image: "im3.avif"
    },
    roo4: {
        name: "Dubai",
        description: "Indulge in unparalleled luxury in Dubai, featuring opulent hotels with lavish amenities, breathtaking architecture, and exceptional hospitality.",
        image: "im4.jpg"
    },
    roo5: {
        name: "London",
        description: "Enjoy a sophisticated stay in London, where classic charm meets modern comfort in beautifully appointed rooms near historic landmarks.",
        image: "im5.jpg"
    },
    roo6: {
        name: "Sydney",
        description: "Experience the stunning coastal views of Sydney, with rooms that offer a relaxing atmosphere and easy access to beautiful beaches and vibrant culture.",
        image: "im6.jpg"
    },
    roo7: {
        name: "Rome",
        description: "Immerse yourself in the rich history of Rome, where elegant accommodations provide a charming atmosphere just steps away from ancient ruins and delicious cuisine.",
        image: "im7.jpg"
    },
    roo8: {
        name: "Cairo",
        description: "Discover the wonders of Cairo with rooms that blend luxury and tradition, offering stunning views of the Pyramids and easy access to the city’s rich history.",
        image: "im8.jpg"
    },
    roo9: {
        name: "Berlin",
        description: "Enjoy a stylish and contemporary stay in Berlin, where chic rooms reflect the city's vibrant culture and provide a perfect base for exploration.",
        image: "im9.jpg"
    },
    roo10: {
        name: "Bangkok",
        description: "Indulge in the bustling energy of Bangkok, where luxurious hotels offer serene retreats complete with exquisite dining options and cultural experiences.",
        image: "im10.jpg"
    }
};

// Check if the roomId exists in the roomDetails object
if (roomDetails[roomId]) {
    const room = roomDetails[roomId];
    const chosenDiv = document.querySelector('.chosen');
    
    // Set the content dynamically
    chosenDiv.innerHTML = `
        <h2>Chosen Room: ${room.name}</h2>
        <img src="${room.image}" alt="${room.name}" style="width: 100%; max-width: 600px;">
        <p>${room.description}</p>
    `;
} else {
    // If no roomId is found, display a default message
    document.querySelector('.chosen').innerHTML = "<p>Room not found.</p>";
}





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
        document.getElementById('check-in-display').innerHTML = `Check-in: ${checkin}`;
        document.getElementById('check-out-display').innerHTML = `Check-out: ${checkout}`;
    }
}


// Call the function to update the dates when the page loads
window.onload = updateDates;



function calculateDaysBetweenDates() {
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

        // Display the result in the 'amount' div
        const amountElement = document.querySelector('.amount');
        amountElement.innerHTML = `Total days: ${daysDifference}`;
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
calculateDaysBetweenDates();
