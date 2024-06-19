let foobar = "blah"

const test = () => {
    foobar = "baz"
    console.log(foobar)
}

console.log(foobar)
test()
console.log(foobar)