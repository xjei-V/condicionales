let num = parseFloat(prompt("Digite el numero"))
if (Number.isInteger(num)){
    console.log("conversion a grados kelvin", num + 273.15, "K")
} else if (!isNaN(num)) {
    if (num > 10.5) {
        console.log("Es mayor a 10.5");
    } else {
        console.log("No es mayor a 10.5");
    }
}else{
    console.log("es un caracter")
}

    
