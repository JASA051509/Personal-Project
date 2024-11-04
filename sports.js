
const fadeDivs = document.querySelectorAll('.fadeDiv');
const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the div is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const div = entry.target;
        if (entry.isIntersecting) {
            div.classList.add('show'); // Add class to show div
        } else {
            div.classList.remove('show'); // Remove class to hide div
        }
    });
}, options);

// Observe each div
fadeDivs.forEach(div => {
    observer.observe(div);
});
