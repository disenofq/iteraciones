let num1;
let num2;
let operador;
let resultado = 0;
let iteracion="si";


while (iteracion.toLowerCase() == "si"){
    num1 = Number(prompt("ingrese el primer número de la operación"));
    num2 = Number(prompt("ingrese el segundo número de la operación"));
    operador = prompt("Ingrese la operación a realizar");
switch(operador){

    case "+": resultado = num1 + num2;
        alert("El resultado de tu operación es: " + resultado)
     break;
    case"-": resultado = num1 - num2;
        alert("El resultado de tu operación es: " + resultado)
     break;
    case"*":  resultado = num1 * num2;
        alert("El resultado de tu operación es: " + resultado)
     break;
    case"/":  resultado = num1 / num2;
        alert("El resultado de tu operación es: " + resultado)
        break;

    default: alert("El operador ingresado no es correcto");

    break;
}

iteracion= prompt("Desea realizar otra operación? (si/no)");
}