import React, {useState} from 'react'
import {obtenerProductos} from "../services/productoServices"

function ListarProductosView(){
    const [productos, setProductos] = userState([])

    const getProductos = () = > {
        try{
            const productosObtenidos = await obtenerProductos (
                setProductos(productosObtenidos)
            )
        } catch (error) {
            console.log(error)
        }

    }

    return (

        <div>

            <table>
                <thead>
                    <tr>
                        <th>nombre</th>
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