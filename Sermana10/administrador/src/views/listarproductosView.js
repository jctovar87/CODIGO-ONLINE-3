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


        </div>
    )

}