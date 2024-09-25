// Slideshow and Typing Effect
let slideIndex = 0;
let mauaText = "Maua"; // The text you want to display letter by letter
let currentLetterIndex = 0; // Index for typing each letter

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
function typeWriter(mauaElement) {
    if (currentLetterIndex < mauaText.length) {
        mauaElement.innerHTML += mauaText.charAt(currentLetterIndex);
        currentLetterIndex++;
        setTimeout(function() { typeWriter(mauaElement); }, 250); // Delay between letters
    }
}

// Start typing effect when a new slide is shown
function startTypingEffect(mauaElement) {
    mauaElement.innerHTML = ""; // Clear the text
    currentLetterIndex = 0; // Reset index
    mauaElement.style.visibility = 'visible'; // Make the element visible
    typeWriter(mauaElement); // Start typing
}

// Initialize the slideshow when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});

// Dropdown functionality for "More" and arrow
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById("dropdownn");
    const arrow = document.getElementById("arrow");
    const moreLink = document.getElementById("moreLink");

    // Function to toggle the dropdown
    function toggleDropdown() {
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }

    // Add event listeners to both the arrow and the More link
    arrow.addEventListener("click", toggleDropdown);
    moreLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        toggleDropdown();
    });
});
