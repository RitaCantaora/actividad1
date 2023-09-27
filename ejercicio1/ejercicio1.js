// let numero;
// do {
//     numero = prompt("Por favor, introduce un número entero positivo:");
//     numero = parseInt(numero);

//     if (isNaN(numero) || numero <= 0) {
//         alert ("Error: Debes introducir un número entero positivo.");
//     }
// } while (isNaN(numero) || numero <= 0);

// let suma = 0;
// for (let i = 1; i <= numero; i++) {
//     suma += i;
// }

// console.log(`La suma de los números del 1 al ${numero} es: ${suma}`);


// Función para comprobar si una cadena es un número entero
function esEntero(c) {
    return Number.isInteger(parseInt(c));
}

// Función para comprobar si un número es positivo
function esPositivo(numero) {
    return numero > 0;
}

// Función para calcular el sumatorio de un número
function sumatorio(numero) {
    let resultado = 0;
    for (let i = 0; i <= numero; i++) {
        resultado += i;
    }
    return resultado;
}

// Función principal para obtener un número entero positivo del usuario
function obtenerNumeroEnteroPositivo() {
    let numero;
    do {
        entrada = prompt("Por favor, introduce un número entero positivo:");
        if (esEntero(entrada)) {
            numero = parseInt(entrada);

            if (esPositivo(numero)) {
                resultado = sumatorio(numero);
                alert(`El sumatorio de ${numero} es ${resultado}`);
                break; // Salir del bucle si se ingresó un número válido

            } else {
                alert("El número no es positivo. Inténtalo de nuevo.");
            }
        } else {
            alert("Entrada no válida. Por favor, introduce un número entero positivo.");
        }
    } while (true); // Repetir hasta que se ingrese un número válido
}

// Llama a la función principal
obtenerNumeroEnteroPositivo();
