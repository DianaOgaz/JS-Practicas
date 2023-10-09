var estudiantes = ["Diana" , "Teresa", "Paco", "Daniel" ];

//CICLO FOR 

//mientras  sea menor a la longitud del array, i va a aumentar hasta que la condicion ya no se cumpla
for (var i = 0; i < estudiantes.length; i++){
    console.log(`Hola, bienvenido estudiante: ${estudiantes[i]}`);
}

//CICLO FOR IN

// variable (contenido del array) del Array tiene que estar en singular par auqe fucione como el index.
for (var estudiante of estudiantes){
    console.log(`Hola, bienvenido estudiante: ${estudiante}`);
}