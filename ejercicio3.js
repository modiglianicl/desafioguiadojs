// Le pedimos al usuario que ingrese la temperatura grados Celsius
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius"));
let celToKelvin = celsius + 273.15;
let celToFahren = (9/5 * celsius) + 32;

// Escribimos en el documento los resultados

document.write(`${celsius}°C a Kelvin equivale a : ${celToKelvin} <br>`);
document.write(`${celsius}°C a Fahrenheit equivale a : ${celToFahren}<br>`);