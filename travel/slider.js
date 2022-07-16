let sliderWindow = document.getElementById('slider__list'),
    sliderInner = document.getElementById('slider__inner'),
    pinsParent = document.getElementById('slider__buttons')
    length = 0,
    slides = document.getElementsByClassName('slider__item');
function addNameId(arr) {
    let massive = ['prePrev', 'prev', 'center', 'next', 'laterNext'];
    for(let i = 0; i< arr.length; i++){
        arr[i].id = massive[i];
    }
}
function getNewNameOfSlides() {
    left = document.getElementById('arrow__left'),
    right = document.getElementById('arrow__right');
    prev = document.getElementById('prev');
    center  = document.getElementById('center');
    next = document.getElementById('next');
    center.removeEventListener('click', move);
    prev.addEventListener('click', move)
    next.addEventListener('click', move);
    right.addEventListener('click', move)
    left.addEventListener('click', move);
}
function move(event) {
    getNewNameOfSlides();
    let direction = (event.target.id == 'next'|| event.target.id == 'arrow__right')?1:-1;
    if (direction == -1) {
        length+=parseFloat(getComputedStyle(prev).width)
        sliderInner.lastElementChild.remove();
        sliderInner.prepend(center.cloneNode(true))
        pinsParent.lastElementChild.after(pinsParent.firstElementChild);
    } else {
        length-=parseFloat(getComputedStyle(prev).width)
        sliderInner.firstElementChild.remove();
        sliderInner.append(center.cloneNode(true));
        pinsParent.firstElementChild.before(pinsParent.lastElementChild);
    }
    sliderInner.style.transform = `translateX(${-length}px)`;
    sliderWindow.style.transform = `translateX(${length}px)`;
    addNameId(slides);
    getNewNameOfSlides();
}
move();