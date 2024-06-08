
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