let data = JSON.parse(localStorage.getItem('todos'))

let addBtn = document.getElementById('addBtn'),
    addMsg = document.getElementById('addTitle'),
    addPrior = document.getElementById('addPrior')
    block = document.querySelector('.TODO')


let items = data ?? []

addBtn.addEventListener('click', addElement)

function addElement() {
    console.log('hello')
    let newItem = {
        'todo': addMsg.value,
        'checked': false,
        'priority': addPrior.value
    }
    items.push(newItem)
    localStorage.setItem('todos', JSON.stringify(items))
    console.log(items)
    showItems()
}


function showItems() {
    block.innerHTML = ''
    items.forEach(function (item, index) {
        let newBlock = `
        <div class='item ${ getColorForPrior(item.priority) } ${ item.checked ? 'checkedTODO' : ''}'>
            <input type="checkbox" data-eid='${index}' id='item_${index}' ${ item.checked ? 'checked' : ''}>
            <label for='item_${index}'>${item.todo}</label>
            ${ index > 0 ? '<img class="item_icon" data-eid=' + index + ' src="arrow-up.png">' : '' } 
        </div>
        `
        block.innerHTML += newBlock
    })

    let checkboxes = document.querySelectorAll('input[type=checkbox]')
    checkboxes.forEach(function (el, index) {
        el.addEventListener('change', checkboxHanlder)
    })

    let upIndexBtn = document.querySelectorAll('.item img.item_icon')
    upIndexBtn.forEach(function (el, index) {
        el.addEventListener('click', upItemsElement)
    })

}

function getColorForPrior(prior) {
    let res = 'item_'
    console.log(prior)
    switch (prior) {
        case '1':
            return res + 'blue'
            break
        case '2':
            return res + 'red'
        break
        default:
            return res + 'idk'
    }
}

function upItemsElement(event) {
    let el = event.currentTarget,
        fromIndex = parseInt(el.dataset.eid),
        toIndex = fromIndex - 1,
        tmpar = items.splice(fromIndex, 1)[0]

    console.log(fromIndex)
    console.log(toIndex)
    console.log(tmpar)

    items.splice(toIndex, 0, tmpar)
    console.log(items)
    showItems()
}

function checkboxHanlder(event) {
    let el = event.currentTarget,
        eid = el.dataset.eid
    items[eid].checked = !items[eid].checked
    console.log(items)
    showItems()
}

if (items) showItems()