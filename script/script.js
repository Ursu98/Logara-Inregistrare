const email = document.getElementById("email");
const btn_sign_up = document.querySelector("#btn-sign-up");
const phone_number = document.querySelector('#phone');
const btnSignUpForm = document.querySelector('#sign-up');
const btnLogInForm = document.querySelector('#login');
const formSignUp = document.querySelector('.sign-up')
const formLogin = document.querySelector('.log-in')
const firstName = document.querySelector(`.nameUser`)
const lastName = document.querySelector(`.surnameUser`)
const pass = document.querySelector('#password')
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
    const passField = passwordValidation();
    const get_name = firstName.value
    const get_surname = lastName.value
    const get_mail = email.value
    const get_pass = pass.value
    const get_phone = phone_number.value
    if(numberField === true && emailField === true && passField === true){
        users.push({
            name: get_name,
            surname: get_surname,
            email: get_mail,
            password: get_pass
        })
        alert("Congratulation!")
        console.log(users)
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        pass.value = "";
        phone_number.value = "";
        console.log(users)
    }

});
console.log(users)

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
const passwordValidation = () => {
    const password = pass.value;
    if (password.length < 8) {
        alert("Error: Password must be at least 8 characters");
        return false;
    } else if (password.search(/[a-z]/) < 0) {
        alert("Error:Password must contain at least one lowercase letter");
        return false;
    } else if (password.search(/[A-Z]/) < 0) {
        alert("Error:Password must contain at least one upercase letter");
        return false;
    } else if (password.search(/[0-9]/) < 0) {
        alert("Error: Password must contain at least one number");
        return false;
    }
    return true;
}
