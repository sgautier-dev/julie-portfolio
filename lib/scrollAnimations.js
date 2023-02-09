"use client";

if (typeof window !== 'undefined') {
// Wrap the code inside an Immediately Invoked Function Expression (IIFE) to ensure the code is executed only once and not interfere with other scripts
(function() {
    // check if elements are visible in the viewport
    const checkVisibility = (elements) => {
        elements.forEach((element) => {
            const top = element.getBoundingClientRect().top;
            const bottom = element.getBoundingClientRect().bottom;

            if (top < window.innerHeight && bottom > 0) {
                element.style.opacity = 1;
                element.style.transform = `scale(1)`;
            } else {
                element.style.opacity = 0;
                element.style.transform = `scale(0)`;
            }
        });
    };

    window.addEventListener('scroll', () => {
        //animation on main Title
        const items = document.querySelectorAll('.item');
        items.forEach((item, index) => {
            const scrolled = window.pageYOffset;
            item.style.transform = `translateY(${Math.sin(scrolled * 0.01 + index) * 10}%)`;
        });

        //animation on images
        const images = document.querySelectorAll('.animate-photo');
        const title = document.querySelector('.title');
        images.forEach(image => {
            const titleRect = title.getBoundingClientRect();
            const imageRect = image.getBoundingClientRect();

            if (titleRect.top < imageRect.bottom && titleRect.bottom > imageRect.top) {
                image.style.transform = 'scale(1.05)';
            } else {
                image.style.transform = 'scale(1)';
            }
        });

        //animation on texts
        const texts = document.querySelectorAll('.animate-text');
        checkVisibility(texts);
    });
})();
}

