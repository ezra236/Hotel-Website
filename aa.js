// Slideshow and Typing Effect
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset index to 1 if it exceeds the number of slides
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    
    // Check if the current slide has the #maua element and start typing effect
    const mauaElement = slides[slideIndex - 1].querySelector("#maua");
    if (mauaElement) {
        startTypingEffect(mauaElement);
    }
    
    setTimeout(showSlides, 7000); // Change slide every 7 seconds
}

// Typing effect for "Maua"
function typeWriter(mauaElement, text) {
    let currentLetterIndex = 0; // Reset index for each typing effect
    function type() {
        if (currentLetterIndex < text.length) {
            mauaElement.innerHTML += text.charAt(currentLetterIndex);
            currentLetterIndex++;
            setTimeout(type, 250); // Delay between letters
        }
    }
    type();
}

// Start typing effect when a new slide is shown
function startTypingEffect(mauaElement) {
    const text = mauaElement.textContent; // Get the text from the element
    mauaElement.innerHTML = ""; // Clear the text
    mauaElement.style.visibility = 'visible'; // Make the element visible
    typeWriter(mauaElement, text); // Start typing
}

// Initialize the slideshow when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});


document.addEventListener("DOMContentLoaded", function() {
    const shapeContainer = document.getElementById("shape-container");
    const dropdownContent = document.getElementById("dropdownn");

    shapeContainer.addEventListener("click", function() {
        dropdownContent.classList.toggle("show"); // Toggle show class
    });
});

// Hide dropdown when clicking outside of it
document.addEventListener("click", function(event) {
    const shapeContainer = document.getElementById("shape-container");
    const dropdownContent = document.getElementById("dropdownn");

    if (!shapeContainer.contains(event.target)) {
        dropdownContent.classList.remove("show"); // Remove show class if clicked outside
    }
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This will add a smooth scroll effect
    });
}

// Toggle box functionality
document.addEventListener("DOMContentLoaded", function() {
    const toggleBox = document.getElementById("toggle-box");
    const menu = document.getElementById("menu");

    toggleBox.addEventListener("click", function() {
        // Toggle the active class on the menu to slide it in or out
        menu.classList.toggle("active");

        // Move the toggle-box based on the menu state
        toggleBox.style.left = menu.classList.contains("active") ? "200px" : "0px"; // Adjust position based on your layout
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const container = content.parentElement;

    // Set initial maxHeight to 265px
    container.style.maxHeight = "265px"; 

    document.getElementById("toggleText").addEventListener("click", function () {
        // Toggle between showing and hiding the full paragraph
        if (container.style.maxHeight === "265px" || container.style.maxHeight === "") {
            container.style.maxHeight = "1000px"; // Set to a high value to expand
            this.textContent = "Less"; // Change text to "Less"
            this.style.top = "785px"; // Move toggle text down when expanded (adjust as needed)
        } else {
            container.style.maxHeight = "265px"; // Collapse to initial height
            this.textContent = "More"; // Change text to "More"
            this.style.top = "230px"; // Reset toggle text position when collapsed (adjust as needed)
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.querySelector('.content-container');
    let hasAnimated = false; // Flag to track if animation has occurred

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                contentContainer.classList.add('visible');
                hasAnimated = true; // Prevent further animations until reset
            } else if (!entry.isIntersecting && hasAnimated) {
                // Reset the animation when the element goes out of view
                contentContainer.classList.remove('visible');
                hasAnimated = false; // Allow the animation to trigger again when it comes back into view
            }
        });
    });

    observer.observe(contentContainer);
});


document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    let hasAnimated = false; // Track if the animation has occurred

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                container.classList.add('visible');
                hasAnimated = true; // Prevent continuous animation
            } else if (!entry.isIntersecting && hasAnimated) {
                // Reset the animation when out of view
                container.classList.remove('visible');
                hasAnimated = false; // Allow animation to trigger again
            }
        });
    });

    observer.observe(container);
});


const scrollContainer = document.getElementById('scrollContainer');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Adjust scroll distance to the width of three items
const scrollDistance = 870;

nextBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        top: 0,
        left: scrollDistance, 
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: 'smooth'
    });
});


const scrollyContainer = document.getElementById("scrollyContainer");
const items = document.querySelectorAll(".scrolly-item");

let currentIndex = 0;

document.getElementById("nextBtny").addEventListener("click", () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        scrollToItem();
    }
});

document.getElementById("prevBtny").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToItem();
    }
});

function scrollToItem() {
    const itemWidth = items[0].offsetWidth; // Get width of each item
    scrollyContainer.scrollLeft = currentIndex * itemWidth; // Scroll to full width of next item
}



function showClients() {
    const clients = document.querySelector('.clients');
    clients.classList.add('visible'); // Add the class to trigger the transition
}

// Example of calling the function after a delay (for demonstration)
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(showClients, 1000); // Show after 1 second
});


document.addEventListener("DOMContentLoaded", function () {
    const clients = document.querySelector('.clients');
    let clientsAnimated = false; // Track if the animation has occurred

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !clientsAnimated) {
                clients.classList.add('visible');
                clientsAnimated = true; // Prevent continuous animation
            } else if (!entry.isIntersecting && clientsAnimated) {
                clients.classList.remove('visible');
                clientsAnimated = false; // Allow animation to trigger again if needed
            }
        });
    });

    observer.observe(clients);
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


document.getElementById('check-rates').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = 'rates.html'; // Redirect to rates.html
});

