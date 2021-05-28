import React from 'react';
import ListarProductosView from "./views/listarProductosView"
import crearProductosView from "./views/crearProductosView"

function App(){
  return (
    <div className="container p-3">
        <ListarProductosView/>
        <crearProductosView/>
    </div>
  )
}

export default App

