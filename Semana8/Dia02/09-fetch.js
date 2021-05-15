///////////////////////////////////////// FETCH GET
fetch("https://reqres.in/api/users?page=2")
.then((respuesta) => {
    // console.log(respuesta);
    return respuesta.json()    //.json() va a parsear/convertir
})
.then((datos) => {
    console.log(datos)
})
// //////////////////////////////////////////////////////////
// POST - Envia Datos, Crea un Recurso

// nuevo usuario a enviar
let nuevoUsuario = {
    name: "Sebastian",
    job: "Tutor"
}

// cabecera - guia de remision
let cabecera = {
    // metodo HTTP, contenido, body = datos = nuevoUsuario
    method: 'POST', // PUT, DELETE
    headers: {
        "Content-type":"application/json" //Para que la api sepa como procesarlo

    },   
    body: JSON.stringify(nuevoUsuario)
}
// fetch(url, cabecera_con_body)
fetch("https://reqres.in/api/users", cabecera)
.then((respuesta) => {
    // console.log("POST",respuesta)
    return respuesta.json
})
.then((datosCreados) => {
    console.log(datosCreados)

})

////////////////////////////// Obtener data de Mockapi 

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

///////////////////////// PUT a MockAPI (Modificaremos nombre y apellido al ID 2)

let alumnoEditado = {
    nombres: "Bruck",
    apellidos: "Tomas",
    edad: 69,
    dni: "43526566"
}

let configuracion = {
    method: 'PUT',
    headers: {
        "Content-type": "application/json"
    },
    body:JSON.stringify(alumnoEditado)
}

// endpoint => url/api/v1/usuario/:id, los : representan un parametro que hay que indicarle
fetch("https://609f105d5f32be00171cd33b.mockapi.io/alumnos/4", configuracion)
.then((respuesta) => {
    return respuesta.json()
})
.then((alumnoModificado) => {
    console.log(alumnoModificado)
})
.catch((error) => {
    console.log(error)
})
















