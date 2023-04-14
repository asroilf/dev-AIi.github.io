import anime from 'animejs/lib/anime.es.js';
const anime = require('animejs');

anime({
    targets: '.hello',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
});

/*const scrollr = document.querySelector(".scroller");

const scroller_time = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollr.animate(
    {
        transform:['scaleX(0)', 'scale(100)'],
    },
    {
        duration: 1,
        timeline: scroller_time,
    }
);*/