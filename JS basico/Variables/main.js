//VARIABLES -- Un lugar donde puedo almacenar info.
//Darle valor a una variable, significa crearla como una Variable Global.

var numeroA = 230;
var textoA = "Hola";

console.log(numeroA);
console.log(textoA);

var numeroA = 999;

console.log(numeroA);

//la diferencia con las variables LET.
//las variables VAR se pueden volver a declarar.
//las variables LET no se pueden volver a declarar. -- LET = variable LOCAL.

let numeroB = 456;

//para cambiar lo que hay que hacer es asignar un nuevo valor a la variable ya declarada --

numeroB = 123;

console.log(numeroB);

//Otra variable - CONST -- tampoco se pueden volver a declarar -- y a diferencia de LET, tampoco se le puede reasignar un nuevo valor a la variable.

//----------------------------------------//

//Scope(Alcance) - Hoisting

{
  //Bloque de codigo
  var a = "var";
}

console.log(a); //Puedo llamar a la variable fuera del bloque de codigo.

//Las variables VAR tienen un Scope Global.

//Las variables LET y constantes CONST tienen Scope Local. Se deben llamarlas dentro del bloque de codigo.

{
  let b = "let";
  console.log(b);
}

{
  const c = "const";
  console.log(c);
}
