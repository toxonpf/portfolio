const scrollArrow = document.querySelector('#scrollArrow');

setTimeout(() => {
    window.addEventListener('scroll', () => {
        scrollArrow.style.animation = "none";
        scrollArrow.style.opacity = "1";
        scrollArrow.style.bottom = "40px";
        scrollArrow.style.animation = "0.3s forwards scrollArrowUp ease-in-out";
    });
}, 1000);