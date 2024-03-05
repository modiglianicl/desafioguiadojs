// Le solicitamos al usuario 5 números

let num1 = parseFloat(prompt("Ingresa el primer número"));
let num2 = parseFloat(prompt("Ingresa el segundo número"));
let num3 = parseFloat(prompt("Ingresa el tercer número"));
let num4 = parseFloat(prompt("Ingresa el cuarto número"));
let num5 = parseFloat(prompt("Ingresa el quinto número"));

// Sumar los 5 numeros

let sumartodo = (num1+num2+num3+num4+num5);

// Promedio de los 5 números ingresados

let promedio = (num1+num2+num3+num4+num5)/5;

// Escribimos en el documento

document.write(`La suma de los cinco números es : ${sumartodo} <br>El promedio de estos cinco números es : ${promedio}`);