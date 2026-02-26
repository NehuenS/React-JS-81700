import { useContext, useState } from "react"
import CarritoContexto from "../contexto/CarritoContexto"
import { createOrdenDeCompra } from "../datos/firestore"

export default function Carrito() {
  const { carrito, totalCarrito, vaciarCarrito, eliminarProducto } = useContext(CarritoContexto);
  const [formData, setFormData] = useState({
    comprador: "",
    telefono: "",
    email: ""
  });

  function checkout(e) {
    e.preventDefault();
    const ordenDeCompra = {
      comprador: formData,
      productos: carrito,
      total: totalCarrito(),
      fecha: new Date()
    }
    createOrdenDeCompra(ordenDeCompra);
    alert(`GRACIAS ${formData.comprador}, POR SU COMPRA!`);
    reinicializar();
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
      <div className="container mt-4">
        <h2 className="text-center mb-4">Tu Carrito</h2>
      </div>
      {
        carrito.length === 0
          ? (<div className="container"><h3 className="text-center">El carrito esta vacio</h3></div>)
          : (
            <div className="container">
              <div className="row g-4 mb-4 justify-content-center">
                {carrito.map(producto => (
                  <div key={producto.id} className="col-md-8">
                    <div className="card position-relative">
                      <button
                        className="btn btn-danger position-absolute top-0 end-0 m-2 z-index-1"
                        onClick={() => eliminarProducto(producto)}
                      >
                        🗑️
                      </button>
                      <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">
                          <span className="d-block">Precio unitario: ${producto.precio}</span>
                          <span className="d-block">Cantidad: {producto.cantidad}</span>
                          <span className="d-block fw-bold">Subtotal: ${producto.precio * producto.cantidad}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mb-4">
                <h4>Total: ${totalCarrito()}</h4>
              </div>
            </div>
          )
      }
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={checkout} className="card p-4 shadow">
              <h4 className="card-title text-center mb-4">Datos de Compra</h4>
              <div className="mb-3">
                <label htmlFor="comprador" className="form-label">Nombre completo</label>
                <input
                  className="form-control"
                  onChange={actualizarDatos}
                  name="comprador"
                  type="text"
                  placeholder="Ingrese su nombre completo"
                  value={formData.comprador}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  className="form-control"
                  onChange={actualizarDatos}
                  name="email"
                  type="email"
                  placeholder="usuario@provedor.com"
                  value={formData.email}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                  className="form-control"
                  onChange={actualizarDatos}
                  name="telefono"
                  type="tel"
                  placeholder="1123456789"
                  value={formData.telefono}
                  required
                />
              </div>
              <br />
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">Confirmar compra</button>
                <button className="btn btn-secondary" onClick={reinicializar} type="reset">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}