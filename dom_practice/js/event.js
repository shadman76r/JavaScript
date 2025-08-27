console.log('external file');
// option 2 to handel event
function make() {
    document.body.style.backgroundColor = 'yellow'
}
function red() {
    document.body.style.backgroundColor = 'red'
}

// option 3
// chamel case
const btnMakeBlue = document.getElementById('btn-make-blue')
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeblue() {
    document.body.style.backgroundColor = 'blue'
}

// option 3 different kind

const btnMakePurple = document.getElementById('btn-make-purple');

//   i can write just function name if i want to use it

btnMakePurple.onclick = purple;

function purple() {
    document.body.style.backgroundColor = 'purple'
}