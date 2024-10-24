let longitud = parseFloat(prompt("Ingrese la longitud de la varilla en cm:"));
let diametro = parseFloat(prompt("Ingrese el diámetro de la varilla en cm:"));

const densidad = 3.5;

let masa = (diametro * longitud) / densidad;

if (longitud > 7.5 && longitud <= 9 && diametro >= 0.5 && diametro <= 1.3 && masa <= 5.8) {
    console.log("La varilla es aceptada.");
} else {
    console.log("La varilla es rechazada.");
}

console.log("Masa calculada:", masa, "g");
