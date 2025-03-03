// app/guestHelpers.js

  export function updateTime() {
    const now = new Date().toLocaleTimeString();
    const timeElement = document.getElementById("currentTime");
    if (timeElement) {
      timeElement.textContent = now;
    }
  }


// src/app/GuestHelper.js

export function initGuestHelpers() {
  // First set of event listeners (for sliding block)
  const shapedSquare = document.getElementById('shaped-square'); // if present in your markup
  const slidingBlock = document.getElementById('slidingg-block');
  const closeButton = document.getElementById('close-button');
  const overlay = document.getElementById('overlay');

  if (shapedSquare && slidingBlock && closeButton && overlay) {
    shapedSquare.addEventListener('click', function() {
      slidingBlock.style.display = 'block';
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Disable scrolling
      setTimeout(() => {
        slidingBlock.style.right = '0'; // Slide block into view
      }, 0);
    });

    closeButton.addEventListener('click', function() {
      slidingBlock.style.right = '-800px'; // Slide block out of view
      setTimeout(() => {
        slidingBlock.style.display = 'none';
        overlay.style.display = 'none'; // Hide overlay
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      }, 500); // Match the CSS transition duration
    });
  }



  function toggleDropdown(inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);
    if (input && dropdown) {
      // Toggle dropdown display on input click
      input.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling up
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      });
  
      // Hide dropdown when clicking outside
      document.addEventListener('click', (event) => {
        if (!input.contains(event.target) && !dropdown.contains(event.target)) {
          dropdown.style.display = 'none';
        }
      });
    }
  }
  
  function setupDropdownValues(inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);
    if (input && dropdown) {
      const items = dropdown.querySelectorAll('div[data-value]');
      items.forEach(item => {
        item.addEventListener('click', () => {
          input.value = item.getAttribute('data-value');
          dropdown.style.display = 'none'; // Hide dropdown after selection
        });
      });
    }
  }
  
  // Set up dropdowns for both inputs
  toggleDropdown('room-number', 'roomdropdow');
  toggleDropdown('adults', 'adultsdropdow');
  
  // Set up dropdown values for both inputs
  setupDropdownValues('room-number', 'roomdropdow');
  setupDropdownValues('adults', 'adultsdropdow');
}


// GuestHelper.js
export function initDropdownToggle(showClassName) {
  const shapeContainer = document.getElementById("shape-container");
  const dropdownContent = document.getElementById("dropdownn");

  if (shapeContainer && dropdownContent) {
    shapeContainer.addEventListener("click", function () {
      dropdownContent.classList.toggle(showClassName);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}


export function setDefaultDates() {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  const checkInInput = document.getElementById('check-in');
  const checkOutInput = document.getElementById('check-out');

  if (checkInInput) {
    checkInInput.value = formattedDate;
  }
  if (checkOutInput) {
    checkOutInput.value = formattedDate;
  }
}


// src/app/GuestHelper.js

export function initPopover() {
  const modifyBooking = document.getElementById('modify-booking');
  const popover = document.getElementById('popover');
  const closePopover = document.getElementById('close-popover');

  if (modifyBooking && popover && closePopover) {
    // Show popover on click
    modifyBooking.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent event from affecting other elements
      popover.style.display = 'block';
    });

    // Hide popover on close button click
    closePopover.addEventListener('click', (event) => {
      event.stopPropagation(); // Ensure the close click only affects the button
      popover.style.display = 'none';
    });

    // Prevent the popover from closing if clicked directly
    popover.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  }

  // Set up the continue button
  const continuePopover = document.getElementById("continue-popover");
  if (continuePopover) {
    continuePopover.addEventListener("click", function() {
      // Get the value of the confirmation number
      const confirmationNumber = document.getElementById("confirmation_number").value;
      // Redirect to cancel.html with the confirmation number as a query parameter
      window.location.href = `cancel.html?confirmation_number=${encodeURIComponent(confirmationNumber)}`;
    });
  }
}


import styles from "./Guest.module.css"; // Import the CSS module to access the hashed class names

export function initScrollDetection(navRef, finisRef) {
  function updatePositions() {
    const nav = navRef.current;
    const finis = finisRef.current;
    if (!nav || !finis) return;
    if (window.scrollY > 0) {
      nav.classList.add(styles.scrolled);
      finis.classList.add(styles.scrolled);
    } else {
      nav.classList.remove(styles.scrolled);
      finis.classList.remove(styles.scrolled);
    }
  }

  window.addEventListener('scroll', updatePositions);

  window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      const nav = navRef.current;
      const finis = finisRef.current;
      if (nav && finis) {
        nav.classList.add(styles.scrolled);
        finis.classList.add(styles.scrolled);
      }
    }
  });

  window.addEventListener('load', updatePositions);
  
}


