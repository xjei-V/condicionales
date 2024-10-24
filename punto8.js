let num1 =parseInt(prompt("Digite el primer numero"))
let num2 =parseInt(prompt("Digite el segundo numero"))
let num3 =parseInt(prompt("Digite el tercer numero"))

let medio

if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
    medio = num1;
} else if ((num2 > num1 && num2 < num3) || (num2 > num3 && num2 < num1)) {
    medio = num2;
} else {
    medio = num3;
}
console.log("El número medio es:", medio);