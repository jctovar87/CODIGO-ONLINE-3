// let bebidas = ["Inka cola", "Sprite", "Frugos", "Coca Cola"]

// console.log(bebidas)

// let nuevaBebida = prompt("Ingrese una nueva Bebida")

// // Agrega un elemento al final del OBJETO
// bebidas.push(nuevaBebida)

// console.log(bebidas)

// let frutas = ["Naranaja", "Pera", "Papaya"]
// console.log(frutas)

// // Elimina el ultimo elemento del OBJETO
// frutas.pop()
// console.log(frutas)

//////////////////////////////////////////////////////////

let animales = ["Gatos", "Perros", "Vacas", "Pinguinos", "Zorros"]

// Por cada elemento en el OBJETO animales, muestr lo que le indiquemos en el console.log de la funcion foreach
// animales.forEach(function(){
//     console.log("animal")
// })

// En este caso por cada elemento en el objeto, pinta el index (id de cada caracteristica) y el elemento (caracteristica)
animales.forEach(function(elemento, index){
    console.log(`${index} - ${elemento}`)
    //Foreach no retorna
})


let alumnos = ["Veronica", "Alejandra", "Jhan", "Juan Carlos", "Violeta"]

let alumnosSaludos = alumnos.map(function(nombre, index){
    return `${index +1} - Hola Soy ${nombre} `
    // Map si retorna y podemos usar la nueva variable
})

console.log(alumnosSaludos)
// ///////////////////////////////////////////////////////////////////

let conductores = [
    {
        nombre: "Lezly",
        tieneMascarilla: true
    },
    {
        nombre: "Daniel",
        tieneMascarilla: true
    },
    {
        nombre: "Jorge",
        tieneMascarilla: false
    },
    {
        nombre: "Linder",
        tieneMascarilla: true
    }
]

let puedePasar = conductores.filter(function(elemento, index){
    // FORMA 1
    // if(elemento.tieneMascarilla === true){
    //     return elemento
    // }
    // FORMA 2 - Mas corto
    return elemento.tieneMascarilla === true
})

console.log(puedePasar)

///////////////////////////////////////////////////////////////////

let dnis = ["43234566", "31243433", "23442376", "23145678"]

let encontrado = dnis.find(function(elemento, index){
    return elemento === "23442376"
}
)

console.log(encontrado)