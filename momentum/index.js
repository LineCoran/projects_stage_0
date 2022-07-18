//import date.json;

const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const prevSlideButtom = document.querySelector('.slide-prev');
const nextSlideButtom = document.querySelector('.slide-next');
const city = document.querySelector('.city');
const body = document.getElementById('body');
const weatherIcon = document.querySelector('.weather-icon');
const weatherTemp = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');

function showTime() {
    const date = new Date;
    const currentTime = date.toLocaleTimeString();
    time.innerHTML = currentTime;
    setInterval(showTime, 1000);
    setInterval(showDate, 1000);
}

function showDate() {
    const dateValue = new Date;
    const options = { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC'};
    const currentDate = dateValue.toLocaleDateString('en-EN', options);
    date.innerHTML = currentDate;
}

function getTimeOfDay() {
    const listTimeOfDay = ['night', 'morning', 'day', 'evening'];
    const currentDate = new Date;
    const hours = currentDate.getHours();
    return listTimeOfDay[Math.floor(hours/6)];
}

function showGreeting() {
    const timeOfDay = getTimeOfDay()
    const greetingText = `Good ${timeOfDay}`;
    greeting.innerHTML = greetingText;
}

function setLocaleStorage() {
    localStorage.setItem('name', name.value)
}

function getLocaleStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

//background image

function getRandomNum(){
     return Math.floor(Math.random()*20+1);
}

let randomNum = getRandomNum();

function setBg(random) {
const img = new Image();
img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${getTimeOfDay()}/${String(random).padStart(2, "0")}.jpg`;
    img.onload = () => {
        body.style.background = `url(${img.src})`; 
    }
}

function getSlidePrev() {
    (randomNum==1)?randomNum = 20:randomNum--;
    setBg(randomNum);
}

function getSlideNext() {
    (randomNum==20)?randomNum = 1:randomNum++;
    setBg(randomNum);
}

//Whether 

async function getWheter() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=ef4b203b5c247d84f19012a3a078402b&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    weatherTemp.innerHTML = data.main.temp;
    weatherDescription.innerHTML = data.weather[0].description;
}

async function getQuotes() {
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    console.log(data);
}

getQuotes();
// getWheter();
// showTime()
// showDate()
showGreeting();
setBg(randomNum);
window.addEventListener('beforeunload', setLocaleStorage);
window.addEventListener('load', getLocaleStorage);
prevSlideButtom.addEventListener('click', getSlidePrev)
nextSlideButtom.addEventListener('click', getSlideNext)
city.addEventListener('change', getWheter);
