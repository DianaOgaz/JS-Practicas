const pregunta = "free";

const respuestas = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertPluz: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

function solucion(pregunta, respuestas) {
    const arr = Object.keys(respuestas);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == pregunta) {
            const solucion = arr[i].toString();
            console.log("respuesta: " + respuestas[solucion])
        }
    }
}
solucion(pregunta, respuestas)