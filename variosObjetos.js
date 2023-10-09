
//Funcion constructora
//sirve como template para nuevos objetos
function auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}
//Objeto 1
var autoNuevo = new auto("Tesla","Ashu", "2014");
console.log(autoNuevo);
//Objeto2
var autoNuevo1 = new auto("BMV","Ashu", "2012");
console.log(autoNuevo1);