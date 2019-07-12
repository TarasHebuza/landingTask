const GoleftRight = (elem) => {
    let leftOrRight;

    if (elem.getAttribute('class') == 'goForward') {
        leftOrRight = -1;
    } else {
        leftOrRight = 1;
    }

    let getSlideMargin = parseInt(getComputedStyle(document.querySelector('.slides')).marginLeft);
    let widthSlide = document.querySelector('.slide').offsetWidth;
    
    if (leftOrRight == -1) {
        if (parseInt(getComputedStyle(document.querySelector('.slides')).marginLeft) !== -(widthSlide * 2) ) {
            document.querySelector('.slides').style.marginLeft = (getSlideMargin + widthSlide * leftOrRight) + 'px';
        }
    } else {
        if (parseInt(getComputedStyle(document.querySelector('.slides')).marginLeft) !== 0) {
            document.querySelector('.slides').style.marginLeft = (getSlideMargin + widthSlide * leftOrRight) + 'px';
        }
    }
    console.log(getSlideMargin, widthSlide, leftOrRight);
}

