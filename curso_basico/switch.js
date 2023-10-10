
var color = 'morado';

switch (color) {
    case 'verde': console.log('Avanza!'); break;
    case 'Amarillo': console.log('Bajale!'); break;
    case 'Rojo': console.log('Detende!'); break;
    default: {
        if (color !== 'verde' && 'Rojo' && 'Amarillo') {
            console.log('error!');
        }//if
    }//switch
}