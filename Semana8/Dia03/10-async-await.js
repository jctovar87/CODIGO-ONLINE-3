// FORMA CONVENCIONAL
// let traerData = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Datos Obtenidos")
//         // reject("Error al obtener Datos")
//     })
// }

// Otra forma usando ASYNC
let traerData = async () => {
    return "Datos Obtenidos"    // equivalente al resolve
    // throw "Error al obtener Data"   // equivalente al reject
}

// traerData()
// .then(rpta => console.log(rpta))
// .catch(error => console.log(error))

let usarData = async () => {

    try{
        let rpta = await traerData()
        console.log(rpta)
    } catch(error){
        console.log(error)
    }

}

usarData()