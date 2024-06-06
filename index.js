console.log("foo")

const foo = document.getElementById("foo")

const changeToRed = () => {foo.style["backgroundColor"] = "red"}
const toggleVisible = () => {
    if(foo.hidden){
        foo.hidden = false
    } else {
        foo.hidden = true
    }   
}