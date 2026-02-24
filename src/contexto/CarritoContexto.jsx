import { createContext, useState } from "react";

const CarritoContexto = createContext({ carrito: {} });

const CarritoContextoProvider = CarritoContexto.Provider;

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState({});

  function agregarACarrito(producto, cantidad) {
    const nuevoCarrito = structuredClone(carrito);
    nuevoCarrito[producto.id]= { ...producto, cantidad: cantidad }
    //{id:{...producto, cantidad: ###}}
    setCarrito(nuevoCarrito);
  }

  function eliminarProducto (producto) {
    const nuevoCarrito = carrito.filter(i => i.id !== producto);
    setCarrito(nuevoCarrito);
  }

  function productosEnCarrito() {
    return carrito.reduce((a, x) => a + x.cantidad, 0);
  }

  function totalCarrito() {
    return carrito.reduce((a, x) => a + (x.cantidad * x.precio), 0);
  }

  function vaciarCarrito() {
    setCarrito({});
  }

  return (
    <CarritoContextoProvider value={{ carrito: carrito, agregarACarrito, eliminarProducto, productosEnCarrito, totalCarrito, vaciarCarrito}}>
      {children}
    </CarritoContextoProvider>
  );
}
export default CarritoContexto;
