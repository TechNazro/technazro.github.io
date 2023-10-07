const slogans = [
    "Where science and Sanatana Dharma meet.",
    "Exploring the intersection of spirituality and technology.",
    "Finding meaning and purpose in the modern world with Sanatana Dharma.",
    "Using technology to promote spiritual growth.",
    "The scientific basis of ancient Hindu teachings.",
    "Applying Sanatana Dharma principles to modern life.",
    "Connecting your spirituality to your everyday life.",
    "Science and spirituality, hand in hand.",
    "A new way of looking at the world.",
    "For those who seek more.",
    "Where the future meets the past.",
    "A new era of spiritual growth.",
    "Sanatana Dharma for the modern world.",
    "A bridge between two worlds.",
    "Where science and spirituality unite.",
    "A new perspective on Sanatana Dharma.",
    "Spirituality for the digital age.",
    "Where technology meets transcendence.",
    "A new path to spiritual enlightenment.",
    "Sanatana Dharma for the next generation."
];

let currentSlide = 0;

let showNextSlide = function () {
    currentSlide++;
    if (currentSlide >= slogans.length) {
        currentSlide = 0;
    }

    document.querySelector(".slide").innerHTML = slogans[currentSlide];
}

setInterval(showNextSlide, 5000);
