//FILTER

//Array con objetos y metodos de recorrido para esto

//un arreglo que contiene objetos
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tele", costo: 2500 },
    { nombre: "libro", costo: 315 },
    { nombre: "celular", costo: 16000 },
    { nombre: "laptop", costo: 23000 },
    { nombre: "teclado", costo: 200 },
    { nombre: "Audifonos", costo: 12000 }
]
//se crea una variable que recibe el objeto con el metodo Filter
//para que Filter funcione debemos colocar la funcion y el parametro que sera el articulo de nuestro objeto
//Dentro de la funcion colocamos el return con el atributo del objeto en espesifico por el cual vamos a filtar

//Agrega a un nuevo arreglo solo los artoculos que cumplen con la condicion
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo < 500;
    //regersa los articulos del objeto que valgan menos de 500 pesos
});
console.log(articulosFiltrados);