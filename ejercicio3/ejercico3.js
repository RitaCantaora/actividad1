// Constantes para los valores fijos
const MAXIMO = 100;
const MINIMO = 1;
const DIVISORES = [2, 3, 5, 10];

// Función para verificar si un número es divisible entre un divisor dado
function esDivisible(dividendo, divisor) {
    return dividendo % divisor === 0;
}

// Función principal
function main() {
    let numero;
    let mensaje = "No es divisible entre ";

    // Solicitar al usuario un número entre 1 y 100
    do {
        numero = parseInt(prompt("Ingrese un número entero entre 1 y 100:"));
    } while (isNaN(numero) || numero < MINIMO || numero > MAXIMO);

    // Verificar si es divisible por cada divisor y construir el mensaje
    for (const divisor of DIVISORES) {
        if (esDivisible(numero, divisor)) {
            mensaje += `${divisor}, `;
        }
    }

    // Eliminar la última coma y espacio del mensaje si es divisible
    if (mensaje !== "No es divisible entre ") {
        mensaje = mensaje.slice(0, -2);
    }

    // Mostrar el mensaje final
    if (mensaje === "No es divisible entre") {
        mensaje += "ninguno de los divisores.";
    } else {
        mensaje += ".";
    }

    alert(mensaje);
}

// Llamar a la función principal
main();
