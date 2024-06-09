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