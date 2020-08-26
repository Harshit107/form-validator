const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
// const form = document.getElementById('form')

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email, "Email is required");
    }
    else if(!validateEmail(email.value)){
        showError(email,"Enter valid Email")
    }
    else {
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password, "password is required");
    } else {
        showSuccess(password);
    }
    if (password2.value === '') {
        showError(password2, "Enter valid input");
    } else {
        showSuccess(password2);
    }

})