let nota1 = parseFloat(prompt("Ingrese la primera calificación:"));
let nota2 = parseFloat(prompt("Ingrese la segunda calificación:"));
let nota3 = parseFloat(prompt("Ingrese la tercera calificación:"));

let suma;

if (nota1 <= nota2 && nota1 <= nota3) {
    suma = nota2 + nota3;
} else if (nota2 <= nota1 && nota2 <= nota3) {
    suma = nota1 + nota3;
} else {
    suma = nota1 + nota2;
}

let promedio = suma / 2;

console.log("La calificación final, basada en las dos notas más altas, es:", promedio);
