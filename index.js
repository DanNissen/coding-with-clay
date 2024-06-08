
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