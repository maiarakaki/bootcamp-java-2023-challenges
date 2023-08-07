// inicializacion de variables
let costosFijos = 0;
let precioVenta = 0;
let costosVariables =0;

costosFijos = recibirValor("costo fijo");
precioVenta = recibirValor("precio de venta");
costosVariables = recibirValor("costo variable");

alert("El Punto de Equilibrio es: " + calcularPuntoDeEquilibrio(costosFijos, precioVenta, costosVariables));


function recibirValor(concepto){
    let valor;
    valor = Number(prompt(`Ingrese ${concepto}`));

    while(!validarValor(valor)) {
        alert(`El ${concepto} deber ser una cifra mayor a cero!`);
        valor = Number(prompt(`Ingrese ${concepto}`));
    }

    return valor;
}

function validarValor(numero){
    return (numero && numero > 0);
}


function calcularPuntoDeEquilibrio(costosFijos, precioVenta, costosVariables){
    return costosFijos / (precioVenta - costosVariables);
}