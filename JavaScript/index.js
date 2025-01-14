let countEl = document.getElementById('count')
let count = 0

function add() {
    if ((count + 1) < 10) {
        count = count + 1
        countEl.innerText = count
    }
    else {
        count = 10
        countEl.innerText = 'Max Capacity: 10'
    }
}

function subtract()  {
    if (count > 0) {
        count = count - 1
        countEl.innerText = count
    }
    }

let str = 'Previous entries: '
let saveCount = document.getElementById('saveCount')

function save() {
    str = str + String(count) + ' - '
    saveCount.innerText = str
    countEl.innerText = 0
    count = 0
}

