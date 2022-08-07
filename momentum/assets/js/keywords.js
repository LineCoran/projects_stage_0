export const keyWordsInput = document.getElementById('keywords-input');
const keyWordsList = document.querySelector('.keywords-list');
const KEY_WORDS = [];
const MAX_COUNTS_KEY_WORDS = 15;
// const MAX_WORDS_IN_KEY_WORD = 1;
// const MAX_LENGTH_OF_WORD = 12;
const MIN_LENGTH_OF_WORD = 1;

let globalNewElement;

let keyWordListItems;
let keyWordsListButtons;

let keyWordsCounter = 0;

export function definesInputActivity() {
    let currentSourceLink = localStorage.getItem('link');
    if (currentSourceLink == 'github') {
        keyWordsInput.setAttribute('disabled', 'disabled');
    } else {
        keyWordsInput.removeAttribute('disabled');
    }
}

function createKeyWordsComponent(word) {

    const keyWordItem = document.createElement('div');
    const keyWordName = document.createElement('div');
    const keyWordIcon = document.createElement('div');

    keyWordItem.classList.add('keyword-item');
    keyWordItem.classList.add(keyWordsCounter);
    keyWordName.classList.add('keyword-name');
    keyWordIcon.classList.add('keyword-icon');
    keyWordIcon.id = keyWordsCounter;
    keyWordName.innerHTML = word;
    keyWordItem.append(keyWordName);
    keyWordItem.append(keyWordIcon);

    keyWordsCounter++;

    return keyWordItem;
}

function findWordListAndItems() {
    keyWordListItems = document.querySelectorAll('.keyword-item');
    keyWordsListButtons = document.querySelectorAll('.keyword-icon');
}

function deleteKeyWord() {

    findWordListAndItems()

    for (let i = 0; i < keyWordsListButtons.length; i++) {

        keyWordsListButtons[i].addEventListener('click', function (item) {
            findWordListAndItems();
            let target = item.target;
            let number = target.id;
            for (let i = 0; i < keyWordListItems.length; i++) {
                if (keyWordListItems[i].classList.contains(number)) {
                    keyWordListItems[i].remove();
                    KEY_WORDS.splice(i, 1);
                    keyWordsCounter--;
                    return;
                }

            }
            
        })
    }

    
}

function setKeyWords() {
    keyWordsInput.addEventListener('change', function (event) {
        
        let word = keyWordsInput.value.trim().replace(/\s+/g, " ");
        if (word === "") {
            return;
        }
        let time = 1;
        if (KEY_WORDS.length >= MAX_COUNTS_KEY_WORDS) {
            alert('Максимальное количество ключевых слов')
            return;
        }
        let words = word.split(' ');
        if (word.length <= MIN_LENGTH_OF_WORD) {
            alert('Слишком короткое')
            return;
        }

        for (let i = 0; i<words.length; i++) {
            let newElement = createKeyWordsComponent(words[i].trim());
            keyWordsList.append(newElement);
            KEY_WORDS.push(words[i]);
            globalNewElement = newElement;
            setTimeout(function() {
            newElement.classList.add('keyword-item-visible')
        }, time)
        time = time+100;
        }
        
        keyWordsInput.value = "";
        
        deleteKeyWord();
        
    })
}

export default function initKeyWords() {
    definesInputActivity();
    setKeyWords();
}