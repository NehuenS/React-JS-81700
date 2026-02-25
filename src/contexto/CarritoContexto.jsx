import { createContext, useState } from "react";

const CarritoContexto = createContext({ carrito: [] });

const CarritoContextoProvider = CarritoContexto.Provider;

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  function agregarACarrito(producto, cantidad) {
    const nuevoCarrito = structuredClone(carrito);
    if (carrito.some(i => i.id === producto.id)) {
      nuevoCarrito.find(i => i.id === producto.id).cantidad = cantidad;
    } else {
      nuevoCarrito.push({ ...producto, cantidad: cantidad });
    }
    setCarrito(nuevoCarrito);
  }

  function eliminarProducto(producto) {
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
    setCarrito([]);
  }

  return (
    <CarritoContextoProvider value={{ carrito: carrito, agregarACarrito, eliminarProducto, productosEnCarrito, totalCarrito, vaciarCarrito }}>
      {children}
    </CarritoContextoProvider>
  );
}
export default CarritoContexto;
