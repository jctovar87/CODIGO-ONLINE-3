function calculaAreaTriangulo(base, altura){    //dentro del parentesis debo declarar las variables que usare
    // console.log("Estoy ejecutandome en una funcion")
    let area=base*altura/2
    console.log(area)
    return area     //hace que el codigo de mi funcione termine ahi, si hay algo despues eso ya no se ejecuta
}

let resultado=calculaAreaTriangulo(20, 10)  // FORMA 2
console.log(resultado)                      

// calculaAreaTriangulo(20, 10)                // FORMA 1

let nombre="Daniel"
function imprimirNombre(){
    console.log(nombre)
    
}

imprimirNombre()