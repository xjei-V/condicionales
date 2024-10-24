let num1 = parseInt(prompt("Digite el primer número"))
let num2 = parseInt(prompt("Digite el segundo número"))
let num3 = parseInt(prompt("Digite el tercer número"))

if(num1 > num2 && num1 > num3) {
    console.log(num1 + " es mayor que " + num2 + " y " + num3)
} else if(num2 > num1 && num2 > num3) {
    console.log(num2 + " es mayor que " + num1 + " y " + num3)
} else if(num3 > num1 && num3 > num2) {
    console.log(num3 + " es mayor que " + num1 + " y " + num2)
} 

if(num1 < num2 && num1 < num3) {
    console.log(num1 + " es menor que " + num2 + " y " + num3)
} else if(num2 < num1 && num2 < num3) {
    console.log(num2 + " es menor que " + num1 + " y " + num3)
} else if(num3 < num1 && num3 < num2) {
    console.log(num3 + " es menor que " + num1 + " y " + num2)
} 


if(num1 === num2 && num1 === num3) {
    console.log("Los tres números son iguales.")
} else if(num1 === num2) {
    
    
console.log(num1 + " y " + num2 + " son iguales.")
} else if(num1 === num3) {
    
   
console.log(num1 + " y " + num3 +"son iguales") 
} else if(num2 === num3) {
    console.log(num2 + " y " + num3 + "son iguales")
}

if(num1 !== num2 && num1 !== num3 && num2 !== num3) {
    console.log("Los tres números son diferentes.")
}
