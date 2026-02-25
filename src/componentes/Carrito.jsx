import { useContext, useState } from "react"
import CarritoContexto from "../contexto/CarritoContexto"
import { createOrdenDeCompra } from "../datos/firestore"

export default function Carrito() {
  const { carrito, totalCarrito, vaciarCarrito } = useContext(CarritoContexto);
  const [formData, setFormData] = useState({
    comprador: "",
    telefono: "",
    email: ""
  });

  function checkout() {
    const ordenDeCompra = {
      comprador: formData,
      productos: carrito,
      total: totalCarrito(),
      fecha: new Date()
    }
    createOrdenDeCompra(ordenDeCompra);
    reinicializar();
  }

  function enviarForm(e) {
    e.preventDefault()
    alert(`GRACIAS ${formData.comprador}, POR SU COMPRA!`);
  }

  function actualizarDatos(e) {
    const { value, name } = e.target;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  }
  function reinicializar() {
    setFormData({
      comprador: "",
      telefono: "",
      email: ""
    });
    vaciarCarrito();
  }

  return (
    <>
      <div>
        <h2>Tu Carrito</h2>
      </div>
      {
        carrito.lenth === 0
          ? (<h3>El carrito esta vacio</h3>)
          : (
            carrito.map(producto =>
            (<div key={producto.id}>
              <h4>{producto.nombre}</h4>
              <span>Precio unitario: {producto.precio}</span>
              <span>Cantidad: {producto.cantidad}</span>
              <span>Subtotal: {producto.precio * producto.cantidad}</span>
            </div>)
            )
          )
      }
      <form onSubmit={enviarForm}>
        <label for="username">
          Nombre:
          <input
            onChange={actualizarDatos}
            name="comprador"
            type="text"
            placeholder="Nombre completo"
            value={formData.username}
          />
        </label>
        <br />
        <label for="email">
          Email:
          <input
            onChange={actualizarDatos}
            name="email"
            type="email"
            placeholder="usuario@provedor.com"
            value={formData.email}
          />
        </label>
        <br />
        <label for="phone">
          Teléfono:
          <input
            onChange={actualizarDatos}
            name="telefono"
            type="number"
            placeholder="1123456789"
            value={formData.phone}
          />
        </label>
        <br />
        <br />
        <div className="cart-actions">
          <button className="checkout-btn" onClick={checkout}>Confirmar compra</button>
        </div>
        <br />
        <button onClick={reinicializar} type="reset">Cancelar</button>
      </form>
    </>
  )
}