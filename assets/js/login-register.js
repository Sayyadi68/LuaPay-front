var loginbtn = document.getElementById("login_btn")
var Login = document.getElementById("Login")
var Register = document.getElementById("Register")
var regbtn = document.getElementById("reg-btn")

regbtn.addEventListener("click",function() {
    Login.classList.add("d-none")
    Register.classList.remove("d-none")
    regbtn.classList.remove("opacity-50")
    loginbtn.classList.add("opacity-50")
})

loginbtn.addEventListener("click",function() {
    Register.classList.add("d-none")
    Login.classList.remove("d-none")
    regbtn.classList.add("opacity-50")
    loginbtn.classList.remove("opacity-50")
})