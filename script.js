// Function to add a slight shadow to the header when scrolling
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled-shadow');
    } else {
        header.classList.remove('scrolled-shadow');
    }
});

// Add a simple style for this in your CSS:
/*
header.scrolled-shadow {
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
}
*/