let encontrarUsuario = () => {
    // Como el horneado demora o no se sabe como saldra
    // resolve = va bien, reject = va mal
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(usuario === ){
                resolve("Alumno encontrado")
            } else{
                reject("Alumno no encontrado")
            }

        }, 5000)
    })
}

fetch("https://609f105d5f32be00171cd33b.mockapi.io/alumnos")
.then((respuesta) => {




    return respuesta.json() // status: code, headers 
})
.then((alumnos) => {
    console.log(alumnos)    // Aca se obtiene los datos
})
.catch((error) => {
    console.log(error)
})