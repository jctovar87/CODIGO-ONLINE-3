let edad =+prompt("Cual es tu edad?")
// Puedo poner el + adelante para pasar el valor capturado a numero
// Veamos si esta habilitado para votar
// if(condicion){
// }

if(edad>18){
    console.log("Tienes DNI Azul, puedes votar")
    console.log(typeof edad)
}else{
    console.log("Tienes DNI amarillo, entonces no puedes votar")
}

