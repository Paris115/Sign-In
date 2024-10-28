/*Crear tres funciones, dos donde cambie el contenedor de uno tipo 
login a tipo register y viceversa. 
Otra donde cambie si detecta un usuario nuevo o uno registrado*/


//Funcion que cambia a registrar usuario si se pulsa el enlace de abajo si se esta en la pestaña de login
function registroUserEnlace() {
    document.getElementById("cabezaHeader").innerHTML = "Register"; //Cambio de login a register.
    document.getElementById("signIn").style.display = "none"; //Cambio de sign in a sign up.
    document.getElementById("signUp").style.display = "block";
    
    document.getElementById("enlaceReg").style.display = "none"; //Cambio de Don't have an account? Register a Already have an account? Login.
    document.getElementById("enlaceLog").style.display = "block";
    document.getElementById("confirmPassWord").style.display = "block"; //Añade un input de confirmar contraseña.
}

//Funcion que cambia a loguear el usuario si se pulsa el enlace de abajo si se esta en la pestaña de register.
function loginUserEnlace() {
    document.getElementById("cabezaHeader").innerHTML = "Login"; //Cambio de register a login.
    document.getElementById("signIn").style.display = "block";//Cambio de sign up a sign in.
    document.getElementById("signUp").style.display = "none";
    document.getElementById("enlaceLog").style.display = "none"; //Cambio de Already have an account? Login a Don't have an account? Register.
    document.getElementById("enlaceReg").style.display = "block";
    document.getElementById("confirmPassWord").style.display = "none"; //Elimina el input de confirmar contraseña.
}

//Usuarios registrados
let usuarioReg = {
    Sal: "NaCl",
    Azucar: "C12H22O11",
    Hola: "Adios"
};

/*
* @return { string} usuario
* @return { boolean}
*/

//Funcion que comprueba si existe el usuario.
function checkUser(usuario) {
    let usuarioRegArray = Object.keys(usuarioReg)
    return usuarioRegArray.includes(usuario)
}


// Funcion que verifica si el usuario esta registrado o no
// @param {string} usuario
function verifyUser(usuario) {
    if (checkUser(usuario)) {
        //Si existe, espero a que el usuario termine de escribir el usuario 
        //para verificarlo.
        console.log("El usuario existe")
        document.getElementById("cabezaHeader").innerHTML = "Login";
        document.getElementById("signIn").style.display = "block";
        document.getElementById("signUp").style.display = "none";
        document.getElementById("enlaceReg").style.display = "block";
        document.getElementById("enlaceLog").style.display = "none";
        document.getElementById("confirmPassWord").style.display = "none"
        
        
        //Si no existe, se cambia el html para registrar.
    } else {
        console.log("El usuario no existe")
        document.getElementById("cabezaHeader").innerHTML = "Register";
        document.getElementById("signIn").style.display = "none";
        document.getElementById("signUp").style.display = "block";
        document.getElementById("enlaceReg").style.display = "none";
        document.getElementById("enlaceLog").style.display = "block";
        document.getElementById("confirmPassWord").style.display = "block";
    }
    
}


//Funcion que recibe una contraseña y un nombre de usuario y verifica si la 
// contraseña es la que pertenece al usuario
//@param {string} contrasena
//@param {string} usuario

function checkPassword(contrasena, usuario) {
    if (contrasena == usuarioReg[usuario]) {
        //Si es verdadera, loguea
        console.log("La contraseña es correcta")
        console.log(contrasena)

    }
    //Si es incorrecta, muestra un mensaje de aviso
    else {
        document.getElementById("passWordMal").style.display = "block";
        console.log("La contraseña es incorrecta")
        console.log(contrasena)
    }
}

//Elimina el mensaje de aviso si se hace focus en el input de password
function correctPassword() {
    document.getElementById("passWordMal").style.display = "none";
}

//Comprueba la confirmacion de contraseñas
function checkConfirmPassword() {
    if (document.getElementById('passWord').value == document.getElementById('confirmPassWord').value) {
        return true
    }
    else {
        return false
    }
}
//Elimina el mensaje de aviso si se hace focus en el input de confirmar password
function correctConfirmPassword() {
    document.getElementById("confirmPassWordMal").style.display = "none";
}

//Crea un nuevo usuario
function newUser() {
    if (checkConfirmPassword() == true) {
        //crea un nuevo usuario con su contraseña si ambas son correctas
        let contrasenaNew = document.getElementById('passWord').value
        console.log(usuarioReg)
        usuarioReg.usuario = contrasenaNew;
    } else {
                //Si difieren, se muestra un mensaje de aviso
        document.getElementById("confirmPassWordMal").style.display = "block";
    }

}

console.log("Existe Sal?", checkUser("Sal"))
console.log("Existe Leche?", checkUser("Leche"))
console.log("Existe Hola?", checkUser("Hola"))
