let answer = document.getElementById("answer")
let digct = document.getElementById("dig")
let opct = document.getElementById("op")
let dig = ''
let op = ''
answer.textContent = ''
function num(n) {
    if (opct.textContent == '=') {
        void(0)
    }
    else {
        dig += String(n)
        answer.textContent = dig
    }
}

let dig1 = 0
function add() {
    if (opct.textContent == '+') {
        void(0)
    }
    else {
        if (opct.textContent == '=') {
            dig1 = answer.textContent
        }
        else {
            dig1 = dig
        }
        dig = ''
        op = '+'
        digct.textContent = dig1
        opct.textContent = '+'
        answer.textContent = ''
    }
}

function subtract() {
    if (opct.textContent == '-') {
        void(0)
    }
    else {
        if (opct.textContent == '=') {
            dig1 = answer.textContent
        }
        else {
            dig1 = dig
        }
        dig = ''
        op = '-'
        digct.textContent = dig1
        opct.textContent = '-'
        answer.textContent = ''

    }

}

function clr() {
    dig1 = ''
    dig = ''
    op = ''
    digct.textContent = ''
    opct.textContent = ''
    answer.textContent = ''
}
let total = 0
function equals() {
    if (dig1 == 0 && opct.textContent !== '=')  {
        digct.textContent = dig
        opct.textContent = '='
        answer.textContent = dig
    }
    else {
        digct.textContent = dig1 + op + dig
        opct.textContent = '='
        dig = op + dig
        total = Number.parseInt(dig1, 10) + Number.parseInt(dig, 10)
        answer.textContent = total
        dig1 = total
        op = ''
    }
}