// Función para validar que el operador sea permitido (+, -, *, /, FIN)
function validaOperador(operador) {
    return operador === '+' || operador === '-' || operador === '*' || operador === '/' || operador === 'FIN';
}

// Función para validar la división (el divisor no puede ser 0)
function divisionValida(dividendo, divisor) {
    return divisor !== 0;
}

// Función principal de la calculadora
function calculadora() {
    let resultado;

    do {
        let operando1, operando2, operador;

        // Solicitar operandos y operador al usuario
        operando1 = parseInt(prompt("Ingrese el primer operando (entero):"));
        operando2 = parseInt(prompt("Ingrese el segundo operando (entero):"));
        operador = prompt("Ingrese la operación a realizar (+, -, *, /) o FIN para finalizar:");

        // Validar que el operador sea permitido
        while (!validaOperador(operador)) {
            alert("Operador no válido. Use +, -, *, / o FIN.");
            operador = prompt("Ingrese la operación a realizar (+, -, *, /) o FIN para finalizar:");
        }

        // Realizar la operación correspondiente
        switch (operador) {
            case '+':
                resultado = operando1 + operando2;
                break;
            case '-':
                resultado = operando1 - operando2;
                break;
            case '*':
                resultado = operando1 * operando2;
                break;
            case '/':
                // Validar que la división sea válida
                while (!divisionValida(operando1, operando2)) {
                    alert("La división por 0 no está permitida.");
                    operando2 = parseInt(prompt("Ingrese el segundo operando (entero):"));
                }
                resultado = operando1 / operando2;
                break;
        }

        // Mostrar el resultado
        alert(`El resultado de la operación es: ${resultado}`);

    } while (operador !== 'FIN');
}

// Llamar a la función principal de la calculadora
calculadora();
