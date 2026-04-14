const elForm = document.querySelector(".form");
const elEmail = document.querySelector("#email");
const elPassword = document.querySelector("#password");
const elMessage = document.querySelector(".message1");
const elMessage2 = document.querySelector(".message2");
const regexEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
elForm.addEventListener("input", (e) => {
  e.preventDefault();
  const value = elPassword.value.trim();
  if (value.length === 0) {
    elMessage2.innerHTML = "";
  } else if (value.length < 8) {
    elMessage2.innerHTML = "Password is too short";
  } else if (value.length > 16) {
    elMessage2.innerHTML = "Password is too long";
  } else if (!regexPassword.test(value)) {
    elMessage2.innerHTML = "Password is not valid";
  } else if (!/[!@#$%^&]/.test(value)) {
    elMessage2.innerHTML = "Weak password";
  } else {
    elMessage2.innerHTML = "Strong password";
  }

  const value2 = elEmail.value.trim();
  if (regexEmail.test(value2)) {
    elMessage.innerHTML = "Email is valid";
  } else {
    elMessage.innerHTML = "Email is not valid";
  }
});
