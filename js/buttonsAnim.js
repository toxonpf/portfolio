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

function navButtonIconOpen() {
    const navButtonsBlockLinks = $('#navButtonsBlock a');
    const mediaBurgerBlock = $('#mediaBurgerBlock');
    const navButtonIcon = $('#navButtonIcon');
    mediaBurgerBlock.empty().append(navButtonsBlockLinks.clone());

    $(window).on('resize', () => {
        mediaBurgerBlock.css({
            'height': '0px',
            'overflow': 'hidden',
            'background-color': ''
        });
    });

    navButtonIcon.on('click', () => {
        if (mediaBurgerBlock.height() === 0) {
            const scrollHeight = mediaBurgerBlock[0].scrollHeight;
            mediaBurgerBlock.css({
                'height': scrollHeight + 'px',
                'overflow': 'auto',
                'background-color': '#000'
            });
            navButtonIcon.addClass('open');
        } else {
            mediaBurgerBlock.css({
                'height': '0px',
                'overflow': 'hidden',
                'background-color': ''
            });
            navButtonIcon.removeClass('open');
        }
    });

    // При ресайзе тоже убираем класс open
    $(window).on('resize', () => {
        if ($(window).width() > 860) {
            // Возвращаем всё как для десктопа
            mediaBurgerBlock.css({
                'height': '',
                'overflow': '',
                'background-color': ''
            });
            navButtonIcon.removeClass('open');
            $('#navButtonIcon').hide();
            $('#navButtonText').show();
        } else {
            // Для мобильного — скрываем меню
            mediaBurgerBlock.css({
                'height': '0px',
                'overflow': 'hidden',
                'background-color': ''
            });
            navButtonIcon.removeClass('open');
            $('#navButtonIcon').show();
            $('#navButtonText').hide();
        }
    });

    // При клике на ссылку внутри mediaBurgerBlock — сворачиваем меню
    mediaBurgerBlock.on('click', 'a', function () {
        mediaBurgerBlock.css({
            'height': '0px',
            'overflow': 'hidden',
            'background-color': ''
        });
        navButtonIcon.removeClass('open');
    });

    // При клике на .stackElem — тоже сворачиваем меню
    mediaBurgerBlock.on('click', '.stackElem', function () {
        mediaBurgerBlock.css({
            'height': '0px',
            'overflow': 'hidden',
            'background-color': ''
        });
        navButtonIcon.removeClass('open');
    });

    // При прокрутке страницы — сворачиваем меню
    $(window).on('scroll', () => {
        mediaBurgerBlock.css({
            'height': '0px',
            'overflow': 'hidden',
            'background-color': ''
        });
        navButtonIcon.removeClass('open');
    });
}

navButtonIconOpen();
