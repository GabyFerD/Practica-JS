//CREAR UN OBJETO LITERAL

let auto = {
  marca: "Fiat",
  modelo: "Uno",
  año: 2002,
  combustible: "Nafta",
  seguro: true,
  color: ["Rojo", "Blanco", "Negro"],
};
console.log(auto);

//ACCEDER A LAS PROPIEDADES

console.log("año");

console.log(auto.marca);

//CAMBIAR EL VALOR DE LAS PROPIEDADES

auto.año = 2005;
console.log(auto);

//AGREGAR UNA PROPIEDAD

auto.patente = "que123";
console.log(auto);
