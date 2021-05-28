import React from 'react'

function formProducto() {

    const [colores, setColores] = useStat([])
    const inputColor = useRef()
    const anadirColor = () => {
        let nuevoColor = inputColor.current.value
        setColores([...colores, nuevoColor])
    }

    return (

        <div>
            <form>
                <div>
                    <label>Nombre</label>
                    <input type="text" className="form-control">
                    </input>    
                </div>
                <div>
                    <label>Descripcion</label>
                    <input type="text" className="form-control">
                    </input>    
                </div>
                <div>
                    <label>Precio</label>
                    <input type="text" className="form-control">
                    </input>    
                </div>
                <div>
                    <label>Stock</label>
                    <input type="text" className="form-control">
                    </input>    
                </div>
                <div>
                    <label>Colores</label>
                    <input type="text" className="form-control">
                    </input>    
                    <button className="btn btn-primary btn-sm" onClick="{(e)=>{anadirColor(e)}}">
                    </button>
                </div>


            </form>

        </div>
    )
}

export default formProducto
