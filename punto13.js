let nota1 = parseFloat(prompt("Ingrese la nota del primer componente:"));
let nota2 = parseFloat(prompt("Ingrese la nota del segundo componente:"));
let nota3 = parseFloat(prompt("Ingrese la nota del tercer componente:"));

let notaFinal = (nota1 + nota2 + nota3) / 3;

if (notaFinal >= 3.0) {
    console.log("¡Has ganado la materia con una nota de:", notaFinal.toFixed(2), "!");
} else {
    console.log("Has reprobado la materia con una nota de:", notaFinal.toFixed(2), ".");
}
