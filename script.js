const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
// const form = document.getElementById('form')

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(String(email.value).toLowerCase()))
        showSuccess(email)
    else
        showError(email,"Invalid Email-ID")
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small') //select any element
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function checkValue(inputArray) {
    inputArray.forEach(input => {
        if(input.value.trim() === '')
            showError(input,`${getID(input)} is Required`)
        else
            showSuccess(input)
    });
}

function getID(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(inputArray,min,max) {
    inputArray.forEach(input => {
        const l = input.value.length;
        console.log(l)
        if(l <min || l > max)
            showError(input,`${getID(input)} must be between ${min} to ${max} digit`)
    })
}

checkPassword = (p1, p2) => p1 === p2


form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkValue([username,email,password,password2]);
    checkLength([username],5,15)
    validateEmail(email)
    if ( !checkPassword(password.value,password2.value) ) {
        showError(password, "Password must be match")
        showError(password2,"Password must be match")
    }
        
})