const h1 = document.querySelector('h1')
const p = document.querySelectorAll('p')
const parrafito = document.querySelector('parrafito')
const parrafito_id = document.getElementById('parrafito_id')
const input = document.querySelector('input')


console.log(h1); //Muestra en consola el contenido de la label

console.log({ // Muestra el contendio de las siguientes etiquetas
    h1,
    p,
    parrafito,
    parrafito_id,
    input

})
//INNERHTML
//Se puede colocar codigo html en esta etiqueta
h1.innerHTML = 'Ashu <br> salud'; // Cambia el contenido del html
//INNERHTML incerta solo texto, el codigo no funciona aquì
h1.innerText = 'Ashu <br> salud'; // Cambia el contenido del html 

//console.log(h1.getAttribute('pantalla'))
//h1.setAttribute('pantalla','gatito'); //Modifica los atributos de nuertros elementos en html
h1.classList.add('rojo')
h1.classList.remove('olakease')

input.value= '789'; //Coloca un valor predeterminado en el input

const img = document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/18148956/pexels-photo-18148956/free-photo-of-bamboo-leaves-in-sunlight.jpeg')
img.setAttribute('width', '300px')
img.setAttribute('height', '300px')
console.log(img)

parrafito_id.innerHTML= "";
parrafito_id.append(img)