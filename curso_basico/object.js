var objeto = {}; //tipo objeto

//objeto declarado e inicializado
var miAuto = {
    marca: "Toyota",
    modelo: "Ashu",
    año: 2023
};
console.log(miAuto);

console.log(miAuto.marca);

var miAuto = {
    marca: "Toyota",
    modelo: "Ashu",
    año: 2023,
    //Una funcion dentro de un objeto es un metodo en JS esta almacena y clasifica la unformacion de este objeto
    detalleAuto: function () {
        //this hace referencia al objeto padre, que es miAuto.
        console.log(`Auto ${this.modelo} ${this.año}`)
    }
};
miAuto.detalleAuto();