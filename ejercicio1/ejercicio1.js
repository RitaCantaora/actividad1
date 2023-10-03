// Función para verificar si una cadena puede convertirse en un número entero
function esEntero(c) {
    return Number.isInteger((c));
  }
  
  // Función para verificar si un número es positivo
  function esPositivo(numero) {
    return numero > 0;
  }
  
  // Función para calcular el sumatorio de un número entero
  function sumatorio(numero) {
    let resultado = 0;
    for (let i = 0; i <= numero; i++) {
      resultado += i;
    }
    return resultado;
  }
  
  // Proceso principal
  let numero;
  let valido = false;
  
  while (!valido) {
    let entrada = prompt("Por favor, ingresa un número entero positivo:");
  
    if (esEntero(entrada)) {
      numero = parseInt(entrada);
      if (esPositivo(numero)) {
        valido = true;
      } else {
        console.log("El número no es positivo. Inténtalo de nuevo.");
      }
    } else {
      console.log("No has ingresado un número entero. Inténtalo de nuevo.");
    }
  }
  
  const resultado = sumatorio(numero);
  console.log("El sumatorio de " + numero + " es " + resultado);
  
  
  
  
