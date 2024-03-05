// Le pedimos al usuario que ingrese una cantidad X de dias
let dias = parseInt(prompt('Ingrese la cantidad de días'));

// Calculamos a cuantos años equivale

let anios = parseInt(dias / 365);

// De los años obtenemos el restante para calcular semanas y dias

let dias_restantes = dias % 365;

// Del restante obtenemos cuantas semanas

let semanas = parseInt(dias_restantes / 7);

// Obtenemos los dias que no alcanzaron en una semana

let dias_sobrantes = dias_restantes % 7;


// Escribimos el mensaje ne el documento (se evita el uso de control de flujo por temario)

document.write(`${dias} días equivalen a ${anios} año(s) , ${semanas} semana(s) y ${dias_sobrantes} día(s)!`);

