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

function submitHandler() {
    if (email.value.trim() == "") {
        ShowAlert("error", "Pleaase Enter Your E-mail")
        return
    }
    if(password.value.trim() == "") {
        ShowAlert("error", "Pleaase Enter Your Passpord")
        return
    }

    console.log(JSON.parse(localStorage.getItem("UserData")));

    // ShowAlert("success", "Account created successfully!");
}

loginsubmit.addEventListener("click", submitHandler);