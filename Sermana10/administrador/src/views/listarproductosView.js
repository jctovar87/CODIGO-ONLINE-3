import React, {useState, useEffect} from "react"
import {obtenerProductos} from "../services/productoServices"

function ListarProductosView(){
    const [productos, setProductos] = useState([]);

    const getProductos=async () => {
        try{
                const productosObtenidos = await obtenerProductos ()
                setProductos(productosObtenidos)
            
        } catch (error) {
            console.log(error)
        }

    };

    useEffect(() => {
        getProductos();
    }, []);

    return (

        <div>
            <h1>Productos Listados</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod, i) => (
                        <tr key={i}>
                            <td>{prod.nombre}</td>
                            <td>{prod.precio}</td>
                            <td>{prod.descripcion}</td>
                            <td>{prod.stock}</td>
                            <td></td>
                        </tr>
                                    
                    ))}
            
                </tbody>
            </table>
        </div>
    )

}

export default ListarProductosView