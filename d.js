let lastScrollY = window.scrollY;

document.addEventListener('scroll', () => {
    const finis = document.querySelector('.finis');
    const navContainer = document.querySelector('.nav-container');

    if (window.scrollY > lastScrollY) {
        // Scrolling down
        finis.style.top = '-40px'; // Hide the finis container
        navContainer.style.top = '40px'; // Move nav-container to top
    } else {
        // Scrolling up
        finis.style.top = '0px'; // Show the finis container
        navContainer.style.top = '40px'; // Reset nav-container position
    }

    lastScrollY = window.scrollY; // Update the last scroll position
});

document.addEventListener('keydown', (event) => {
    const finis = document.querySelector('.finis');
    const navContainer = document.querySelector('.nav-container');

    if (event.key === 'ArrowDown') {
        finis.style.top = '-40px'; // Hide the finis container
        navContainer.style.top = '40px'; // Move nav-container to top
    }

    if (event.key === 'ArrowUp') {
        finis.style.top = '0px'; // Show the finis container
        navContainer.style.top = '40px'; // Reset nav-container position
    }
});
