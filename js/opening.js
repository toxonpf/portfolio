const openingRel = document.querySelector('#openingRel');
const openingText = document.querySelector('#openingText');
let call = 'pss...';
let appearedText = ' Don`t you know this guy?>';
const wrapper = document.querySelector('#wrapper');

window.onload = function () {
    window.scrollTo(0, 0);
};
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

var FIVE_MINUTES = 5 * 60 * 1000;
var LAST_ANIMATION_KEY = 'lastOpeningAnimation';

function canRunAnimation() {
    const last = localStorage.getItem(LAST_ANIMATION_KEY);
    if (!last) return true;
    return Date.now() - Number(last) > FIVE_MINUTES;
}

if (canRunAnimation()) {
    localStorage.setItem(LAST_ANIMATION_KEY, Date.now());

    function sleep() {
        return new Promise(resolve => setTimeout(resolve, 40))
    }

    openingText.firstChild.style.color = "white";
    async function addLetter() {
        for (let i = 0; i < call.length; i++) {
            await sleep();
            let letterBlock = document.createElement('div');
            letterBlock.className = "addLetter";
            letterBlock.innerHTML = call[i];
            letterBlock.style.animation = '0.3s forwards addLetter';
            openingText.firstChild.appendChild(letterBlock);
        }
    }
    addLetter();

    setTimeout(() => {
        openingText.style.fontSize = "4vw";
        async function addLetter() {
            for (let i = 0; i < appearedText.length; i++) {
                await sleep();
                let letterBlock = document.createElement('div');
                letterBlock.className = "addLetter";
                letterBlock.innerHTML = appearedText[i];
                if (letterBlock.innerText == " ") {
                    letterBlock.style.margin = "0.2em";
                }
                letterBlock.style.animation = '0.3s forwards addLetter';
                openingText.lastChild.appendChild(letterBlock);
            }
        }
        addLetter();
    }, 700);

    setTimeout(() => {
        openingText.style.fontSize = "3.5vw";
    }, 1600);

    setTimeout(() => {
        openingText.lastChild.lastElementChild.style.position = "relative";
        openingText.lastChild.lastElementChild.style.left = "41vw";
    }, 1900);

    setTimeout(() => {
        openingText.lastChild.lastElementChild.style.transform = "rotateY(180deg)";
        openingText.lastChild.lastElementChild.style.zIndex = "2";
    }, 2200);

    setTimeout(() => {
        openingText.style.transition = "all 1s ease-in";
        openingText.lastChild.lastElementChild.style.transition = "all 1s ease-in";
        openingText.lastChild.lastElementChild.style.left = "-59.1vw";
        wrapper.style.left = "0";
    }, 2700);

    setTimeout(() => {
        wrapper.style.transition = "all 0s";
        wrapper.style.opacity = "1";
        openingRel.style.opacity = "0";
        document.body.style.overflowY = "auto";
    }, 3700);
} else {
    // Применяем финальные стили сразу
    openingText.style.fontSize = "3.5vw";
    if (openingText.lastChild && openingText.lastChild.lastElementChild) {
        openingText.lastChild.lastElementChild.style.position = "relative";
        openingText.lastChild.lastElementChild.style.left = "-59.1vw";
        openingText.lastChild.lastElementChild.style.transform = "rotateY(180deg)";
        openingText.lastChild.lastElementChild.style.zIndex = "2";
        openingText.lastChild.lastElementChild.style.transition = "all 1s ease-in";
    }
    openingText.style.transition = "all 1s ease-in";
    wrapper.style.left = "0";
    wrapper.style.transition = "all 0s";
    wrapper.style.opacity = "1";
    openingRel.style.opacity = "0";
    document.body.style.overflowY = "auto";

    document.querySelectorAll('.animElem1').forEach(el => {
        el.style.animationDelay = '0s';
    });

    document.querySelectorAll('#scrollArrow').forEach(el => {
        el.style.animationDelay = '0s';
    });

    document.querySelectorAll('#readBTNAnimation').forEach(el => {
        el.style.animationDelay = '0s';
    });

    document.querySelectorAll('#DECORATE_LabelCircle').forEach(el => {
        el.style.animationDelay = '0s';
    });
}

window.resetAnim = function () {
    localStorage.removeItem(LAST_ANIMATION_KEY);
    console.log('Таймер анимации сброшен!');
};

