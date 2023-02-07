"use client";

if (typeof document !== 'undefined') {
    const items = document.querySelectorAll('.item');

    if (items) {
        {
            window.onscroll = () => {
                const scrolled = window.pageYOffset;
                items.forEach((item, index) => {
                    item.style.transform = `translateY(${Math.sin(scrolled * 0.01 + index) * 10}%)`;
                });
            };
        }
    }

    const images = document.querySelectorAll('.animate-photo');

    if (images) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;

            images.forEach((image, index) => {
                const imageTop = image.getBoundingClientRect().top;
                const imageBottom = image.getBoundingClientRect().bottom;

                // Offset each image by a different amount
                const offset = index * 100;

                if (imageTop < window.innerHeight && imageBottom > 0) {
                    const waveAmplitude = Math.sin((scrollTop + offset) / image.offsetHeight) * 100;
                    image.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${-waveAmplitude}, 0, 1)`;
                }
            });
        })
    }

};

// import './scroll-timeline.js';

// const animatedImage = document.querySelector('.animatedImage')

// const animatedImageTimeline = new ScrollTimeline({
//     scrollOffsets: [
//         { target: animatedImage, edge: "end", threshold: "1" },
//         { target: animatedImage, edge: "start", threshold: "1" },
//     ]
// })

// animatedImage.animate(
//     {
//         transform: ['rotateX(90deg)', 'rotate(0)'],
//     },
//     {
//         duration: 1,
//         timeline: animatedImageTimeline
//     }
// )

