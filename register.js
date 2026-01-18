console.log("Js Running");

let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let genders = document.getElementById("genders");
let email = document.getElementById("email");
let submitbtn = document.getElementById("submitbtn");

function Alert(icon, title, text) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
    });
}


function submitHandler() {
    if (firstname.value.trim() == "") {
        Alert("error", "", "Enter Your First Name")
        return
    }

    if (lastname.value.trim() == "") {
        Alert("error", "", "Enter Your Last Name")
        return
    }

    if (day.value.trim() == "") {
        Alert("error", "", "Wnter Date")
        return
    }
}

submitbtn.addEventListener("click", submitHandler);