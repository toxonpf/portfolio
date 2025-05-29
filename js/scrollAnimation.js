const photo = document.querySelector('#photo');
const  mediaPhoto = document.querySelector('#MEDIA_photo');
const targetPhoto = document.querySelector('#labelImg');
const labelAbout = document.querySelector('#labelAbout');
const aboutLine = document.querySelector('#DECORATE_aboutLine');
let targetPhotoCords = targetPhoto.getBoundingClientRect();
addEventListener('scroll', () => {
    if(window.scrollY >= (targetPhotoCords.bottom - targetPhotoCords.y) && 1000 <= performance.now()){
        photo.className = "scrollAnim";
        mediaPhoto.style.animation = "0.7s MEDIA_photo ease-in-out forwards"
        aboutLine.style.animation = "0.5s DECORATE_aboutLine forwards";
        setTimeout(() => {
            labelAbout.className = "1s forwards addLetter ease-in-out";
        }, 1200);
    }
});

const stacksHeader = document.querySelector('#stacksHeader');
const targetStacksHeader = document.querySelector('#targetStacksHeader');
addEventListener('scroll', () => {
    if(window.scrollY >= (targetStacksHeader.getBoundingClientRect().y) && 1000 <= performance.now()){
        stacksHeader.className = "scrollAnim";
        stacksHeader.style.animation = "0.3s forwards scrollAnim ease-in-out";
    }
}); 

const projectsHeader = document.querySelector('#projectsHeader');
const  targetProjects = document.querySelector('#targetProjects');
const RelProjectsBlock = document.querySelector('#RelProjectsBlock');

addEventListener('scroll', () => {
    if(window.scrollY >= (targetProjects.getBoundingClientRect().y) && 1000 <= performance.now()){
        projectsHeader.className = "scrollAnim";
        setTimeout(() => {
            RelProjectsBlock.className = "scrollAnim";
        }, 300);
    }
});

