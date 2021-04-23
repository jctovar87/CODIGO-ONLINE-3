// 1. Pedir al usuario su nombre y su apellido y mostrarles un saludo
let datos=prompt("Cual es su nombre y apellido?")
console.log("Buenas noches", datos)

// 2. CAlcular  el area de una trinagulo isosceles preguntando al usuario base y altura
let base=prompt("Para hallar el area del trinagulo necesitamos que nos indique cuanto mide la base en cm")
let altura=prompt("Ahora ingrese la altura")
let area= base*altura/2
console.log("El area del trinagulo es", area+"cm cuadrados")

// 3. preguntar al usuario por 2 numeros y mostrar su residuo
let numero1=prompt("Profavor ingrese el primer valor")
let numero2=prompt("ahora ingrese el segundo valor")
let residuo=parseInt(numero1)%parseInt(numero2)
console.log("El residuo seria de :", residuo)
