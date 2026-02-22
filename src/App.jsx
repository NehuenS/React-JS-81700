// import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import ListaProductos from './componentes/ListaProductos.jsx';
import "./App.css";
import NavBar from './componentes/NavBar.jsx';
import ProductoDetalle from './componentes/ProductoDetalle.jsx';
import { CarritoProvider } from './contexto/CarritoContexto.jsx';
import Carrito from "./componentes/Carrito.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ListaProductos />} />
          <Route path="/categoria/:categoriaId" element={<ListaProductos />} />
          <Route path="/producto/:productoId" element={<ProductoDetalle />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={
            <div>
              <h1>404: Página no encontrada</h1>
              <Link to="/">Regresar al home</Link>
            </div>
          } />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>

  )
}
