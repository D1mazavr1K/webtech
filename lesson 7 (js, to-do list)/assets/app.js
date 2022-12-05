let data = JSON.parse(localStorage.getItem('todos'))


let addBtn = document.getElementById('addBtn'),
    addMsg = document.getElementById('addTitle'),
    block = document.querySelector('.TODO')

const items = data ?? []


addBtn.addEventListener('click', addElement)

function addElement() {
    console.log('add')
    let item = {
        'todo': addMsg.value,
        'checked': false
    }
    items.push(item)

    localStorage.setItem('todos', JSON.stringify(items))

    showElements()
    console.log(items)
}

function showElements() {
    block.innerHTML = ''
    items.forEach(function (item, index) {
        let newBlock = `
        <div class="item ${ item.checked ? 'checkedTodo' : ''}">
            <input type="checkbox" data-eid="${index}" ${ item.checked ? 'checked="checked"' : ''}" id="item_${index}">
            <label for="item_${index}">${item.todo}</label>
            ${ index > 0 ? '<img class="item__icon" data-eid="' + index + '" src="./assets/arrow-up.png">' : ''}
        </div>
        `
        block.innerHTML += newBlock
    })
    let checkboxes = document.querySelectorAll('input[type=checkbox]')
    checkboxes.forEach(function (el, index) {
        el.addEventListener('change', checkboxHandler)
    })
    let upItemsBtn = document.querySelectorAll('img.item__icon')
    upItemsBtn.forEach(function (el, index) {
        el.addEventListener('click', upItemPosition)
    })
}

function upItemPosition(event) {
    let el = event.currentTarget,
        fromIndex = parseInt(el.dataset.eid),
        toIndex = fromIndex - 1,
        tmp_items = items.splice(fromIndex, 1)[0]
    items.splice(toIndex, 0, tmp_items)
    showElements()
}

function checkboxHandler(event) {
    let el = event.currentTarget,
        index = el.dataset.eid
    items[index].checked = !items[index].checked
    console.log(items)
    showElements()
}

if (items) showElements()
