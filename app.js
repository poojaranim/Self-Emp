const sign_in_btn = document.querySelector("#sign-in-btn"); 
const sign_up_btn = document.querySelector("#sign-up-btn"); 
const container = document.querySelector(".container"); 
const togglePassword = document.querySelector('#togglePassword'); 
const password = document.querySelector('#password'); 

togglePassword.addEventListener('click', function (e) { 
  // toggle the type attribute 
 const type = password.getAttribute('type') === 'password' ? 'text' : 'password'; password.setAttribute('type', type); 
 
 // toggle the eye slash icon 
 this.classList.toggle('fa-eye-slash'); }); 

sign_up_btn.addEventListener("click", () => { container.classList.add("sign-up-mode"); }); sign_in_btn.addEventListener("click", () => { container.classList.remove("sign-up-mode"); });
