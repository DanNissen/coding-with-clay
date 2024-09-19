const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
    if (err) throw err;
    console.log('folder created')
})

let foobar = "blah"

const test = () => {
    foobar = "baz"
    console.log(foobar)
}

console.log(foobar)
test()
console.log(foobar)

// Arrow function practice

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Are you not clay or dan",
    () => alert("please leave this site"),
    () => alert("welcome")
);

"how are you today?"