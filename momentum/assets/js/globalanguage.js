export const languageButton = document.querySelector('.change-language');

export default function getGlobalLanguage() {
    let defaultLanguage = 'en';
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', defaultLanguage);
    }
    languageButton.innerHTML = localStorage.getItem('lang');
}