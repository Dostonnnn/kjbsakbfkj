const elForm = document.querySelector(".form");
const elEmail = document.querySelector("#email");
const elPassword = document.querySelector("#password");
const elMessage = document.querySelector(".message1");
const elMessage2 = document.querySelector(".message2");

const regexEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const regexWeak = /^(?=[a-zA-Z]*$).{8,16}$/;
const regexMedium = /^(?=.*[a-zA-Z])(?=.*\d)(?!.*[^a-zA-Z0-9]).{8,16}$/;
const regexStrong =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/;

elForm.addEventListener("input", (e) => {
  e.preventDefault();

  const value = elPassword.value.trim();

  if (value.length === 0) {
    elMessage2.innerHTML = "";
  } else if (value.length < 8) {
    elMessage2.innerHTML = "Password is too short";
  } else if (value.length > 16) {
    elMessage2.innerHTML = "Password is too long";
  } else if (regexStrong.test(value)) {
    elMessage2.innerHTML = "Strong password";
  } else if (regexMedium.test(value)) {
    elMessage2.innerHTML = "Medium password";
  } else if (regexWeak.test(value)) {
    elMessage2.innerHTML = "Weak password";
  } else {
    elMessage2.innerHTML = "Password is not valid";
  }

  // --- Email ---
  const value2 = elEmail.value.trim();
  if (value2.length === 0) {
    elMessage.innerHTML = "";
  } else if (regexEmail.test(value2)) {
    elMessage.innerHTML = "Email is valid ";
  } else {
    elMessage.innerHTML = "Email is not valid ";
  }
});
