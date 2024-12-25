document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function (event) {
        const arrow = item.querySelector('.arrow'); // Find the arrow inside the clicked nav-item
        const blockId = item.getAttribute('href').substring(1) + '-block'; // Get the block id
        const block = document.getElementById(blockId);

        // Toggle the current block visibility
        if (block.classList.contains('show')) {
            block.classList.remove('show'); // Collapse the block
            arrow.textContent = '▼'; // Change to down arrow
            item.classList.remove('active'); // Remove active class
        } else {
            // Collapse all other blocks
            document.querySelectorAll('.nav-block').forEach(otherBlock => {
                otherBlock.classList.remove('show');
            });

            // Reset all other arrows
            document.querySelectorAll('.arrow').forEach(otherArrow => {
                otherArrow.textContent = '▼';
            });

            // Expand the current block
            block.classList.add('show');
            arrow.textContent = '▲'; // Change to up arrow

            // Add active class to the clicked nav-item and remove from others
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        }

        // Prevent the default anchor link behavior
        event.preventDefault();
    });
});

// Close the block when clicking outside the block
document.addEventListener('click', function (event) {
    const blocks = document.querySelectorAll('.nav-block');
    const navLinks = document.querySelectorAll('.nav-item');

    // If the click is outside both the blocks and nav items
    if (![...blocks].some(block => block.contains(event.target)) && 
        ![...navLinks].some(link => link.contains(event.target))) {
        blocks.forEach(block => block.classList.remove('show')); // Collapse all blocks
        document.querySelectorAll('.arrow').forEach(arrow => {
            arrow.textContent = '▼'; // Reset all arrows to down
        });

        // Remove active class from all nav items
        navLinks.forEach(link => link.classList.remove('active'));
    }
});









const statements = [
    "Innovative solutions driving progress.",
    "Reliable partner in technology advancement.",
    "Excellence in customized tech solutions.",
    "Empowering growth through digital innovation."
];

let currentIndex = 0;
const rotatingTextElement = document.getElementById('rotating-text');

function rotateText() {
    rotatingTextElement.textContent = statements[currentIndex];
    currentIndex = (currentIndex + 1) % statements.length;
}

// Set the initial text and start rotation
rotateText();
setInterval(rotateText, 2000); // Change text every 2 seconds






let currentIndexx = 1;
const descriptions = document.querySelectorAll('.description-content');
const videos = document.querySelectorAll('.vid3 video');
const totalDescriptions = descriptions.length;

function navigate(direction) {
    // Pause and hide the current video
    const currentVideo = videos[currentIndexx - 1];
    currentVideo.pause(); // Stop the video from playing
    currentVideo.currentTime = 0; // Reset the video to the beginning
    currentVideo.classList.add('hidden');

    // Hide the current description
    descriptions[currentIndexx - 1].classList.remove('active');

    // Update the current index
    if (direction === 'next') {
        currentIndexx = (currentIndexx % totalDescriptions) + 1;
    } else if (direction === 'prev') {
        currentIndexx = (currentIndexx - 2 + totalDescriptions) % totalDescriptions + 1;
    }

    // Show new description and video
    descriptions[currentIndexx - 1].classList.add('active');
    const newVideo = videos[currentIndexx - 1];
    newVideo.classList.remove('hidden');

    // Update navigation display
    document.querySelector('.navigation span').textContent = `${currentIndexx}/3`;
}

// Initialize first description and video as active
descriptions[0].classList.add('active');
videos[0].classList.remove('hidden');





const blogGrid = document.querySelector('.blog-grid');
const paginationDots = document.querySelectorAll('.pagination span');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');
let currentIndexc = 0;
const cardsToShow = 4; // Number of cards to show per scroll

const updateGrid = () => {
    blogGrid.style.transform = `translateX(-${currentIndexc * 25}%)`; // 25% per page scroll (4 cards)
    paginationDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndexc);
    });
};

prevArrow.addEventListener('click', () => {
    if (currentIndexc > 0) currentIndexc--; // Move to previous 4 cards
    updateGrid();
});

nextArrow.addEventListener('click', () => {
    if (currentIndexc < paginationDots.length - 1) currentIndexc++; // Move to next 4 cards
    updateGrid();
});





document.addEventListener("DOMContentLoaded", () => {
    const logoSection = document.querySelector(".footer-logo");
    logoSection.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});






document.querySelectorAll('.direc .link').forEach(link => {
    link.addEventListener('click', function() {
        const targetClass = this.getAttribute('data-target');  // Get the target class from data attribute

        // Find the corresponding content element
        const targetContent = document.querySelector(`.${targetClass}`);
        const targetDetail = document.querySelector(`.${targetClass}-detail`); // Corresponding detail section

        // **NEW**: Before proceeding, close any previously active content and detail sections
        document.querySelectorAll('.showd .content').forEach(content => {
            if (content !== targetContent) {
                content.classList.remove('active');  // Close other active content sections
            }
        });
        
        document.querySelectorAll('.showd .detail').forEach(detail => {
            if (detail !== targetDetail) {
                detail.classList.remove('active');  // Close other active detail sections
            }
        });

        // Check if the target content is already active
        if (targetContent.classList.contains('active')) {
            // If active, remove the active class to hide it
            targetContent.classList.remove('active');
            if (targetDetail) {
                targetDetail.classList.remove('active'); // Close corresponding detail section when closing content
            }
        } else {
            // If not active, show the corresponding content with transition
            targetContent.classList.add('active');
        }
    });
});

