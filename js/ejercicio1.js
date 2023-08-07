let edad = Number(prompt("Ingresa tu edad"));

if (isValidAge(edad)) {
    alert("Bienvenidx!");
} else {
    alert("Error! debes ser mayor de 18");
}

function isValidAge(number){
    return number >18; //no valido que sea menor a una edad razonable porque el ejercicio no lo especifica...
}