let hornearTorta = () => {
    // Como el horneado demora o no se sabe como saldra
    // resolve = va bien, reject = va mal
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve("La torta esta lista")
            } else{
                reject("POS se quemo ")
            }

        }, 5000)
    })
}

hornearTorta()
// Va a ejecutarse si las cosas fueron bien = resolve
.then((tortaHorneada) => {
    console.log(tortaHorneada)
})
// Va a ejecutarse si las cosas fueron mal = reject
.catch((tortaQuemada) => {
    console.log(tortaQuemada)
})