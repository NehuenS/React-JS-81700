
// import Producto from "./Producto.jsx"
import { getProducto } from '../datos/firestore.js'
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router"
import CarritoContexto from "../contexto/CarritoContexto"
import Contador from "./Contador"


export default function ProductoDetalle() {
  const { agregarACarrito } = useContext(CarritoContexto);

  const [producto, setProducto] = useState([]);

  const { productoId } = useParams();

  useEffect(() => {
    getProducto(productoId).then(respuesta => setProducto(respuesta))
  }, [productoId])

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <img src={producto.image} alt={producto.nombre} className="card-img-top img-fluid producto-detalle-foto" />
            <div className="card-body">
              <h3 className="card-title text-center">{producto.nombre}</h3>
              <h4 className="card-text h6 text-center fw-bold fs-5">$ {producto.precio}</h4>
              <p className="card-text flex-grow-1">{producto.descripcion}</p>
              <div className="mt-3">
                <Contador onAgregar={(c) => agregarACarrito(producto, c)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}