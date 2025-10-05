/**
 * Gestión de notas de alumnos
 * Vamos a implementar una aplicación que a partir de los datos del alúmno (nombre, apellidos, asignatura y tres notas), incluidas ya dentro del código, realice una serie de acciones.
 *  */

let nombre, apellidos, asignatura, nota1, nota2, nota3, media, calificacion;

nombre = "Fidel";
apellidos = "Verduguez Claros";
asignatura = "Matemáticas";
nota1 = 8;
nota2 = 2;
nota3 = 5;

// Calcular la media
media = (nota1 + nota2 + nota3) / 3;


// Evaluar la nota media del alumno

if (media < 5) {
    calificacion = "Reprobado";
}
if (media >= 5 && media <= 6.9){
    calificacion = "Aprobado";
}
if(media >= 7 && media <= 8.9){
    calificacion = "Notable";
}
if(media >= 9){
    calificacion = "Exelente";
}


console.log(`El alumno ${nombre} ${apellidos} de la asignatura ${asignatura} tiene los siguientes resultados:`)
console.log(`* La media de las notas es ${media.toFixed(1)} sobre 10`);
console.log(`* El resultado de la calificación es ${calificacion}`);
