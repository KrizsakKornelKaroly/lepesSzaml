const passwdRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



//Bővíteni bootstrap alertekkel + timerrel eltűnik (3sec)

async function registration() {
    /*await fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => console.log(data))*/

    let nameField = document.querySelector('#nameField')
    let emailField = document.querySelector('#emailField')
    let passwdField = document.querySelector('#passwdField')
    let confirmPasswdField = document.querySelector('#confirmpasswdField')

    if (nameField.value == "" || emailField.value == "" || passwdField.value == "" || confirmPasswdField.value == "") {
        alert("Nem adtál meg minden adatot!")
        return;
    }

    if (passwdField.value != confirmPasswdField.value) {
        alert("A megadott jelszavak nem egyeznek!")
        return;
    }

    if(!passwdRegExp.test(passwdField.value)){
        alert("A megadott jelszó nem elég biztonságos!")
        return;
    }
    if(!emailRegExp.test(emailField.value)){
        alert("Nem megfelelő email cím!")
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
        //console.log("Status: ", res.status) 
        const data = await res.json();
        alert(data.msg)
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