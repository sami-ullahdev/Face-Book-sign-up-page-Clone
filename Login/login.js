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
        return ShowAlert("error", "Please Enter The E-mail")
        // return ShowAlert("error", "Please Enter The all field")
    }

    if (password.value.trim() == "") {
        return ShowAlert("error", "Please Enter The Password")
    }

    let getUserFromDB = JSON.parse(localStorage.getItem("userData"));
    // console.log(getUserFromDB);
    let isAccountExist = false;
    // console.log(isAccountExist);

    for (let i = 0; i < getUserFromDB.lenth; i++) {
        let user = getUserFromDB[i]

        if (user?.email === email.value) {
            isAccountExist = true;
            if (user?.password === password.value) {
                localStorage.setItem("userData", JSON.stringify(user));
                // ShowAlert("error", "Login Sucessful");
                alert("LOgin sucessful")
                window.location.href = "../Dashboard/";
            }
            else {
                ShowAlert("error", "SomeThing is Worng")
            }
            break;
        }
    };
    

    if (isAccountExist === false) {
        ShowAlert("error", "User Does't Exists")
    }

    // console.log(JSON.parse(localStorage.getItem("userData")));

    // ShowAlert("success", "Account created successfully!");
}

loginsubmit.addEventListener("click", submitHandler);