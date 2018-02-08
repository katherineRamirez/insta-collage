var logIn = document.querySelector('.logIn');

function getUser() {
    var arrayUsers = [];
    for (let i = 0; i < users.length; i++) {
        arrayUsers.push(users[i].user);
    }
    return arrayUsers;
}

function getPassword() {
    var arrayPassword = [];
    for (let i = 0; i < users.length; i++) {
        arrayPassword.push(users[i].password);
    }
    return arrayPassword;
}

logIn.addEventListener('click', function () {
    var inputUser = document.querySelector('.input-user').value;
    var inputPassword = document.querySelector('.input-password').value;
    var arrayUserData = getUser();
    var arrayPasswordData = getPassword();
    var validuser;
    var validpasword;

    for (let i = 0; i < arrayUserData.length; i++) {
        if (arrayUserData[i] === inputUser) {
            validuser = true;
            console.log(validuser);
        }
    }
    for (let j = 0; j < arrayPasswordData.length; j++) {
        if (arrayPasswordData[j] === inputPassword) {
            validpasword = true;
            console.log(validpasword);
        }

    }
    if (validuser === true && validpasword === true) {
        location.href = 'index2.html';
    } else {
        console.log('No esta registrado');
        if (inputUser.length > 0 && inputPassword.length > 0) {
            if (inputPassword !== '123456' && inputPassword.length >= 6) {
                alert('Cumple parametros de busqueda');
            } else {
                alert('No cumple parametros de busqueda.');
            }
        } else {
            alert('No se permiten campos vacios.');
        }
    }


})