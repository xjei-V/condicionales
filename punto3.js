let sueldo = parseInt(prompt("Diigite el sueldo"))
if (sueldo < 30000){
    console.log("usted tiene un aumento del 15%"+(sueldo*15/100))
}else{
    console.log("usted no recibe ningun aumento")
}