
//Cuando usamos query selector debemos hacer referencia 
//al elemento como lo hacemos en CSSS
const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calcular1')
const input2 = document.querySelector('#calcular2')
const button = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#resultado')

//Cuando se usa este evento, no se debe colocar () al final
//del nombre de la función 
button.addEventListener('click', buttonOnClick);


function buttonOnClick() {
    let suma =  parseInt(input1.value) + parseInt(input2.value) 
    resultado.innerText ='Resultado: ' + suma
        console.log(input1.value, input2.value, suma)

}

