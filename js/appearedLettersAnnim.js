async function addLetter(element) {
    function sleep(){
        return new Promise(resolve => setTimeout(resolve, 25))
    }

    let text = element.innerText.split(' ');
    element.style.color = "white"; 
    element.style.mixBlendMode = "difference";
    element.innerHTML = "";
    for(let i = 0; i < text.length; i++){
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

const lebelcontent = document.querySelector('#lebelcontent');
setTimeout(() => {addLetter(lebelcontent)}, 3200);


const photoLabel = document.querySelector('#photoLabel');
const labelImg = document.querySelector('#labelImg'); 
let labelImgCords = labelImg.getBoundingClientRect();
let photoLabelI = 0;
addEventListener('scroll', () => {
    if(window.scrollY >= (labelImgCords.bottom - labelImgCords.y) && photoLabelI == 0 && 1000 <= performance.now()){
        addLetter(photoLabel);
        photoLabelI++
    }
});