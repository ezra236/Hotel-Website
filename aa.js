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

// Dropdown functionality for "More" and arrow
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById("dropdownn");
    const moreLink = document.getElementById("moreLink");
    const rightSidebar = document.querySelector(".right-sidebar");

    // Function to toggle the dropdown
    function toggleDropdown() {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }

    // Add event listeners to both the arrow and the More link
    moreLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        toggleDropdown();
    });

    rightSidebar.addEventListener("click", function() {
        toggleDropdown(); // Toggle dropdown when the sidebar is clicked
    });
});

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
