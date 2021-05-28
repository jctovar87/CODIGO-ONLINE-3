import axios from "axios"

const URL = "https://60b0297c1f26610017ffddaf.mockapi.io/Productos"

const obtenerProductos = async () => {
    try{
        let {data} = await axios.get(URL)
        return data
    
    } catch(error){
        throw error;
    }
}

const crearProducto = async(nuevoProducto) => {
    try {
        let headers = {
            "Context-Type":"application/json"
        }
        let {data} = await axios.post(URL, nuevoProducto, {headers})
        return data
        
    } catch (error) {
        throw error;
        
    }
}


export {
    obtenerProductos,
    crearProducto
}