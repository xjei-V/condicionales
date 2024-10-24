let n = parseFloat(prompt("Ingrese el valor de n:"));

if (n !== 0) {
    let resultado = 1 / n;
    console.log("El resultado de 1/n es:", resultado);
} else {
    console.log("Error: No se puede dividir entre cero.");
}
