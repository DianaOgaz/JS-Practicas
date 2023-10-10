var estudiantes = ["Diana", "Camila", "Oscar", "Antonio", "Margarita", "Eduardo"]

function saludar (estudiante){
    console.log(`Hola, ${estudiante}`);
}
// Mientras lo que esté dentro del arreglo sea mayor a 0, va a pasar lo del while
while(estudiantes.length > 0 ){
    //Se utiliza SHIFT para ir eliminando los elementos del array para que el while termine.
    //Lo que hace SHIFT es eliminar el primer elemento y por defaul regresa el valor que esta por eliminar
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}
