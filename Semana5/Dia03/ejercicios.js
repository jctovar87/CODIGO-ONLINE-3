let hamburguesaP = 5
let hamburguesaG = 9
let precioHamburguesa = 0

let escogeHamburguer = +prompt("Por favor escoja que hamburguesa pedira: 1 para Simple S/5 y 2 para Doble S/9")
console.log(escogeHamburguer)
if( escogeHamburguer === 1){
    precioHamburguesa = 5
}else{
    precioHamburguesa = 9
}
console.log(precioHamburguesa)


let escogeCantidad = +prompt("Ahora indique cuantas Hamburguesas va a desear")
console.log(escogeCantidad)

let total = escogeCantidad * precioHamburguesa

console.log(`En total son ${escogeCantidad} hamburguesas del tipo ${escogeCantidad} y seria un total de ${total} soles`)