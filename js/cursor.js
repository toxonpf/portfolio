const circleElement = document.querySelector(".circle");

// Получаем размеры окна
const windowHeight = window.innerHeight;

// Ставим мышь и круг в левый центр
const mouse = { x: 0, y: windowHeight / 2 };
const previounsMouse = { x: 0, y: windowHeight / 2 };
const circle = { x: 0, y: windowHeight / 2 };
let currentScale = 0;
let currentAngle = 0;
let lastAngle = 0;

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

const speed = 0.17;

const tick = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

    const deltaMouseX = mouse.x - previounsMouse.x;
    const deltaMouseY = mouse.y - previounsMouse.y;
    previounsMouse.x = mouse.x;
    previounsMouse.y = mouse.y;

    // Сжатие
    const mouseVelocity = Math.min(
        Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 5,
        150
    );

    const scaleValue = (mouseVelocity / 150) * 0.5;
    currentScale += (scaleValue - currentScale) * speed;
    const sclaeTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

    // Поворот
    let angle = currentAngle;

    if (deltaMouseX !== 0 || deltaMouseY !== 0) {
        angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
    }

    // Плавный переход угла
    let deltaAngle = angle - lastAngle;
    deltaAngle = ((deltaAngle + 180) % 360) - 180;
    lastAngle += deltaAngle * speed;
    currentAngle = lastAngle;


    const rotationTransform = `rotate(${currentAngle}deg)`;

    circleElement.style.transform = `${translateTransform} ${rotationTransform} ${sclaeTransform}`;

    window.requestAnimationFrame(tick);
};
tick();
circleElement.style.opacity = '1';

$(document).ready(function () {
    const $circle = $('.circle');

    $(document).on('mouseleave', function () {
        $circle.css('opacity', '0');
    });

    $(document).on('mouseenter', function () {
        $circle.css('opacity', '1');
    });

    $('iframe').on('mouseleave', function () {
        $circle.css('opacity', '1');
    });

    $('iframe').on('mouseenter', function () {
        $circle.css('opacity', '0');
    });
});