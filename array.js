//Declaracion de un arreglo
//               [0]       [1]        [2]        [3]
var frutas = ["manzana","platano", "cereza" , "fresa"];
 console.log(frutas); //Se imprime el arreglo crudo
 console.log("Frutas: " + frutas); //Se imprime el contenido del arreglo de manera ordenada y chids 
 console.log("Componentes del arreglo: " + frutas.length); //La cantidad de elementos del array
 console.log("Primero elemento: " + frutas[0]); //el primer elemento del array

 //Mutar el arreglo (cambiarlo)

 //agregar elementos a un arreglo hasta el final (PUSH)
 var masFrutas = frutas.push("Uvas");
 console.log("Nuevo elemento: " + frutas);

 //Eliminar elemento de un arreglo (POP)
 var ultimo = frutas.pop([4]);
 console.log("Sin uvas: " + frutas);

 //Agregar nuevo elemento al inicio del arreglo 
 var nuevaLongitus = frutas.unshift("Uvas");
 console.log("Ahora uvas esta en el inicio: " + frutas);

 //Elimina elemento que está en el inicio del arreglo 
 var eliminarPrimer = frutas.shift("cereza");
 console.log("Eliminó el primer elemento (uvas): " + frutas );

 //Saber la posision de un elemento
 var posicion = frutas.indexOf("cereza");
 console.log("Cereza esta en la posicion: " + posicion);

//                   Condicion                        en caso de si,    en caso de no
 console.log( typeof frutas[2] === "string"?             true       :       false);

//Puede haber arreglos dentro de un arreglo
//un arreglo contiene objetos