// guesthelper.js
export function initMenuToggle(activeClass) {
  // Find the elements by their IDs
  const toggleBox = document.getElementById("toggle-box");
  const menu = document.getElementById("menu");

  // If both elements exist, add the click event listener
  if (toggleBox && menu) {
    toggleBox.addEventListener("click", function () {
      // Toggle the active class using the hashed class name passed in
      menu.classList.toggle(activeClass);

      // Adjust the position of the toggle-box based on the menu state
      toggleBox.style.left = menu.classList.contains(activeClass) ? "3px" : "220px";

      // Add or remove the active class on the toggle box based on the menu state
      toggleBox.classList.toggle(activeClass, menu.classList.contains(activeClass));
    });
  }
}



// guesthelper.js
export function initExpandContainer() {
  const lodgeContainer = document.getElementById("lodgeContainer");
  const expandButton = document.getElementById("expandButton");
  if (!lodgeContainer || !expandButton) return;
  
  // Set initial state (collapsed)
  lodgeContainer.style.height = "510px"; // Use your initial height
  expandButton.style.top = "1100px";       // Initial button position

  expandButton.addEventListener("click", () => {
    if (lodgeContainer.classList.contains("expanded")) {
      // Collapse the container
      lodgeContainer.classList.remove("expanded");
      lodgeContainer.style.height = "510px";
      expandButton.textContent = "+";
      expandButton.style.top = "1100px";
    } else {
      // Expand the container
      lodgeContainer.classList.add("expanded");
      lodgeContainer.style.height = "1500px";
      expandButton.textContent = "-";
      expandButton.style.top = "2080px";
    }
  });
}



// guesthelper.js
export function initOfferMobileScroll() {
  const scrollContaineru = document.getElementById('scroll-containeru');
  const leftArrow = document.getElementById('leftg-arrow');
  const rightArrow = document.getElementById('rightg-arrow');

  if (!scrollContaineru || !leftArrow || !rightArrow) return;

  leftArrow.addEventListener('click', () => {
    scrollContaineru.scrollBy({
      left: -200, // Scroll 200px to the left
      behavior: 'smooth'
    });
  });

  rightArrow.addEventListener('click', () => {
    scrollContaineru.scrollBy({
      left: 200, // Scroll 200px to the right
      behavior: 'smooth'
    });
  });
}




// guesthelper.js
export function initOfferScroll() {
  const scrollContainer = document.getElementById('scrollContainer');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  if (!scrollContainer || !nextBtn || !prevBtn) return;

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
}



// guestHelpers.js

export function initRoomForm() {
  const roomForm = document.getElementById('roomForm');
  if (!roomForm) return;

  // Define the event handler so you can remove it later if needed.
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const roomNumber = document.getElementById('room-number').value;
    try {
      // Post the room number to rate.php (ensure the URL is correct)
      const response = await fetch('http://localhost:8000/rate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `room_number=${encodeURIComponent(roomNumber)}`
      });

      if (response.ok) {
        const targetUrl = await response.text();
        window.open(targetUrl, '_blank'); // Open the returned URL in a new tab
      } else {
        alert('Invalid room number!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing your request.');
    }
  };

  roomForm.addEventListener('submit', handleSubmit);

  // Optional: clean up the event listener if needed
  return () => {
    roomForm.removeEventListener('submit', handleSubmit);
  };
}




// Add this function to initialize the newsletter form behavior
export function initNewsletterForm() {
  const newsletterForm = document.getElementById('newsletterForms');
  if (!newsletterForm) return; // Exit if the element isn’t found

  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    
    const formData = new FormData(this);
    
    fetch('http://localhost:8000/api/subscribe', { // Use the Laravel API endpoint
      method: 'POST',
      body: formData,
    })

      .then(response => {
        if (response.ok) {
          const centerBox = document.getElementById('centerBox');
          if (centerBox) {
            centerBox.style.display = 'block';
          }
        } else {
          alert('There was an error submitting the form.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong!');
      });
  });
}



// guestHelpers.js
export function closeBox() {
  if (typeof document !== 'undefined') {
    const centerBox = document.getElementById('centerBox');
    if (centerBox) {
      centerBox.style.display = 'none';
    }
  }
}





// Set up the newsletter form submission event listener
export function setupNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission

      const email = document.getElementById('email').value;

      // AJAX request to your controller endpoint (change '/send' to your actual route if needed)
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8000/api/send', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // On success, show the message box
          const messageBox = document.getElementById('messageBox');
          if (messageBox) {
            messageBox.style.display = 'block';
          }
        }
      };

      xhr.send(`email=${encodeURIComponent(email)}`);
    });
  }
}

// Function to hide the message box
export function hideMessageBox() {
  const messageBox = document.getElementById('messageBox');
  if (messageBox) {
    messageBox.style.display = 'none';
  }
}

