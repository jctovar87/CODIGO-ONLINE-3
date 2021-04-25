let hamburguesaP = 5
let hamburguesaG = 9
let tipoHamburguesa =""
let precioHamburguesa = 0
let escogeCantidad = 0
let total = 0
let escogeHamburguer = 0

escogeHamburguer = +prompt("Por favor escoja que hamburguesa pedira: 1 para Simple S/5 y 2 para Doble S/9")

if(escogeHamburguer === 1 || escogeHamburguer === 2){

    if( escogeHamburguer === 1){
        precioHamburguesa = 5
        tipoHamburguesa="SIMPLE"
    }else if (escogeHamburguer == 2){
        precioHamburguesa = 9
        tipoHamburguesa="DOBLE"
    }
    
console.log(precioHamburguesa)

escogeCantidad = +prompt("Ahora indique cuantas Hamburguesas va a desear")
total = escogeCantidad * precioHamburguesa
console.log(`El total es ${escogeCantidad} hamburguesas del tipo ${tipoHamburguesa} y seria un total de S/. ${total} soles`)
    
} else{

    prompt("Ingrese un tipo valido de HAMBURGUESA")     
    
}


