let burger = document.getElementById("burger");
let button = document.getElementById("burger__button");
let cross = document.getElementById("burger__cross");
let wrapper = document.getElementById("wrapper")

button.addEventListener('click', e => {
  e.stopPropagation();
  burger.classList.add('burger-active');
  wrapper.classList.add('body__wrapper-active');
});

document.addEventListener('click', e => {
  let element = e.target;
  let its_hamburger = element == burger;
  console.log(its_hamburger);
  console.log(element);
  if (burger.classList.contains('burger-active') && !its_hamburger) {
    burger.classList.remove('burger-active');
    wrapper.classList.remove('body__wrapper-active');
  }
})