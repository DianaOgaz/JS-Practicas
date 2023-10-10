var piedra = 'piedra';
var papel = 'papel';
var tijeras = 'tijeras';

var jugador = Math.floor(Math.random() * 3) + 1;
var cpu = Math.floor(Math.random() * 3) + 1;

switch (true) {


    case (cpu == 1 && jugador == 3): {
        console.log('Ganò CPU!'); break;
    }
    case (jugador == 1 && cpu == 3): {
        console.log('Ganò jugador!'); break;
    }
    case (cpu == 2 && jugador == 1): {
        console.log('Ganò CPU!'); break;
    }
    case (jugador == 2 && cpu == 1): {
        console.log('Ganò jugador!'); break;
    }
    case (cpu == 3 && jugador == 2): {
        console.log('Ganò CPU!'); break;
    }
    case (jugador == 3 && cpu == 2): {
        console.log('Ganò jugador!'); break;
    }
    case (cpu == jugador): {
        console.log('Empate!'); break;
    }



}