//PARAMETROS Y ARGUMENTOS

function presentacion(
  name = "Aca puedo agregar un nombre por defecto",
  age = "Aca puedo agregar edad por defecto"
) {
  console.log(`Hola me llamo ${name} y tengo ${age} años`);
}

presentacion();

//FUNCION DE FLECHA -- es una funcion dentro de una variable, NO puede llamarse ANTES de ser declarada. NO es una funcion pura, es ANONIMA.

const funcionFlecha = (parametro1, parametro2) => {
  console.log(`Hola me llamo ${parametro1} y tengo ${parametro2} años`);
};

funcionFlecha("para1", "xxx");

//FUNCIONES RECURSIVAS QUE SE LLAMAN ASI MISMAS. LOOP
