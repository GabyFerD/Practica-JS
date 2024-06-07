//if (Si lo que esta aca adentro de True){
//    "Lo que esta aca adentro se ejecuta"
//     }
//"Sino se ejecuta lo que esta por fuera"

let años = 26;

if (años < 18) {
  console.log("Sos menor de Edad");
} else if (años < 25) {
  console.log("Sos adolescente");
} else {
  console.log("Sos mayor de edad");
}

// -------------------------------------------//

//OPERADORES TERNARIOS -- PARA REEMPLAZAR IF

// Condicion ? valor-True : valor-False

const edad = 24;

edad < 18
  ? console.log("Sos menor de edad")
  : edad < 25
  ? console.log("Sos adolescente")
  : console.log("Sos mayor de edad");

//----------------------------------------//

//Switch

let tecnologia = "Javascript";

switch (tecnologia) {
  case "HTML":
    console.log("Suerte con las etoquetas");
    break;
  case "CSS":
    console.log("A darle estilo a todo");
    break;
  case "Javascript":
    console.log("Welcome to JS");
    break;
  default:
    console.log("No estas estudiando Front-end");
    break;
}
