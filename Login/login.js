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
    if (email.value.trim() == "" || password.value.trim() == "") {
        ShowAlert("error", "Something went wrong Please Enter all fields!")
        return
    }

    let getUserFromDB = JSON.parse(localStorage.getItem("UserData"));


    // console.log(JSON.parse(localStorage.getItem("UserData")));

    // ShowAlert("success", "Account created successfully!");
}

loginsubmit.addEventListener("click", submitHandler);