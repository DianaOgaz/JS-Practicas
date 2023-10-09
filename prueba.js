

 function solution(estudiantes, deathCount, nuevo) {
    // Tu código aquí 👈
    if (deathCount == 0) {
        var nuevoEstudiante = estudiantes.push(nuevo);
        return estudiantes;
    } else {
        for (i = 0; i < deathCount; i++) {
            var eliminarEstudiantes = estudiantes.pop()
        }
        var nuevoEstudiante = estudiantes.push(nuevo);
        return estudiantes;
    }

}

console.log(solution( ["Nath","Luisa","Noru"], 2, "Cami"));