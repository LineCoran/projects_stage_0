(function(){
    const loginWindow = {
        title: "Login to your account",
        btn: "Sign In",
        footer: "Don't have an account?",
        footerLink: "Register"
    }
    const createWindow = {
        title: "Create account",
        btn: "Sign Up",
        footer: "Already have an account?",
        footerLink: "Log in"
    }
    const headerButton = document.getElementById('header__button')
    const popupClassName = 'popup-active';
    const popup = document.getElementById('popup');
    const popupClick = document.getElementById('clickToCreate');
    const popupTitle = document.getElementById('popup_title');
    const popupButton = document.getElementById('popup_btn');
    const footerText = document.getElementById('footer__text');
    const loginButton = document.getElementById('loginButton');
    const accountButton = document.getElementById('account_button');
    
    function ChangePopUpWindow(event) {
        let setOfWords = (event.target.innerHTML === "Register")?createWindow:loginWindow;
        popup.classList.toggle(popupClassName);
        popupTitle.innerHTML = setOfWords.title;
        popupButton.innerHTML = setOfWords.btn;
        footerText.innerHTML = setOfWords.footer;
        popupClick.innerHTML = setOfWords.footerLink;
    }

    function makePopUpVisible(e){
        popup.classList.remove(popupClassName);
        popupTitle.innerHTML = loginWindow.title;
        popupButton.innerHTML = loginWindow.btn;
        footerText.innerHTML = loginWindow.footer;
        popupClick.innerHTML = loginWindow.footerLink;
        e.stopPropagation();
        popup.classList.toggle('popup-visible');
        wrapper.classList.add('body__wrapper-active');
    }

    function makePopUpInvisible(event) {
        let target = event.target;
        let its_popup = popup == target || popup.contains(target);
        if (popup.classList.contains('popup-visible') && !its_popup) {
            popup.classList.remove('popup-visible');
            wrapper.classList.remove('body__wrapper-active');
          }
    }

    function alertLoginPassword() {
        let loginValue = document.getElementById('login').value;
        let passwordValue = document.getElementById('password').value;
        alert(`Login: ${loginValue}\nPassword: ${passwordValue}`);
    }

    popupClick.addEventListener('click', ChangePopUpWindow);
    headerButton.addEventListener('click', makePopUpVisible);
    accountButton.addEventListener('click', makePopUpVisible);
    loginButton.addEventListener('click', alertLoginPassword);
    document.addEventListener('click', makePopUpInvisible);
}())