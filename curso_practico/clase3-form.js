
//Cuando usamos query selector debemos hacer referencia 
//al elemento como lo hacemos en CSSS
const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calcular1')
const input2 = document.querySelector('#calcular2')
const button = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#resultado')

//Cuando se usa este evento, no se debe colocar () al final
//del nombre de la función 
/*
form.addEventListener('submit', buttonOnClick);


function buttonOnClick(event) {
    let suma = parseInt(input1.value) + parseInt(input2.value)
    resultado.innerText = 'Resultado: ' + suma
    console.log({ event })
    event.preventDefault();//No ejecuta lo que por defecto deberia ejecutar el form
    console.log(input1.value, input2.value, suma)

}
*/
//event.preventDefault(); sirve para no ejecutar el submit del 
//formularo porque por defecto ese es su comportamiento, 
//toma el primer boton como submit y envia formulario pero 
//como queremos eso, solo usar el boton para validar la suam

//esto se arregla colocanto type en la etiqueta html del input
//y eliminando las llamadas al evento 

button.addEventListener('click', buttonOnClick);


function buttonOnClick() {
    let suma = parseInt(input1.value) + parseInt(input2.value)
    resultado.innerText = 'Resultado: ' + suma
    //console.log({ event })
    //event.preventDefault();//No ejecuta lo que por defecto deberia ejecutar el form
    console.log(input1.value, input2.value, suma)

}