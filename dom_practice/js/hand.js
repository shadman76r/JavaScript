document.getElementById('btn-update-title').addEventListener('click', function () {
    // console.log('btn-clicked')
    // gating the title
    const title_text = document.getElementById('text');
    title_text.innerText = 'updated page title text'

})

document.getElementById('btn-login') / addEventListener('click', function () {
    const userInfoPera = document.getElementById('user')
    userInfoPera.innerText = 'fine then you are in the folder'
})

// to set the value and update the value

// set event listener
document.getElementById('btn-update').addEventListener('click', function () {
    // get the text form the input field

    const nameInput = document.getElementById('input_name')
    const name = nameInput.value;

    // set the name

    const nameP = document.getElementById('name');
    nameP.innerText = name;


})