/* 
This JavaScript file contains the functionality for interactive elements on the website, such as the sidebar toggle, slideshow, and modals for detailed product views. 
It supports user engagement and enhances the user experience with interactive features.
*/


// Sidebar toggle functionality
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

// Open sidebar when menu icon is clicked
if (menuIcon && sidebar) {
    menuIcon.addEventListener('click', function () {
        sidebar.style.width = '70%'; // Adjust width for mobile view
    });
}

// Close sidebar when close button is clicked
if (closeBtn && sidebar) {
    closeBtn.addEventListener('click', function () {
        sidebar.style.width = '0'; // Collapse sidebar
    });
}

// Slideshow functionality
let currentSlideIndex = 0;
const slides = document.getElementsByClassName("mySlides");

function showSlides() {
    if (slides.length > 0) { // Only execute if slides exist
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // Hide all slides initially
        }
        currentSlideIndex++;
        if (currentSlideIndex > slides.length) { currentSlideIndex = 1; } // Reset to first slide
        slides[currentSlideIndex - 1].style.display = "block"; // Show the current slide
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
}

// Initialize slideshow
if (slides.length > 0) {
    showSlides();
}

// Close the modal when clicking outside the content
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Modal functionality for product details
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close the modal when clicking outside the content
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

