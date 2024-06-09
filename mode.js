let mode = "SignUp";

let sign = document.querySelector(".signUp")
let log = document.querySelector(".logIn")


log.classList.add("display")

//display class is actually display:none

function modeSignUp() {
    if (mode === "LogIn") {
        mode = "SignUp";
        log.classList.add("display")
        sign.classList.remove("display")


    }
}

function modeLogIn() {
    if (mode === "SignUp") {
        mode = "LogIn";
        sign.classList.add("display")
        log.classList.remove("display")


    }
}


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let inputValue = [document.getElementById('name').value, document.getElementById('age').value, document.getElementById('email').value];

    localStorage.setItem('formData', inputValue);
    console.log(inputValue);

    window.location.href = "next.html";

});