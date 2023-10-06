
var piedra = 1;
var papel = 2;
var tijeras = 3;


var iUser = Math.floor(Math.random() * 3) + 1;
juego(iUser);

function juego(iUser) {
    var cpu = Math.floor(Math.random() * 3) + 1;
    var jugador;

    if (cpu == 1 && iUser == 3) {
        console.log('Ganò CPU!');
    } else if (iUser == 1 && cpu == 3) {
        console.log('Ganò jugador!');
    }
    if (cpu == 2 && iUser == 1) {
        console.log('Ganò CPU!');
    } else if (iUser == 2 && cpu == 1) {
        console.log('Ganò jugador!');
    }
    if (cpu == 3 && iUser == 2) {
        console.log('Ganò CPU!');
    } else if (iUser == 3 && cpu == 2) {
        console.log('Ganò jugador!');
    }
    if (cpu == iUser) {
        console.log('Empate!');
    }



}
