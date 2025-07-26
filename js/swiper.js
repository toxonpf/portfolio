const swiper = $('#swiper');
const next = $('#next');
const prev = $('#prev');
let iframes = $('.projectBlock');

let repeat = 1; // начинаем с первого "реального" слайда
let swipeRange = iframes.outerWidth(true);

// Клонируем первый и последний слайды
const firstClone = iframes.first().clone();
const lastClone = iframes.last().clone();
swiper.append(firstClone);
swiper.prepend(lastClone);

// Обновляем коллекцию с учётом клонов
iframes = $('.projectBlock');
const total = iframes.length;

// Сдвигаем на первый реальный слайд
swiper.css({ left: -swipeRange * repeat + 'px' });

window.addEventListener('resize', function () {
    swipeRange = $('.projectBlock').outerWidth(true);
    swiper.css({ left: -swipeRange * repeat + 'px' });
});

next.click(function () {
    repeat++;
    swiper.animate({ left: -swipeRange * repeat + 'px' }, 500, function () {
        if (repeat === total - 1) {
            // Если дошли до клона первого, мгновенно возвращаемся к первому реальному
            repeat = 1;
            swiper.css({ left: -swipeRange * repeat + 'px' });
        }
    });
});

prev.click(function () {
    repeat--;
    swiper.animate({ left: -swipeRange * repeat + 'px' }, 500, function () {
        if (repeat === 0) {
            // Если дошли до клона последнего, мгновенно возвращаемся к последнему реальному
            repeat = total - 2;
            swiper.css({ left: -swipeRange * repeat + 'px' });
        }
    });
});
