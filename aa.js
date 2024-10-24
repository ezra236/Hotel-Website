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

// Dropdown functionality
document.addEventListener("DOMContentLoaded", function() {
    const shapeContainer = document.getElementById("shape-container");
    const dropdownContent = document.getElementById("dropdownn");

    shapeContainer.addEventListener("click", function() {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This will add a smooth scroll effect
    });
}

// Hide dropdown when clicking outside of it
document.addEventListener("click", function(event) {
    const shapeContainer = document.getElementById("shape-container");
    const dropdownContent = document.getElementById("dropdownn");

    if (!shapeContainer.contains(event.target)) {
        dropdownContent.style.display = "none"; // Hide dropdown if clicked outside
    }
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


document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const container = content.parentElement;

    // Set initial maxHeight to 236px
    container.style.maxHeight = "265px"; 

    document.getElementById("toggleText").addEventListener("click", function () {
        // Toggle between showing and hiding the full paragraph
        if (container.style.maxHeight === "265px" || container.style.maxHeight === "") {
            container.style.maxHeight = "none"; // Expand to show full content
            this.textContent = "Less"; // Change text to "Less"
            this.style.top = "337px"; // Move toggle text down when expanded (adjust as needed)
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



