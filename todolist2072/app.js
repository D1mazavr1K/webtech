let data = JSON.parse(localStorage.getItem('todos2072'))

let addBtn = document.getElementById('addBtn'),
    addMsg = document.getElementById('addTitle'),
    addPrior = document.getElementById('addPrior'),
    block = document.querySelector('.TODO'),
    items = data ?? []

addBtn.addEventListener('click', addElement)

function addElement() {
    let item = {
        'todo': addMsg.value,
        'checked': false,
        'prior': addPrior.value
    }
    items.push(item)
    console.log(items)
    localStorage.setItem('todos2072', JSON.stringify(items))
    showItems()
}

function showItems(){
    block.innerHTML = ''
    items.forEach(function (item, index) {
        let newBlock = `
        <div class="item ${item.checked ? "checkedTodo" : ""} ${ getColorClass(item.prior) }">
            <input type="checkbox" id='item_${index}' data-eid="${index}"  ${ item.checked ? 'checked' : ''}>
            <label for="item_${index}">${item.todo}</label>
            ${ index > 0 ? '<img class="item_icon" data-eid="' + index + '" src="arrow-up.png">' : ''}
        </div>
        `
        block.innerHTML += newBlock
    })

    let checkboxes = document.querySelectorAll('input[type=checkbox]')
    checkboxes.forEach(function (el, index) {
        el.addEventListener('change', checkboxHandler)
    })

    let upItemBtn = document.querySelectorAll('div.item img.item_icon')
    upItemBtn.forEach(function (el, index) {
        el.addEventListener('click', upItemPosition)
    })
}

function getColorClass(prior) {
    switch (prior) {
        case '1':
            return 'optblue'
        break
        case '2':
            return 'optred'
        break
        default:
            return 'idk'
    }
}

function upItemPosition(event) {
    let el = event.currentTarget,
        fromIndex = parseInt(el.dataset.eid),
        toIndex = fromIndex - 1,
        tmp_items = items.splice(fromIndex, 1)[0]
    items.splice(toIndex, 0, tmp_items)
    showItems()
}

function checkboxHandler(event) {
    let el = event.currentTarget,
        index = parseInt(el.dataset.eid)
    items[index].checked = !items[index].checked
    console.log(items)
    localStorage.setItem('todos2072', JSON.stringify(items))
    showItems()
}

if (items) showItems()


/*
1) Воспроизвести
2) Визуально переоформить
3) Перемещение айтемов вниз
4) Удаление айтема из списка
5) Удаление всех отмеченных айтемов
 */