var login_start = document.querySelector(".login-start");
var sign_in_btn = document.querySelector(".login-btn");
var login_box = document.querySelector(".login-box");
var register_start = document.querySelector(".register-start");
var register_btn = document.querySelector(".register-btn");
var register_box = document.querySelector(".register-box");
var reset_link = document.querySelector(".forgot");
var reset_btn = document.querySelector(".reset-submit");
var reset_box = document.querySelector(".reset-box");
var goBack_link = document.querySelector(".go-back");

register_btn.addEventListener("click", () => {
  register_box.classList.toggle("hidden");
  register_start.classList.toggle("hidden");
  login_box.classList.toggle("hidden");
  login_start.classList.toggle("hidden");

  if (!reset_box.classList.contains("hidden")) {
    reset_box.classList.toggle("hidden");
    if (!login_box.classList.contains("hidden")) {
      login_box.classList.toggle("hidden");
    }
  }
});

sign_in_btn.addEventListener("click", () => {
  register_box.classList.toggle("hidden");
  register_start.classList.toggle("hidden");
  login_box.classList.toggle("hidden");
  login_start.classList.toggle("hidden");
});

reset_link.addEventListener("click", () => {
  reset_box.classList.toggle("hidden");
  login_box.classList.toggle("hidden");
});

reset_btn.addEventListener("click", () => {
  login_box.classList.toggle("hidden");
  reset_box.classList.toggle("hidden");
});

goBack_link.addEventListener("click", () => {
  reset_box.classList.toggle("hidden");
  login_box.classList.toggle("hidden");
});
