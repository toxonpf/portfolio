function navButtonText() {
    const navButtonsBlockBurgerButton = document.querySelectorAll('.navButtonsBlockBurgerButton');
    const navButtonsBlock = document.querySelector('#navButtonsBlock');
    const navClose = document.querySelector('#navClose');
    const navButtons = document.querySelectorAll('.navButton');

    navButtonsBlockBurgerButton[0].addEventListener('click', (e) => {
        e.stopPropagation();
        navButtonsBlock.style.right = "0";
    });

    navClose.addEventListener('click', (e) => {
        e.stopPropagation();
        navButtonsBlock.style.right = "-100%";
    });

    document.addEventListener('scroll', () => {
        navButtonsBlock.style.right = "-100%";
    });

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtonsBlock.style.right = "-100%";
        });
    });

    document.addEventListener('click', (e) => {
        if (!navButtonsBlock.contains(e.target) && e.target !== navButtonsBlockBurgerButton) {
            navButtonsBlock.style.right = "-100%";
        }
    });
}
navButtonText();

function navButtonIcon() {
    const navButtonsBlockLinks = $('#navButtonsBlock a');
    const MediaBurgerBlock = document.createElement('div');
    
    MediaBurgerBlock.className = 'mediaBurgerBlock';
    $('#navbar').height()
    MediaBurgerBlock.css('top', '0');
}

navButtonIcon();