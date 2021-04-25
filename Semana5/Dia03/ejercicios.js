let hamburguesaP = 5
let tipoHamburguesa =""
let hamburguesaG = 9
let precioHamburguesa = 0
let escogeCantidad = 0
let total = 0
let escogeHamburguer = 0

escogeHamburguer = +prompt("Por favor escoja que hamburguesa pedira: 1 para Simple S/5 y 2 para Doble S/9")

if( escogeHamburguer === 1){
    precioHamburguesa = 5
    tipoHamburguesa="SIMPLE"
}else if (escogeHamburguer == 2){
    precioHamburguesa = 9
    tipoHamburguesa="DOBLE"
}else{
    escogeHamburguer = +prompt("Ingrese un tipo valido de HAMBURGUESA")
    
}

console.log(precioHamburguesa)

escogeCantidad = +prompt("Ahora indique cuantas Hamburguesas va a desear")

total = escogeCantidad * precioHamburguesa

console.log(`En total son ${escogeCantidad} hamburguesas del tipo ${tipoHamburguesa} y seria un total de S/. ${total} soles`)