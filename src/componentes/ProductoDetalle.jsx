
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
    <div className="item-card">
      <img src={producto.image} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <h5>$ {producto.precio}</h5>
      <p>{producto.descripcion}</p>
      <Contador onAgregar={(c) => agregarACarrito(producto, c)} />
    </div>
  )
}