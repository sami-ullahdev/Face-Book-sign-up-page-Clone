console.log("Js Running");

let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let genderRadios = document.querySelectorAll('input[name="gender"]');
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitbtn = document.getElementById("submitbtn");

function ShowAlert(icon, text) {
    Swal.fire({
        icon: icon,
        text: text
    });
}


function submitHandler() {
    if (firstname.value.trim() == "") {
        ShowAlert("error", "Enter Your First Name")
        return
    }

    if (lastname.value.trim() == "") {
        ShowAlert("error", "Enter Your Last Name")
        return
    };

    if (day.value.trim() == "") {
        ShowAlert("error", "Enter Date")
        return
    };

    if (month.value.trim() == "") {
        ShowAlert("error", "Enter Month")
        return
    };

    if (year.value.trim() == "") {
        ShowAlert("error", "Enter Year")
        return
    };

    let selectedGender = "";

    for (let radio of genderRadios) {
        if (radio.checked) {
            selectedGender = radio.value;
            break;
        }
    };

    if (selectedGender === "") {
        ShowAlert("error", "Please select a gender");
        return;
    };

    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


    if (!emailRegex.test(email.value.trim())) {
        ShowAlert("error", "Please Enter A Valid Email")
        return
    };

    if (password.value.trim() == "") {
        ShowAlert("error", "Please Enter A Password")
        return
    };

    if (password.value.trim().length < 8) {
        ShowAlert("error", "Please Enter At least 8 character Password")
        return
    };

    // ShowAlert("success", "Congratulations!");

    let userArry = [];

    let userData = {
        firstname: firstname.value.trim(),
        lastname: lastname.value.trim(),
        dob: {
            day: day.value,
            month: month.value,
            year: year.value
        },
        gender: selectedGender,
        email: email.value.trim(),
        password: password.value
    };

    let userDataString = JSON.stringify(userData);
    if (userArry = null) {
        userData = userArry;
    } else{
        console.log(JSON.parse(localStorage.getItem("UserData")));
    }

    localStorage.setItem("UserData", userDataString);

    ShowAlert("success", "Account created successfully!");
}
submitbtn.addEventListener("click", submitHandler);