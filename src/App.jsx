// import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import ListaProductos from './componentes/ListaProductos.jsx';

import "./App.css";
import NavBar from './componentes/NavBar.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* <CartProvider> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<ListaProductos />} />
        {/* <Route path="/categoria/:categoriaId" element={<ItemListContainer />} /> */}
        {/* <Route path="/product/:itemID" element={<ItemDetailContainer />} /> */}
        {/* <Route path="/cart" element={<CartContainer />} /> */}
        <Route path="*" element={
          <div>
            <h1>404: Página no encontrada</h1>
            <Link to="/">Regresar al home</Link>
          </div>
        } />
      </Routes>
      {/* </CartProvider> */}
    </BrowserRouter>

  )
}
// <>
//   <div className="w-100 text-center pb-4">
//     <h1>Toda la Onda</h1>
//     <h2>Productos Capilares para Cabellos Ondulados</h2>
//   </div>
//   <div className="container w-75 g-2">
//     <Listing
//       nombre="Máscara Capilar Fidelité Caviar 1Kg"
//       precio="13000"
//       fotoURL="./src/assets/react.svg"
//       descripcion="Máscara Capilar Fidelité Caviar 1Kg"
//     />
//   </div>
// </>

export default App
