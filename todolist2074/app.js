let data = JSON.parse(localStorage.getItem('todos'))


let addBtn = document.getElementById('addBtn'),
    addMsg = document.getElementById('addTitle'),
    addPrior = document.getElementById('addPrior')
    block = document.querySelector('.TODO')

let items = data ?? []


addBtn.addEventListener('click', addElement)

function addElement() {
    console.log('add')
    let item = {
        'todo': addMsg.value,
        'checked': false,
        'prior': addPrior.value
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
        <div class="item ${ item.checked ? 'checkedTOdo' : ''} ${ getColor(item.prior) }">
            <input type="checkbox" data-eid="${index}" ${ item.checked ? 'checked="checked"' : ''}" id="item_${index}">
            <label for="item_${index}">${item.todo}</label>
            ${ index > 0 ? "<img data-eid='" + index + "' class='item_icon' src='./arrow-up.png'>" : ''} 
        </div>
        `
        block.innerHTML += newBlock
    })
    let checkboxes = document.querySelectorAll('input[type=checkbox]')
    checkboxes.forEach(function (el, index) {
        el.addEventListener('change', checkboxHandler)
    })

    let upItemBtns = document.querySelectorAll('div.item img.item_icon')
    upItemBtns.forEach(function (el, index) {
        el.addEventListener('click', upItemPosition)
    })
}


function getColor(prior) {
    switch(prior) {
        case '1':
            return 'red'
            break
        case '2':
            return 'yellow'
            break
        default:
            return 'nocolor'
    }
}

function upItemPosition(event) {
    let el = event.currentTarget,
        fromIndex = el.dataset.eid,
        toIndex = fromIndex - 1,
        tmp_ar = items.splice(fromIndex, 1)[0]
        items.splice(toIndex, 0, tmp_ar)
        //console.log(tmp_ar)
        console.log(items)
        showElements()
}

function checkboxHandler(event) {
    let el = event.currentTarget,
        index = el.dataset.eid
    console.log(items[index])
    items[index].checked = !items[index].checked
    showElements()
}

if (items) showElements()

