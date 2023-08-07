let totalIncome =0;
let survivalExpenses =.5;
let optionalExpenses = .3;
let savingsInvestments = .2;

const budget = {
    survivalExpenses,
    optionalExpenses,
    savingsInvestments
}


totalIncome = getIncome();
showCategories(budget, totalIncome);


function showCategories(budget, totalIncome){
    alert(`El presupuesto actual está compuesto por:
    ${budget.survivalExpenses * totalIncome} ARS para gastos necesarios,
    ${budget.optionalExpenses * totalIncome} ARS para gastos opcionales y 
    ${budget.savingsInvestments * totalIncome} ARS para ahorros/inversión`);
}

function getIncome(){
    let value = Number(prompt("Ingrese ingresos"));

    while(!isValidIncome(value)){
        alert("El salario tiene que ser una cifra entre 112.500 y 1.000.000 ARS");
        value = Number(prompt("Ingrese ingresos"));
    }
    return value;
}

function isValidIncome(value){
    return (value && value > 112500 && value < 1000000);
}