// Add event listeners for 'styled-p' elements (to open detail sections)
document.querySelectorAll('.content .styled-p').forEach(styledP => {
    styledP.addEventListener('click', function () {
        const targetClass = this.getAttribute('data-target'); // Get the target class from data attribute
        const targetDetail = document.querySelector(`.${targetClass}`); // Find the corresponding detail section

        // Toggle the active class on the target detail section
        if (targetDetail.classList.contains('active')) {
            targetDetail.classList.remove('active'); // If already active, remove the class to hide it
        } else {
            // Hide all detail sections
            document.querySelectorAll('.showd .detail').forEach(detail => {
                detail.classList.remove('active');
            });

            targetDetail.classList.add('active'); // Add the active class to show the clicked section
        }
    });
});




document.querySelectorAll('.direc p').forEach(p => {
    p.addEventListener('click', function() {
        // Check if the clicked paragraph already has the special background color
        if (p.style.backgroundColor === 'rgba(6, 36, 120, 0.9)') {
            // If it does, remove it
            p.style.backgroundColor = '';
        } else {
            // First, remove the background color from any paragraph that has it
            document.querySelectorAll('.direc p').forEach(otherP => {
                if (otherP !== p && otherP.style.backgroundColor === 'rgba(6, 36, 120, 0.9)') {
                    otherP.style.backgroundColor = ''; // Remove background from other paragraphs
                }
            });

            // Then, apply the new background color to the clicked paragraph
            p.style.backgroundColor = 'rgba(6, 36, 120, 0.9)';
        }
    });
});


document.querySelectorAll('.styled-p').forEach(p => {
    p.addEventListener('click', function() {
        // Check if the clicked paragraph already has the special background color
        if (p.style.backgroundColor === 'rgba(6, 36, 120, 0.9)') {
            // If it does, remove it
            p.style.backgroundColor = '';
        } else {
            // First, remove the background color from any paragraph that has it
            document.querySelectorAll('.styled-p').forEach(otherP => {
                if (otherP !== p && otherP.style.backgroundColor === 'rgba(6, 36, 120, 0.9)') {
                    otherP.style.backgroundColor = ''; // Remove background from other paragraphs
                }
            });

            // Then, apply the new background color to the clicked paragraph
            p.style.backgroundColor = 'rgba(6, 36, 120, 0.9)';
        }
    });
});



document.querySelectorAll('.directry p').forEach(p => {
    p.addEventListener('click', function() {
        // Check if any p has the background color of rgba(6, 36, 120, 0.9)
        const currentActive = document.querySelector('.directry p.active');
        
        // If there's an active one and it's not the clicked one, reset its background
        if (currentActive && currentActive !== p) {
            currentActive.style.backgroundColor = ''; // Reset background
            currentActive.classList.remove('active'); // Remove active class
        }

        // Toggle the background color for the clicked p
        if (p.style.backgroundColor === 'rgba(6, 36, 120, 0.9)') {
            p.style.backgroundColor = ''; // Remove the background color
            p.classList.remove('active'); // Remove active class
        } else {
            p.style.backgroundColor = 'rgba(6, 36, 120, 0.9)'; // Set new background color
            p.classList.add('active'); // Add active class
        }
    });
});


document.querySelectorAll('.styled-pp').forEach(item => {
    item.addEventListener('click', function () {
        // Check if any p element already has the active background color
        const activeP = document.querySelector('.styled-pp.active');
        
        if (activeP && activeP !== item) {
            // Remove the active background color from the previously clicked p
            activeP.classList.remove('active');
        }

        // Toggle the background color on the clicked p
        item.classList.toggle('active');
    });
});






    



document.querySelectorAll('.directry .linkt, .directry .linktry').forEach(link => {
    link.addEventListener('click', function() {
        const targetClass = this.getAttribute('data-target'); // Get the target class from data attribute

        // Find the corresponding content element
        const targetContent = document.querySelector(`.showdtry .${targetClass}`);

        // Close any currently active content
        document.querySelectorAll('.showdtry .content').forEach(content => {
            if (content !== targetContent) {
                content.classList.remove('active'); // Remove active class from other content
            }
        });

        // Toggle the active state of the clicked content
        if (targetContent.classList.contains('active')) {
            // If already active, deactivate it
            targetContent.classList.remove('active');
        } else {
            // Otherwise, activate the clicked content
            targetContent.classList.add('active');
        }
    });
});






document.querySelectorAll('.directry .linktrya').forEach(link => {
    link.addEventListener('click', function() {
        const targetClass = this.getAttribute('data-target'); // Get the target class from the data attribute

        // Find the corresponding content element
        const targetContent = document.querySelector(`.showdtrya .${targetClass}`);

        // Close any currently active content
        document.querySelectorAll('.showdtrya .content').forEach(content => {
            if (content !== targetContent) {
                content.classList.remove('active'); // Remove active class from other content
            }
        });

        // Toggle the active state of the clicked content
        if (targetContent.classList.contains('active')) {
            // If already active, deactivate it
            targetContent.classList.remove('active');
        } else {
            // Otherwise, activate the clicked content
            targetContent.classList.add('active');
        }
    });
});




