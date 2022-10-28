const email = document.getElementById("email");
const btn_sign_up = document.querySelector("#btn-sign-up");
const phone_number = document.querySelector('#phone');
const btnSignUpForm = document.querySelector('#sign-up');
const btnLogInForm = document.querySelector('#login');
const formSignUp = document.querySelector('.sign-up')
const formLogin = document.querySelector('.log-in')
let users = [];

btnSignUpForm.addEventListener('click',()=>{
    formSignUp.style.display = "block";
    formLogin.style.display = "none";
})
btnLogInForm.addEventListener('click',()=>{
    formSignUp.style.display = "none";
    formLogin.style.display = "block";
})


btn_sign_up.addEventListener("click", () => {
   const numberField = numberValidation();
    const emailField = emailValidation();

    if(numberField === true && emailField === true){
        alert("Congratulation!")
    }

});

const emailValidation = () => {
    if (users.includes(email.value)) {
        alert("Already Registered!!!");
        return false
    }else return true;
}

const numberValidation = () => {
    const number = phone_number.value;

    if(number === "" || number.length !== 12
        || /[a-zA-Z]/.test(number) || number.startsWith('+373') === false
        || number.charCodeAt(4) < 54 || number.charCodeAt(4) > 55 )
    {
        phone_number.style.borderColor = "red"
        phone_number.style.color = "red"
        phone_number.value = "+373"
        return false;
    }
    else
    {
        phone_number.style.color = "black";
        return true
    }
}

