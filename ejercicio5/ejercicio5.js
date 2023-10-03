// Arrays globales con los nombres de usuario y contraseñas
const USUARIOS = ["pepe", "paco", "juan", "benito", "manuel"];
const CONTRASEÑAS = ["12345", "23456", "09876", "67890", "666666"];

// Función para validar si el login existe
function existeLogin(login) {
  return USUARIOS.includes(login);
}

// Función para validar si la contraseña es correcta
function passwordCorrecto(login, password) {
  const indice = USUARIOS.indexOf(login);
  return indice !== -1 && CONTRASEÑAS[indice] === password;
}

// Proceso principal
let intentos = 5;

while (intentos > 0) {
  const login = prompt("Ingresa tu nombre de usuario:");
  
  if (existeLogin(login)) {
    const password = prompt("Ingresa tu contraseña:");
    
    if (passwordCorrecto(login, password)) {
      console.log("El nombre de usuario y la contraseña son correctas.");
      break;
    } else {
      console.log("El nombre de usuario y la contraseña no coinciden.");
    }
  } else {
    console.log("El nombre de usuario no existe.");
  }
  
  intentos--;
}

if (intentos === 0) {
  console.log("Has agotado tus intentos. Acceso denegado.");
}
