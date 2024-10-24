let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número:"));

if (num1 % num2 === 0 || num1 % num3 === 0) {
console.log(num1 + " es divisible por " + num2 + " o " + num3);
} else if (num2 % num1 === 0 || num2 % num3 === 0) {
console.log(num2 + " es divisible por " + num1 + " o " + num3);
} else if (num3 % num1 === 0 || num3 % num2 === 0) {
console.log(num3 + " es divisible por " + num1 + " o " + num2);
} else {
console.log("Ningún número es divisible por otro");
}