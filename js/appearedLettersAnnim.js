async function addLetter(element) {
    function sleep() {
        return new Promise(resolve => setTimeout(resolve, 25))
    }

    let text = element.innerText.split(' ');
    element.style.color = "white";
    element.style.mixBlendMode = "difference";
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
        await sleep();
        let letterBlock = document.createElement('div');
        letterBlock.className = "addLetter";
        letterBlock.innerHTML = text[i];
        letterBlock.style.animation = '0.3s forwards addLetter';
        letterBlock.style.marginRight = "0.7em";
        letterBlock.style.height = "35px";
        element.appendChild(letterBlock);
    }
}

var FIVE_MINUTES = 5 * 60 * 1000;
var LAST_ANIMATION_KEY = 'lastOpeningAnimation';

function canRunAnimation() {
    const last = localStorage.getItem(LAST_ANIMATION_KEY);
    if (!last) return true;
    return Date.now() - Number(last) > FIVE_MINUTES;
}

if (canRunAnimation()) {
    const lebelcontent = document.querySelector('#lebelcontent');
    setTimeout(() => { addLetter(lebelcontent) }, 3200);
} else {
    const lebelcontent = document.querySelector('#lebelcontent');
    lebelcontent.style.color = "white";
    lebelcontent.style.mixBlendMode = "difference";
    addLetter(lebelcontent);
}



const photoLabel = document.querySelector('#photoLabel');
const labelImg = document.querySelector('#labelImg');
let labelImgCords = labelImg.getBoundingClientRect();
let photoLabelI = 0;
addEventListener('scroll', () => {
    if (window.scrollY >= (labelImgCords.bottom - labelImgCords.y) && photoLabelI == 0 && 1000 <= performance.now()) {
        addLetter(photoLabel);
        photoLabelI++
    }
});