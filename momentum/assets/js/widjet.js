const widgetsButtons = document.querySelectorAll('.checkbox');
const className = 'invisible';

export default function toggleInvisibleClass() {
    console.log(document.querySelector('.player'));
    for (let i = 0; i<widgetsButtons.length; i++){
        widgetsButtons[i].addEventListener('click', function(event){
            let obj = event.target;
            let id = obj.id;
            let widjet = document.getElementById(id+'1');
            widjet.style.transition = '300ms linear';
            widjet.classList.toggle(className)
        })
    }
}
