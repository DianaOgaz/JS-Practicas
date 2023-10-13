//VARIABLES Y OPERACIONES
//Nombre y tipo de dato
/*
var name;
var lastName;
var platzyNickName;
var age;
var email;
var adult;
var savedMoney;
var debtMoney; 

var name = 'Diana';
var lastName = 'Ogaz Escarpita';
var savedMoney = 525;
var debtMoney = 25;
var total = savedMoney - debtMoney;

console.log(`Nombre completo ${name} ${lastName} Dinero total:  ${total}`);


//FUNCIONES

function nombres(name, lastName, nickname) {
    const completeName = name + lastName;

    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}`);
}
//nombres("Diana Teresa", " Ogaz Escarpita", "Luna Sh");

//Condicionales
const tipoDeSuscripcion = "Basic";

/*switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}

if (tipoDeSuscripcion == "free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

var number = 5;

while (number <= 5) {
    console.log("El valor es: " + number)
    var number = 8;
}

while (number >= 8) {
    console.log("El valor es: " + number)
    var number = 0;
}

// Ciclo While (JALA EN WEB)

var respuesta = prompt("cuanto es 2 +2 ?:");
while (respuesta != 4) {
    var respuesta = prompt("cuanto es 2 +2 ?:");

} 
console.log("Respuesta correcta!") 


var arreglo = [1, 2, 3, 4, 5, 6];

//Imprime el primer elemento
function imprimirArreglo(arreglo) {
    console.log("Primer elemento del arreglo: " + arreglo[0]);
}
//imprimirArreglo(arreglo)

//imprimir todos los elementos de un arreglo uno por uno
function imprimirElementos(arreglo) {
    for (var i = 0;  i < arreglo.length; i++) {
        console.log("Elementos del arreglo: " + arreglo[i]);
    }
}*/
//imprimirElementos(arreglo)

//imprimir todos los elementos de objetos
var objetos = [
    { nombre: "Diana", apellido: "Ogaz", edad: "23" },
    { nombre: "Cesar", apellido: "Gonzalez", edad: "23" },
    { nombre: "Camila", apellido: "Ogaz", edad: "25" }
];
var obj = {
    nombre: 'Diana',
    apellido: 'Ogaz',
    edad: 23
}

function imprimirObjetos(objetos) {
    var nombreObjetos = objetos.map(function (objeto) {
        return objeto.nombre;
    });
    var apellidoObjetos = objetos.map(function (objeto) {
        return objeto.apellido;
    });
    var edadObjetos = objetos.map(function (objeto) {
        return objeto.edad;
    });
    console.log(nombreObjetos)
    console.log(apellidoObjetos)
    console.log(edadObjetos)
}

//imprimirObjetos(objetos);
const arr = Object.values(obj)

function imprimirArreglo1(arr) {
    for (i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

imprimirArreglo1(arr)