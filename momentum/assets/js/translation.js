import showGreeting from "./greeting";
import getWheter from "./weather";

let currentDate;

const en = {
    morning: "Доброе утро",
    evening: "Добрый вечер",
    night: "Доброй ночи",
    afternoon: "Добрый день",
    }

function translateGreating(){ 
    const greeting = document.querySelector('.greeting');
    const currentGreating = greeting.innerHTML.split(' ');
    let currentLanguage = localStorage.getItem('lang');
    currentDate = currentGreating[1];
    let newGreating;
    if (currentLanguage=="en") {
        newGreating = en[currentGreating[1]];
        localStorage.setItem('lang', 'ru');
        greeting.innerHTML = newGreating;
    } else {
        showGreeting();
        localStorage.setItem('lang', 'en');
    }
}


export default function initTraslation() {
    document.addEventListener('click', function() {
        translateGreating()
        getWheter();
    })
}

