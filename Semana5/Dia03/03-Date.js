let hoy = new Date()
// Captura la fecha y hora actual
console.log(hoy)

// Año
console.log(hoy.getFullYear())

// Mes - comienza desde 0: enero, 1: febrero, 2: Marzo ......
console.log(hoy.getMonth())

// Dia
console.log(hoy.getDate())

// 
let navidad = new Date(2021, 11, 25)
console.log(navidad)

let cuantoFaltaParaNavidad = navidad - hoy
console.log(cuantoFaltaParaNavidad)     // arroja el valor en milisegundos

let diasParaNavidad = cuantoFaltaParaNavidad /1000 /60 /60 /24

console.log(diasParaNavidad)

// Se debe usar date-nfs para ser mas acceible
// https://date-fns.org/

