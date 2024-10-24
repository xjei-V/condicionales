    let a = parseInt(prompt("Ingrese el primer número:"));
    let b = parseInt(prompt("Ingrese el segundo número:"));
    let c = parseInt(prompt("Ingrese el tercer número:"));

    let mayor, medio, menor;

    if (a > b && a > c) {
        mayor = a;
        if (b > c) {
            medio = b;
            menor = c;
        } else {
            medio = c;
            menor = b;
        }
    } else if (b > a && b > c) {
        mayor = b;
        if (a > c) {
            medio = a;
            menor = c;
        } else {
            medio = c;
            menor = a;
        }
    } else {
        mayor = c;
        if (a > b) {
            medio = a;
            menor = b;
        } else {
            medio = b;
            menor = a;
        }
    }

    // Imprimir los números ordenados
    console.log("Los números ordenados de mayor a menor son:", mayor, medio, menor);
