console.log("Ingrese el número 1");
let numero1 = prompt("Ingrese el número 1:");
let numeroEntero1 = parseInt(numero1);
console.log(`Numero 1 : ${numeroEntero1}`);
console.log("Ingrese la operación (+, -, *, /,^, %)");
let operacion = prompt("Ingrese la operación (+, -, *, /,^, %)");
console.log(` ${operacion}`);
console.log("Ingrese el número 2");
let numero2 = prompt("Ingrese el número 2:");
let numeroEntero2 = parseInt(numero2);
console.log(`Numero 1 : ${numeroEntero2}`);

switch (operacion) {
  case "+":
    let suma = numeroEntero1 + numeroEntero2;
    console.log(` La suma es igual a  ${suma}`);
    break;
  case "-":
    let resta = numeroEntero1 - numeroEntero2;
    console.log(` La resta es igual a ${resta}`);
    break;
  case "*":
    let multiplicacion = numeroEntero1 * numeroEntero2;
    console.log(` La multiplicacion es igual a  ${multiplicacion}`);
    break;
  case "/":
    let divicion = numeroEntero1 / numeroEntero2;
    if (numeroEntero2 === 0) {
      console.log("No es posible dividir entre 0");
    } else {
      console.log(` La divicion es igual a  ${divicion}`);
    }
    break;
  case "^":
    let potencia = numeroEntero1 ** numeroEntero2;
    console.log(`La potencia es igual a  ${potencia}`);
    break;
  case "%":
    let modulo = numeroEntero1 % numeroEntero2;

    if (numeroEntero2 === 0) {
      console.log("No es posible dividir entre 0");
    } else {
      console.log(` El modulo es igual a  ${modulo}`);
    }
  default:
    console.log("Operacion invalida ");
}
