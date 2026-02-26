// import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { CarritoProvider } from './contexto/CarritoContexto.jsx';
import NavBar from './componentes/NavBar.jsx';
import ListaProductos from './componentes/ListaProductos.jsx';
import ProductoDetalle from './componentes/ProductoDetalle.jsx';
import Carrito from "./componentes/Carrito.jsx";
import CarritoWidget from "./componentes/CarritoWidget.jsx";

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
              <Link to="/">Regresar al inicio</Link>
            </div>
          } />
        </Routes>
        <CarritoWidget />
      </CarritoProvider>
    </BrowserRouter>

  )
}
