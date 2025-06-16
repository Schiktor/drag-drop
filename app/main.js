const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart) 

item.addEventListener('dragend', dragend)

function dragstart() {
    item.classList.add('hide')
}

function dragend() {
    item.classList.remove('hide')
}