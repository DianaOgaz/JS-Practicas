//No genera nuevo arreglo 

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tele", costo: 2500 },
    { nombre: "libro", costo: 315 },
    { nombre: "celular", costo: 16000 },
    { nombre: "laptop", costo: 23000 },
    { nombre: "teclado", costo: 200 },
    { nombre: "Audifonos", costo: 12000 }
]
//Regresa los nomnbre de los objetos
//Se utiliza para filtros en paginas web

articulos.forEach(function(articulo){
console.log(articulo.nombre);
});