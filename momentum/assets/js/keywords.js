const keyWordsInput = document.getElementById('keywords-input');
const keyWordsList = document.querySelector('.keywords-list');
const KEY_WORDS = [];

let keyWordListItems;
let keyWordsListButtons;

let keyWordsCounter = 0;

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
    keyWordsInput.addEventListener('change', function () {
        if (KEY_WORDS.length >= 5) {
            alert('Максимальное количество ключевых слов')
            return;
        }

        if (keyWordsInput.value.split(' ').length > 1 ) {
            alert('Слишком длинное')
            return;
        }
        const newElement = createKeyWordsComponent(keyWordsInput.value);
        keyWordsList.append(newElement);
        KEY_WORDS.push(keyWordsInput.value);
        keyWordsInput.value = "";

        deleteKeyWord();

    })
}


export default function initKeyWords() {
    setKeyWords();
}