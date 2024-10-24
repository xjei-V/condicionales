// Inicializar variables
let comisionTotal = 0;
let ventasMenores2000 = 0;
let ventasMayoresIgual2000 = 0;

// Ingresar manualmente cada venta
let precio1 = parseFloat(prompt("Ingrese el precio del primer artículo:"));
if (precio1 < 2000) {
    comisionTotal += precio1 * 0.03;
    ventasMenores2000++;
} else {
    comisionTotal += precio1 * 0.05;
    ventasMayoresIgual2000++;
}

let precio2 = parseFloat(prompt("Ingrese el precio del segundo artículo:"));
if (precio2 < 2000) {
    comisionTotal += precio2 * 0.03;
    ventasMenores2000++;
} else {
    comisionTotal += precio2 * 0.05;
    ventasMayoresIgual2000++;
}

let precio3 = parseFloat(prompt("Ingrese el precio del tercer artículo:"));
if (precio3 < 2000) {
    comisionTotal += precio3 * 0.03;
    ventasMenores2000++;
} else {
    comisionTotal += precio3 * 0.05;
    ventasMayoresIgual2000++;
}

console.log("Comisión total ganada: $", comisionTotal.toFixed(2));
console.log("Ventas menores de $2000:", ventasMenores2000);
console.log("Ventas de $2000 o más:", ventasMayoresIgual2000);
