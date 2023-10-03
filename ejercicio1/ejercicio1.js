// Función para verificar si una cadena se puede convertir en un número entero
function esEntero(c) {
    return !isNaN(c) && parseInt(c) == c;
  }
  
  // Función para verificar si un número es positivo
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
  
  // Proceso principal
  let numero;
  let esValido = false;
  
  while (!esValido) {
    let entrada = prompt("Por favor, introduce un número entero positivo:");
  
    if (esEntero(entrada)) {
      numero = parseInt(entrada);
  
      if (esPositivo(numero)) {
        esValido = true;
      } else {
        console.log("El número debe ser positivo. Inténtalo de nuevo.");
      }
    } else {
      console.log("No has introducido un número entero. Inténtalo de nuevo.");
    }
  }
  
  const resultado = sumatorio(numero);
  console.log(`El sumatorio de ${numero} es ${resultado}`);
  
