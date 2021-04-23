let a = 100
let b=4
let suma=a+b
console.log("suma", suma)

let resta = a-b
console.log("resta", resta)

let multiplicacion = a*b
console.log("multiplicacion", multiplicacion)

let division = a/b
console.log("division", division)

let raiz = Math.sqrt(144)
console.log("Raiz Cuadrada", raiz)

let residuo = 105%4
console.log("modulo", residuo)

// Concatenacion

let saludo="Hola Soy"
let nombre="Juan Carlos"
console.log(saludo+nombre+", que tal")
console.log(nombre+" " +30+" años")

console.log("11" + 1)
console.log("11" - 1)

// cuando utilizamos `` puedo poner dentro ${cosas_de_js} - Es un template string
// ALT + 96 = ``
let miEdad=35
let texto = `Hola soy ${nombre} soy de Lima y tengo ${miEdad}`
console.log(texto)

// PROMPT
// Es la primera manera de capturar datos y asignarlo a una variable para imprimirlo en pantalla
let cantidadPerretes=prompt("Cuantas mascotas tienes?")
console.log(`Mascotas ${cantidadPerretes}`)

console.log(typeof cantidadPerretes)    //Todo lo ingresado por promt es texto osea string

// let mascotasConvertidas1=parseInt(cantidadPerretes) // Forma 01 de convertir string a texto
let mascotasConvertidas1=+cantidadPerretes     // Forma 02 agregandole un + delante de la variable
console.log(typeof mascotasConvertidas1)