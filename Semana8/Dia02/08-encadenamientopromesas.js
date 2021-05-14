

let hornearTorta = () => {
    // Como el horneado demora o no se sabe como saldra
    // resolve = va bien, reject = va mal
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve("La torta esta lista")
            } else{
                reject("La torta se quemo ")
            }

        }, 5000)
    })
}

let prepararGlaseado = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Glaseado Listo!")
            // reject ("Se quemo el microondas")
        }, 4000)
    })
}

let cubrirTorta = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Torta Decorada!")
            // reject("Pidamos Rappi")
        }, 3000)
    })
}

hornearTorta()
// Va a ejecutarse si las cosas fueron bien = resolve
.then((tortaHorneada) => {
    console.log(tortaHorneada)
    // Tenemos exito horneando la torta
    // retornamos una funcion que retorne la nueva Promesa
    return prepararGlaseado();
})
.then((glaseadoListo) => {
    console.log(glaseadoListo)
    return cubrirTorta();
})
.then((tortaDecorada) => {
    console.log(tortaDecorada)
})
// Va a ejecutarse si las cosas fueron mal = reject
.catch((tortaQuemada) => {
    console.log(tortaQuemada)
})