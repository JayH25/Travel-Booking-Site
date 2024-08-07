let formContainer = document.querySelector(".formContainer");
let close = document.querySelector(".close");
let body = document.querySelector("body");
let LOGIN = document.querySelector(".LOGIN");
let SIGNUP = document.querySelector(".SIGNUP");
let signUp = document.querySelector(".sign-up");
let Login = document.querySelector(".log-in");
let forgotPass = document.querySelector(".forgotPass");
let forgot = document.querySelector(".forgot");
let signIn = document.querySelector(".sign-in");


signIn.addEventListener('click' , () => {
    console.log("grg");
    formContainer.showModal();
    // formContainer.style.display = "block";
    body.style.filter = "blur(4px)";
    body.style.overflow = "none";
    SIGNUP.style.display = "none";
    LOGIN.style.display = "block";
    forgotPass.style.display = "none";
});

close.addEventListener('click' , () => {
    formContainer.close();
    body.style.filter = "blur(0px)";
    console.log('closed');
})
signUp.addEventListener('click' , () => {
    SIGNUP.style.display = "block";
    console.log("displaying signup");
    LOGIN.style.display = "none";
    console.log("hided login page ...");
    // forgotPass.style.display = "none";
})
Login.addEventListener('click' , () => {
    SIGNUP.style.display = "none";
    LOGIN.style.display = "block";
    // forgotPass.style.display = "none";
})

forgot.addEventListener('click' , () => {
    forgotPass.style.display = "block";
    SIGNUP.style.display = "none";
    LOGIN.style.display = "none";
    
    console.log("displaying");
})
