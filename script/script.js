const email = document.getElementById("email");
const btn_sign_up = document.querySelector("#btn-sign-up");
const phone_number = document.querySelector('#phone');


let users = [];
btn_sign_up.addEventListener("click", () => {
  if (users.includes(email.value)) {
    alert("Already Registered!!!");
  } else if (
    email.value.includes("@gmail.com") ||
    email.value.match("@yahoo.com") ||
    email.value.match("@icloud.com")
  ) {
    users.push(email.value);}
  // } else {
  //   alert("Not Enough Rights to Register here");
  // }
});

const numberValidation = () => {
    const number = phone_number.value;

    if(number === "" || number.length !== 12
        || /[a-zA-Z]/.test(number) || number.startsWith('+373') === false
        || number.charCodeAt(4) < 54 || number.charCodeAt(4) > 55 )
    {
        phone_number.style.borderColor = "red"
        phone_number.style.color = "red"
        phone_number.value = "Invalid number!"
        return false;
    }
    else
    {
        phone_number.style.color = "black";
        return true
    }
}

