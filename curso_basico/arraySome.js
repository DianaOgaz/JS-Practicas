
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tele", costo: 2500 },
    { nombre: "libro", costo: 315 },
    { nombre: "celular", costo: 16000 },
    { nombre: "laptop", costo: 23000 },
    { nombre: "teclado", costo: 200 },
    { nombre: "Audifonos", costo: 12000 }
]
//Esta funcion regresa un valor booleano para la consulta que se pide.
//Si existe tal atributo o no dentro de los objetos 
var articulosBaratos = articulos.some(function(articulo){
return articulo.costo < 2000;
});

console.log(articulosBaratos);