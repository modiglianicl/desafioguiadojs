// Le pedimos al usuario (amablemente) dos números mayores a 0

let num1 = parseFloat(prompt("Ingrese el primer número (debe ser mayor a 0)"));
let num2 = parseFloat(prompt("Ingrese el segundo número (debe ser mayor a 0"));

// Escribimos en el documento
document.write(`Los números digitados fueron : ${num1} y ${num2} <br>`)
document.write(`La suma de estos dos números es : ${num1+num2}<br>`)
document.write(`La resta de estos dos números es : ${num1-num2}<br>`)
document.write(`La divisón de estos dos números es : ${num1/num2}<br>`)
document.write(`La multiplicación de estos dos números es : ${num1*num2}<br>`)
document.write(`Modulo de estos dos números es : ${num1%num2}<br>`)

