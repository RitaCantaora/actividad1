// Función para verificar si un número es divisible entre un divisor dado
function esDivisible(dividendo, divisor) {
    return dividendo % divisor === 0;
}

// Función principal
function main() {
    const MAXIMO = 100;
    const MINIMO = 1;
    const DIVISORES = [2, 3, 5, 10];
    
    let numero;
    let mensaje = "No es divisible entre ninguno de los divisores.";

    // Solicitar al usuario un número entre 1 y 100
    do {
        numero = parseInt(prompt("Ingrese un número entero entre 1 y 100:"));
    } while (isNaN(numero) || numero < MINIMO || numero > MAXIMO);

    // Verificar si es divisible por cada divisor y construir el mensaje
    for (const divisor of DIVISORES) {
        if (esDivisible(numero, divisor)) {
            mensaje = `Es divisible entre ${divisor}.`;
            break; // Salir del bucle si es divisible por al menos uno
        }
    }

    // Mostrar el mensaje final
    alert(mensaje);
}

// Llamar a la función principal
main();

