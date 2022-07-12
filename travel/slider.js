let prev = document.getElementById('prev'),
    center  = document.getElementById('center'),
    next = document.getElementById('next'),
    sliderWindow = document.getElementById('slider__list'),
    sliderInner = document.getElementById('slider__inner'),
    length = 0,
    counter = 1,
    buttons = document.getElementsByClassName('button__item-desktop'),
    slides = document.getElementsByClassName('slider__item');
    left = document.getElementById('arrow__left'),
    right = document.getElementById('arrow__right');
function addNameId(arr) {
    let massive = ['prePrev', 'prev', 'center', 'next', 'laterNext'];
    for(let i = 0; i< arr.length; i++){
        arr[i].id = massive[i];
    }
}
function getNewNameOfSlides() {
    prev = document.getElementById('prev');
    center  = document.getElementById('center');
    next = document.getElementById('next');
    center.removeEventListener('click', nextClick);
    center.removeEventListener('click', prevClick);
    prev.addEventListener('click', prevClick)
    next.addEventListener('click', nextClick);
}
function prevClick() {

    (counter==0)?counter=2:counter--;
    for (let i = 0; i<buttons.length; i++){
        if (i!=counter) {
            buttons[i].classList.remove("button__item-active")
        } else {
            buttons[i].classList.add('button__item-active');
        }
    }
    length = length+widthOfSliderItem();
    sliderInner.lastElementChild.remove();
    sliderInner.style.transform = `translateX(${-length}px)`;
    let newSliderItem = createElement(center);
    sliderInner.prepend(newSliderItem)
    sliderWindow.style.transform = `translateX(${length}px)`;
    addNameId(slides);
    getNewNameOfSlides();
}
function nextClick() {
    (counter==2)?counter=0:counter++;
    for (let i = 0; i<buttons.length; i++){
        if (i!=counter) {
            buttons[i].classList.remove("button__item-active")
        } else {
            buttons[i].classList.add('button__item-active');
        }
    }
    let newSliderItem = createElement(center);
    length = length-widthOfSliderItem();
    sliderInner.firstElementChild.remove();
    sliderInner.append(newSliderItem);
    sliderInner.style.transform = `translateX(${(-1)*length}px)`
    sliderWindow.style.transform = `translateX(${length}px)`;
    addNameId(slides);
    getNewNameOfSlides();
}
function widthOfSliderItem() {
    return parseFloat(getComputedStyle(prev).width)+parseFloat(getComputedStyle(prev).marginRight)
}
function createElement(el) {
    let newElement = document.createElement('div');
    let classOfCenter = el.className.split(' ');
    newElement.classList.add(...classOfCenter);
    let newElement2 = document.createElement('p');
    newElement2.classList.add('contry-name');
    newElement2.innerHTML = classOfCenter[2];
    newElement.append(newElement2);
    return newElement;
}
prev.addEventListener('click', prevClick)
right.addEventListener('click', nextClick)
left.addEventListener('click', prevClick)
next.addEventListener('click', nextClick)

