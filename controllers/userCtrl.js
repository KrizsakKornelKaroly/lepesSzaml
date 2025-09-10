const passwdRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


async function registration() {
    /*await fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => console.log(data))*/

    let nameField = document.querySelector('#nameField')
    let emailField = document.querySelector('#emailField')
    let passwdField = document.querySelector('#passwdField')
    let confirmPasswdField = document.querySelector('#confirmpasswdField')

    if (nameField.value == "" || emailField.value == "" || passwdField.value == "" || confirmPasswdField.value == "") {
        regAlerts("Nem adtál meg minden adatot!", 'danger')
        return;
    }

    if (passwdField.value != confirmPasswdField.value) {
        regAlerts("A megadott jelszavak nem egyeznek!", 'danger')
        return;
    }

    if(!passwdRegExp.test(passwdField.value)){
        regAlerts("A megadott jelszó nem elég biztonságos!", 'danger')
        return;
    }
    if(!emailRegExp.test(emailField.value)){
        regAlerts("Nem megfelelő email cím!", 'danger')
        return;
    }

    try {
        const res = await fetch('http://localhost:3000/users', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body:
                JSON.stringify(
                    {
                        name: nameField.value,
                        email: emailField.value,
                        password: passwdField.value
                    }
                )
        });
        let alertStatus = res.status == 200 ? 'success' : 'danger'; 
        const data = await res.json();
        regAlerts(`${data.msg}`, alertStatus);
        if(res.status == 200){
            nameField.value = "";
            emailField.value ="";
            passwdField.value ="";
            confirmPasswdField.value = "";
        }

    } catch (err) {
        console.log("Hiba történt: ", err);
    }


}

function login() {

}

function logout() {

}

function getProfile() {

}

function updateProfile() {

}

function updatePassword() {

}