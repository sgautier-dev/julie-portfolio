import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector('.scroll-tracker')

const scrolltTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: 'block',
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})

scrollTracker.animate(
    {
    transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
        timeline: scrolltTrackingTimeline
    }
)
