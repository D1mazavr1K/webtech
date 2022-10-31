let data = JSON.parse(localStorage.getItem('todoItems'))
let items = data ?? []

let addBtn = document.getElementById('addBtn'),
    addMsg = document.getElementById('addTitle'),
    block = document.querySelector('.TODO')

addBtn.addEventListener('click', addElement)

function addElement() {
    let newItem = {
        'todo': addMsg.value,
        'checked': false
    }
    items.push(newItem)
    showItems()
    localStorage.setItem('todoItems', JSON.stringify(items))
}

function showItems() {
    block.innerHTML = ''
    items.forEach(function (item, index) {
        let _block = `
        <div>
            <input type="checkbox" id='item_${index}'>
            <label class='"${item.checked ? 'checkedTodo' : ''}"' for='item_${index}'>${item.todo}</label>
        </div>
        `
        block.innerHTML += _block
    })
    let chckbxs = document.querySelectorAll('input[type=checkbox]')
    chckbxs.forEach(function (el, index) {
        el.addEventListener('change', checkboxHandler)
    })
}

function checkboxHandler(event) {
    console.log(index)
    if (event.currentTarget.checked) {
        document.querySelector('label[for="' + event.currentTarget.id + '"]').classList.add('checkedTodo')
    } else {
        document.querySelector('label[for="' + event.currentTarget.id + '"]').classList.remove('checkedTodo')
    }
}

if (items) showItems()
