// La clase Math nos permite usar funciones Matematicas
console.log(`Raiz cuadrada de 144 = ${Math.sqrt(144)}`)

// Numeros aleatorios
console.log(`Un numero aleatorio entre 0 y 1 = ${Math.random()}`)
// Obtener un numero aleatorio entre 10 y 50
let random10y50 = Math.random() *(50-10) + 10
console.log(`numero aleatorio entre 10 y 50: ${random10y50}`)
// Redondeando a un decimal el resultado anterior
console.log(`redondeado ${random10y50.toFixed(1)}`)

console.log(`Pi: ${Math.PI}`)

console.log(`Euler: ${Math.E}`)