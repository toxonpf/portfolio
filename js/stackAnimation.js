const stackBlock = document.querySelector('#stackBlock');


async function addStack(element) {
    function sleep() {
        return new Promise(resolve => setTimeout(resolve, 50))
    }

    for (let i = 0; i < element.childElementCount; i++) {
        await sleep();
        element.children[i].style.animation = '0.3s forwards animElem1';
        element.children[i].addEventListener('click', () => {
            $('#navbar').slideUp(500);
            let stackStyle = { 
                paddingTop: element.children[i].style.paddingTop,
                marginTop: element.children[i].children[0].children[0].style.marginTop,
                outline: element.children[i].style.outline
            };
            element.children[i].style.paddingTop = '0';
            element.children[i].children[0].children[0].style.marginTop = '0';
            element.children[i].style.outline = '0px';
            setTimeout(() => {
                let duplicateStackElem = stackInf(element.children[i]);
                document.body.style.overflow = 'hidden';
                
                setTimeout(() => {
                    duplicateStackElem.style.animation = '1s forwards stackInf';
                    duplicateStackElem.children[0].style.animation = '1s forwards stackImgInf';
                    duplicateStackElem.children[0].style.position = 'relative';

                    const stackContent = document.createElement('div');
                    stackContent.className = 'stackContent';
                    duplicateStackElem.appendChild(stackContent);
                    stackContent.style.color = 'transparent';

                    const stackHeader = document.createElement('h1');
                    stackHeader.className = 'stackHeader';
                    stackContent.appendChild(stackHeader);

                    const stackLabel = document.createElement('div');
                    stackLabel.className = 'stackLabel';
                    stackLabel.innerText = duplicateStackElem.children[0].children[1].innerText;
                    stackHeader.appendChild(stackLabel);

                    const stackClose = document.createElement('div');
                    stackClose.className = 'stackClose';
                    stackClose.innerText = '☓';
                    stackClose.addEventListener('click', () => {
                        $('#navbar').show(0);
                        duplicateStackElem.style.animation = '1s forwards stackInfClose';
                        duplicateStackElem.remove();
                        element.children[i].style.paddingTop = stackStyle.paddingTop;
                        element.children[i].children[0].children[0].style.marginTop = stackStyle.marginTop;
                        element.children[i].style.outline = stackStyle.outline;
                        document.body.style.overflowY = 'scroll';
                    });
                    const stackText = document.createElement('div');
                    stackText.className = 'stackText';
                    stackText.innerText = duplicateStackElem.children[0].children[2].innerText;
                    stackContent.appendChild(stackText);

                    setTimeout(() => {
                        addLetter(stackLabel);
                        stackHeader.appendChild(stackClose);
                        addLetter(stackText);
                    }, 700);
                }, 100);
            }, 450);
        });
    }
}

let stackI = 0;
addEventListener('scroll', () => {
    if (window.scrollY >= (targetStacksHeader.getBoundingClientRect().y + 700) && 1000 <= performance.now() && stackI == 0) {
        addStack(stackBlock);
        stackI++
    }
});

function stackInf(stack) {
    let stackElem = stack.innerHTML;
    let duplicateStackElem = document.createElement('div');
    duplicateStackElem.innerHTML = stackElem;
    duplicateStackElem.style.position = 'fixed';

    duplicateStackElem.style.top = stack.getBoundingClientRect().y + 'px';
    duplicateStackElem.style.left = stack.getBoundingClientRect().x + 'px';

    duplicateStackElem.style.padding = stack.style.padding;
    duplicateStackElem.style.backgroundColor = 'black';
    duplicateStackElem.style.borderRadius = '50px';

    duplicateStackElem.style.width = stack.offsetWidth + 'px';
    duplicateStackElem.style.height = stack.offsetHeight + 'px';

    document.body.appendChild(duplicateStackElem);
    duplicateStackElem.style.transition = 'all 0.3s ease-in-out';

    return duplicateStackElem;
}