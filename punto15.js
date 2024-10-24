// Capturar los coeficientes de la ecuación cuadrática
let a = parseFloat(prompt("Ingrese el valor de a (no puede ser 0):"))
if (a === 0) {
    console.log("El valor de a no puede ser 0. No es una ecuación cuadrática.")
} else {
    let b = parseFloat(prompt("Ingrese el valor de b:"))
    let c = parseFloat(prompt("Ingrese el valor de c:"))

    let discriminante = (b * b) - (4 * a * c);
    console.log("El discriminante es:", discriminante); 

    if (discriminante > 0) {
        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        console.log("Las soluciones son x1 =", x1, "y x2 =", x2);
    } else if (discriminante === 0) {
        let x = -b / (2 * a);
        console.log("La única solución es x =", x);
    } else {
        console.log("No hay soluciones reales, el discriminante es negativo.");
    }
}
