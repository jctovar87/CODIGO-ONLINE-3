// console.log nos va a servir para mostrar en la consola loq ue deseemos, es util para hacer debug, o para hacernos una idea de que esta ocurriendo con nuestro codigo
console.log("Hola CodiGO!!")
console.log("Pensando con la pensadora")

// VARIABLES, EMPEZAMOS CON VAR (EL MAS ANTIGUO)
var nombre = "Juan Carlos"
var edad   = 36

console.log("Mi nombre es: "+nombre)
console.log(edad)

nombre="Carlos Juan"
console.log("Ahora mi nombre es: "+nombre)

// AHORA USAREMOS LET
let nombrePerro = "Backus"
let edadPerro=5
console.log("Mi perro se llama: "+nombrePerro+" y su edad es: "+edadPerro)

/////////////////////////////////////////////////////////////////////////////////////
// En este caso siempre va a mostrar el valor de nombre aunque ya haya sido declarado
// var nombre = "Luna"
// console.log(nombre)

// En caso nos va a arrojar una error ya que esta variable ya fue declarada, y si queremos cambiarle el valor debemos setearlo mas no delcararlo de nuevo
// let nombrePerro="Canijo"
// console.log(nombrePerro)
/////////////////////////////////////////////////////////////////////////////////////

// TIPOS DE DATOS
// En las variables no puede una tilde, eñe, caracteres raros y no pueden empezar con numero
// Si tiene comillas es STRING
// Si es numero (sin comillas) es un NUMBER

// STRING
let anio=2021
anio="2022"
console.log(anio)

// Typeof nos indica que tipo de valor tiene una variable
console.log(typeof anio)

// NUMBER
let edadBackus = 12
console.log(typeof edadBackus)

// BOOLEANO
let esDeNoche = true
let ellaLesQuiere=false
console.log(typeof esDeNoche)
console.log(ellaLesQuiere)

// VALORES DE TIPO RARO
let nota
console.log(nota)

let nulo =null  // No hay valor
console.log(nulo)

let rareza = (1000/"patatas")
console.log(rareza)
// NaN: Not a Number

