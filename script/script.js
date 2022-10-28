const email = document.getElementById("email");
const btn_sign_up = document.getElementById("btn-sign-up");
let users = [];
btn_sign_up.addEventListener("click", () => {
  if (users.includes(email.value)) {
    alert("Already Registered!!!");
  } else if (
    email.value.includes("@gmail.com") ||
    email.value.match("@yahoo.com") ||
    email.value.match("@icloud.com")
  ) {
    users.push(email.value);
  } else {
    alert("Not Enough Rights to Register here");
  }
});
