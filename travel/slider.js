let prePrev  = document.getElementById('prePrev');
let prev = document.getElementById('prev');
let center  = document.getElementById('center');
let next = document.getElementById('next');
let laterNext  = document.getElementById('laterNext');
let center2 = document.querySelector('.slider__item-japan');
let sliderWindow = document.getElementById('slider__list');
let sliderInner = document.getElementById('slider__inner')
let length = 0;
let counter = 1;
let buttons = document.getElementsByClassName('button__item-desktop');


console.log(buttons.length)

function prevClick() {

    (counter==0)?counter=2:counter--;
    for (let i = 0; i<buttons.length; i++){
        if (i!=counter) {
            buttons[i].classList.remove("button__item-active")
        } else {
            buttons[i].classList.add('button__item-active');
        }
    }


    length = length+860;
   
    laterNext.remove()

    sliderInner.style.transform = `translateX(${-length}px)`
    
    let newElement = document.createElement('div');
    let classOfCenter = center.className.split(' ');
    newElement.classList.add(classOfCenter[0]);
    newElement.classList.add(classOfCenter[1]);
    newElement.classList.add(classOfCenter[2]);
    let newElement2 = document.createElement('p');
    newElement2.classList.add('contry-name');
    newElement2.innerHTML = classOfCenter[2];
    newElement.append(newElement2);


    sliderInner.prepend(newElement);
    
    sliderWindow.style.transform = `translateX(${length}px)`;

    prePrev.id = "prev";
    prev.id = "center";
    center.id ="next";
    next.id = "laterNext";
    laterNext.id ="prePrev";

    newElement.id = "prePrev";

    prePrev  = document.getElementById('prePrev');
    prev = document.getElementById('prev');
    center  = document.getElementById('center');
    next = document.getElementById('next');
    laterNext  = document.getElementById('laterNext');

    center.removeEventListener('click', nextClick);
    center.removeEventListener('click', prevClick);
    prev.addEventListener('click', prevClick)
    next.addEventListener('click', nextClick);
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

    length = length-860;
   
    prePrev.remove()

    sliderInner.style.transform = `translateX(${(-1)*length}px)`
    
    let newElement = document.createElement('div');
    let classOfCenter = center.className.split(' ');
    newElement.classList.add(classOfCenter[0]);
    newElement.classList.add(classOfCenter[1]);
    newElement.classList.add(classOfCenter[2]);
    let newElement2 = document.createElement('p');
    newElement2.classList.add('contry-name');
    newElement2.innerHTML = classOfCenter[2];
    newElement.append(newElement2);


    sliderInner.append(newElement);
    
    sliderWindow.style.transform = `translateX(${length}px)`;

    prev.id = "prePrev";
    center.id ="prev";
    next.id = "center";
    laterNext.id ="next";

    newElement.id = "laterNext";

    

    prePrev  = document.getElementById('prePrev');
    prev = document.getElementById('prev');
    center  = document.getElementById('center');
    next = document.getElementById('next');
    laterNext  = document.getElementById('laterNext');

    
    center.removeEventListener('click', nextClick);
    center.removeEventListener('click', prevClick);
    prev.addEventListener('click', prevClick)
    next.addEventListener('click', nextClick);
}


prev.addEventListener('click', prevClick)
next.addEventListener('click', nextClick)

