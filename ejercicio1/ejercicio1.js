let numero;
do {
    numero = prompt("Por favor, introduce un número entero positivo:");
    numero = parseInt(numero);

    if (isNaN(numero) || numero <= 0) {
        alert ("Error: Debes introducir un número entero positivo.");
    }
} while (isNaN(numero) || numero <= 0);

let suma = 0;
for (let i = 1; i <= numero; i++) {
    suma += i;
}

console.log(`La suma de los números del 1 al ${numero} es: ${suma}`);
