const user = "admin";
const password = "1234";

let userInput = prompt("Ingresar usuario");
let userPassword = prompt("Ingresar contraseña");

if(validCredentials(userInput, userPassword)){
    alert("Bienvenidx!");
} else {
    alert("Error! usuario o contraseña incorrectos");
}

function validCredentials(username, pwd) {
    return username === user && pwd.toString === userPassword;
}