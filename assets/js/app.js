//Validación de usuario
var inputUser = document.querySelector('.input-user');
var inputPassword = document.querySelector('.input-password');
var logIn = document.querySelector('.logIn');

logIn.addEventListener('click', function() {
    var user = inputUser.value;
    var password = inputPassword.value;
    var enlace = document.createElement('a');
    enlace.setAttribute('href', 'index2.html');
    if (user.length > 0 && password.length >0) {
        if (password !== '123456' && password.length >= 6) {
            location.href = 'index2.html';
        }else{
            console.log('acceso no permitido');
        }
    }else{
        console.log('acceso no permitido');
    }
})
//Fin validación usuario