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
const verifyAccount = document.querySelector('.submit')
const verifyLogUser = document.querySelector('.verify_email')
const verifyLogPass = document.querySelector('.verify_password')
let users = [];
//change from one form to another
btnSignUpForm.addEventListener('click',()=>{
    formSignUp.style.display = "block";
    formLogin.style.display = "none";
})
btnLogInForm.addEventListener('click',()=>{
    formSignUp.style.display = "none";
    formLogin.style.display = "block";
})

//Click sign up -create user or reject if conditions are not respected
btn_sign_up.addEventListener("click", () => {
    const numberField = numberValidation();
    const fullnameField = fullnameValidation();
    const emailField = emailValidation();
    const passField = passwordValidation();
    const get_name = firstName.value
    const get_surname = lastName.value
    const get_mail = email.value
    const get_pass = pass.value
    const get_phone = phone_number.value

    if(numberField === true && emailField === true && fullnameField === true && passField === true){
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

//Log in account ,verrify existing account
verifyAccount.addEventListener("click", (e) => {
    for (let i = 0; i < users.length; i++) {
        const emailVerify = verifyLogUser.value
        const passVerify = verifyLogPass.value
        if (
            emailVerify === users[i].email &&
            passVerify === users[i].password
        ) {
            verifyLogUser.style.borderColor ="black"
            verifyLogPass.style.borderColor ="black"
            alert("Welcome Back!");
            verifyLogUser.value = ""
            verifyLogPass.value = ""
        }else {
            verifyLogUser.style.borderColor ="red"
            verifyLogPass.style.borderColor ="red"
            verifyLogUser.value = ""
            verifyLogPass.value = ""
            formSignUp.style.display = "block";
            formLogin.style.display = "none";

        }
    }
    if(users.length === 0){
        verifyLogUser.style.borderColor ="red"
        verifyLogPass.style.borderColor ="red"
        verifyLogUser.value = ""
        verifyLogPass.value = ""
    }
});
//email validation function
const emailValidation = () => {

    if (users.includes(email.value)) {
        alert("Already Registered!!!");
        return false
    }else return true;
}
//number validation function
const numberValidation = () => {
    const number = phone_number.value;

    if(number === "" || number.length !== 12
        || /[a-zA-Z]/.test(number) || number.startsWith('+373') === false
        || number.charCodeAt(4) < 54 || number.charCodeAt(4) > 55 )
    {
        phone_number.style.borderColor = "red"
        phone_number.value = "+373"
        return false;
    }
    else
    {
        phone_number.style.color = "black";
        return true
    }
}


//Function for name input
const fullnameValidation = () => {
    const name = firstName.value;
    const surname = lastName.value;
    if( name === ""){
        firstName.style.borderColor = "red"
        lastName.style.borderColor = "black"
        return false
    }else if(surname === ""){
        lastName.style.borderColor = "red"
        firstName.style.borderColor = "black"
        return false
    }else {
        firstName.style.borderColor = "black"
        lastName.style.borderColor = "black"
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

