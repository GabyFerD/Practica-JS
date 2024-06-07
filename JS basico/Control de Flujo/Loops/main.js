//Ciclos FOR -- UTILIZAR BACKPICKS `` PARA QUE TOME EL SIMBOLO $

// for (let i = 1; i < 11; i++) {
//   console.log(`Hola estoy en la iteracion numero ${i}`);
// }

//CICLO FOR CUENTA REGRESIVA

// for (let i = 10; i >= 0; i--) {
//   console.log(`Cuentra regresiva ${i}`);
//}

//CICLO WHILE -- chequea la condicion y despues ejecuta el codigo.

//while(condicion){
//     codigo a ejecutar
// }

let condiciondeWhile = 0;

// while (condiciondeWhile < 10) {
//   console.log(`El While esta en ${condiciondeWhile}`);
//   condiciondeWhile++;

//   //se llama la variable de while y se establece un limite para no generar un bucle infinito

// }

while (condiciondeWhile < 10) {
  if (condiciondeWhile === 5) {
    console.log(
      `El While esta en estrictamente ${condiciondeWhile} y no se ejecuta mas`
    );
  }
  condiciondeWhile++;
}

//DO WHILE -- ejecuta el codigo y despues chequea la condicion

let condicionDOWhile = 1;

do {
  console.log(condicionDOWhile);
  condicionDOWhile++;
} while (condicionDOWhile < 10);
