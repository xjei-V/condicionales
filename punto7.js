let nombre = prompt("ingrese el nombre")
let edad = parseInt(prompt("ingrese la edad"))
let sexo = prompt("ingrese el sexo")
let estado= prompt("ingrese el estado civil")

if (sexo === "M" && estado === "casado" && edad > 40) {
    console.log("El hombre casado mayor de 40 años es:", nombre);
} else if (sexo === "F" && estado === "soltero" && edad < 50) {
    console.log("La mujer soltera menor de 50 años es:", nombre);
} else {
console.log("No cumple con los criterios.");
}