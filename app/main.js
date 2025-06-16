const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

item.addEventListener('dragstart', dragstart) 

item.addEventListener('dragend', dragend)

function dragstart(event) {
    item.classList.add('hold')
   setTimeout(() => {event.target.classList.add('hide')}, 0) 
}

function dragend(event) {
    item.classList.remove('hold')
    event.target.classList.remove('hide')
}

function dragenter(event) {
    event.target.classList.add('hovereed')
}

function dragover(event) {
    event.preventDefault()
}

function dragleave(event) {
    event.target.classList.remove('hovereed')
}

function dragdrop(event) {
    event.target.append(item)
    event.target.classList.remove('hovereed')
}