let edad =+prompt("Cual es tu edad?")
// Puedo poner el + adelante para pasar el valor capturado a numero
// Veamos si esta habilitado para votar
// if(condicion){
// }

//DIA 1
// if(edad>18){
//     console.log("Tienes DNI Azul, puedes votar")
//     console.log(typeof edad)
// }else{
//     console.log("Tienes DNI amarillo, entonces no puedes votar")
// }

// DIA 2
if(edad>=18){
    console.log("Tienes DNI azul PUEDES VOTAR")
} else if( edad<18 && edad >= 0){
    console.log("Tienes DNI amarillo NO PUEDES VOTAR")
}else{
    console.log("Ingrese un valor adecuado")
}


let numero =+prompt("Ingrese un numero")

if(numero >120 ||)