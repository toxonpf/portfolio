const swiper = $('#swiper');
const next = $('#next');
const prev = $('#prev');
const iframes = $('.projectBlock');

let repeat = 0;
let swipeRange = $('.projectBlock').outerWidth(true);
window.addEventListener('resize', function () {
    swipeRange = $('.projectBlock').outerWidth(true);

    swiper.css({left: -swipeRange * repeat + 'px'});
});

next.click(function () {
    repeat++;
    if (repeat >= iframes.length) {
        repeat = 0;
    }
    swiper.animate({left: -swipeRange * repeat + 'px'}, 500);
});
 
prev.click(function () {
    repeat--;
    if (repeat < 0) {
        repeat = iframes.length - 1;
    }
    swiper.animate({left: -swipeRange * repeat + 'px'}, 500);
});
