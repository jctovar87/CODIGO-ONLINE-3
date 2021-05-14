let alumnosDB = ["Jhan", "Erick", "Maximo", "Agustin", "Bryan", "Violeta", "Veronica", "Adriana"];

let buscarAlumno = (nombre, callback) =>{
    setTimeout(() => {
    
        for (let i = 0; i < alumnosDB.length; i++){
            if(alumnosDB[i] == nombre){
                // si es que SI se encuentra
                callback(true)
                return 
                // cuando ejecutamos return, se corta la ejecucion de la funcion 
            }

        }
           callback(false)
           // si es que NO se encuentra
    }, 300)
    
}

buscarAlumno("Agustin", (existe) => {
    if(existe === true){
        console.log("El alumno SI existe")
    }else{
        console.log("El alumno NO existe")
    }
})

