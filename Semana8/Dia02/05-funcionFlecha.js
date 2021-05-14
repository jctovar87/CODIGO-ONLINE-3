

// Cuando es un solo parametro se puede usar asi:
// let saludar = nombre => {

// Otra forma de hacerlo en una linea:
// let saludar = nombre `Hola soy ${nombre}`;

// Cuando son varios parametros
let saludar = (nombre) => {

    return `Hola soy ${nombre}`
}

let saludando = saludar("JuanSe");

console.log(saludando)

// Diferencia entre una funcion y una funcion flecha (Arrow Function)

let Mouse = {
    nombre: "Mickey",
    apellido: "Mouse",
    
    presentarse: function(){
        console.log(`Hola yo me llamo ${this.nombre} y mi apellido es ${this.apellido}`)
    }

    // Funcion Flecha falla en este PushSubscriptionOptions, devuelve undefined
    // presentarse: () => {
    //     console.log(`Hola yo me llamo ${this.nombre}`)
    // }


}

Mouse.presentarse()