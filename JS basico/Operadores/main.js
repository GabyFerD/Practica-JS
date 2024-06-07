//Suma -- Resta -- Division (/) -- Multiplicacion (*)

let nUno = 10;
let nDos = 30;

let suma = nUno + nDos;

console.log(suma);

let nameUno = "Lio";
let nameDos = "Messi";
let nombre = nameUno + " " + nameDos;

console.log(nombre);

//Incrementador ++
//Decrementador --

console.log(++nUno);

//Multiplicacion con incrementador

let resultIncrementado = ++nUno * nDos;
//En este caso el incrementador esta primero, asi que primero se incrementa el numero y despues se realiza la multiplicacion.
//Si el incrementador esta despues del numero, se resuelve primero la multiplicacion y despues se incrementa el numero.

console.log(resultIncrementado);
//Se imprime 360 de resultado xqe nUno esta incrementado dos veces en la linea 18 y 22. Ahora nUno = 12.

console.log(nUno);

//------------------------------------------------//

//OPERADORES DE COMPARACION -- DEVUELVE BOOLEANS

//Comparador de igualdad

console.log("Igualdad");
console.log(5 == 5);
console.log("5" == "5");
console.log(5 == "5");

//Comparador de igualdad Estricta

console.log("Igualdad Estricta");
console.log(5 === "5");

//Comparador de desigualdad

console.log("desigualdad");
console.log(5 != "5");

//Comparador de Estricta desigualdad
console.log("Estricta desigualdad");
console.log(5 !== "5");

console.log("Mayor o Menor que");
console.log(10 > 5);
console.log(5 < 10);
console.log(5 < 5);

console.log("Mayor o Menor igual que");
console.log(5 >= 5);

//And -- se tienen que cumplir los dos para que sea True.

console.log("AND");
console.log(5 < 10 && 10 > 5);
console.log(5 > 10 && 10 > 5);

//OR -- Al menos una de las dos comparaciones tiene que ser true.

console.log(5 < 10 || 10 < 5);
console.log(5 > 10 || 10 < 5);

//Negar un boolean -- Sirve para el control de Flujos.
console.log("Negar");

let algoTrue = 5 < 10;
let algoFalse = 5 > 10;

console.log(!algoTrue);
console.log(!algoFalse);
