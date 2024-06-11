
const foo = document.getElementById("foo")

console.log(foo)

const toggleColor = () => {
    if (foo.style["backgroundColor"] === "red") {
        foo.style["backgroundColor"] = "blueviolet"
    } else {
        foo.style["backgroundColor"] = "red"
    }
}

const toggleVisible = () => { foo.hidden = !foo.hidden }

//Background Color Picker

document.getElementById('blue').addEventListener('click', partyBlue)
document.getElementById('green').addEventListener('click', partyGreen)
document.getElementById('yellow').addEventListener('click', partyYellow)
document.getElementById('purple').addEventListener('click', partyPurple)


function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'blue'
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'green'
}

function partyYellow() {
    document.querySelector('body').style.backgroundColor = 'yellow'
}

function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'purple'
}

//Calculator

let total = 0

document.getElementById('pumpkin').addEventListener('click', makeZero)
document.getElementById('zebra').addEventListener('click', addNine)
document.getElementById('dominosPizza').addEventListener('click', addThree)
document.getElementById('cantThinkOfAnything').addEventListener('click', subTwo)
document.getElementById('clays').addEventListener('click', birthday)


function makeZero() {
    total = 0
    document.getElementById('placeToPutResult').innerHTML = total
}

function addNine() {
    total = total + 9
    document.getElementById('placeToPutResult').innerHTML = total
}

function addThree() {
    total = total + 3
    document.getElementById('placeToPutResult').innerHTML = total

}

function subTwo() {
    total = total - 2
    document.getElementById('placeToPutResult').innerHTML = total
}

function birthday() {
    total = total + 21
    document.getElementById('placeToPutResult').innerHTML = total
}