console.log("Js Running");

let email = document.getElementById("email")
let password = document.getElementById("password")
let passwordeye = document.getElementById("password-eye")
let loginsubmit = document.getElementById("login-btn")

function ShowAlert(icon, text) {
    Swal.fire({
        icon: icon,
        text: text
    });
}