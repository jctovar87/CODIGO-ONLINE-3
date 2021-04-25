    // INVENTARIO

// Una bodega quiere hacer un inventario, ellos cuentan con 03 tipos de productos,: papitas, jabones y chocolate
// Queremos saber cuantos produsctos tiene en existencia

// Descomposicion
// Reglas: Manejamos 3 productos
// Cada producto tendra su cantidad al final
// Tendremos que preguntar producto por producto
// Que datos o variables ebemos tener:
// 1. variables para cada producto
// 2. Cantidad de productos en total

// Patrones
// Que tarea va a ser repetitiva?
// contar los productos


let cantProductos = +prompt("Cuantos productos contaras? ")
let papitas = 0
let jabones = 0
let chocolates = 0

for (let i = 0; i < cantProductos; i++){
    let producto = +prompt(" Ingrese 1 para PAPITAS, 2 para JABONES, 3 para CHOCOLATES")

    switch(producto){
        case 1:
            papitas++;
            break
        case 2:
            jabones++;
            break
        case 3:
            chocolates++;
            break
        default:
            alert("Numero erroneo, ingrese de nuevo");
            i--
    }
}

console.log(`En total hay: \n
            Papitas: ${papitas} \n
            Jabones: ${jabones} \n
            Chocolate: ${chocolates} \n`)
