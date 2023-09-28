function ordenCreciente(numero1, numero2, numero3, numero4) {
    return numero1 < numero2 && numero2 < numero3 && numero3 < numero4;
}
 
function pedirNumero() {
    let numero;
    do {
        numero = parseInt(prompt("Ingrese un número entero positivo:"));
        if (isNaN(numero) || numero <= 0) {
            alert("Por favor, ingrese un número entero positivo válido.");
        }
    } while (isNaN(numero) || numero <= 0);
    return numero;
}

function main() {
    let n1, n2, n3, n4;
    alert("Por favor, ingrese 4 números enteros positivos.");
    n1 = pedirNumero();
    n2 = pedirNumero();
    n3 = pedirNumero();
    n4 = pedirNumero();

    if (ordenCreciente(n1, n2, n3, n4)) {
        alert("Los números están en orden estrictamente creciente.");
    } else {
        alert("Los números no están en orden estrictamente creciente.");
    }
}

main();
