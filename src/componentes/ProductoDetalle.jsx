
// import Producto from "./Producto.jsx"
import { getProducto } from '../datos/firestore.js'
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Boton from './Boton.jsx';
import CarritoContextoProvider from '../contexto/CarritoContexto.jsx';


export default function ProductoDetalle() {

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
      <Boton etiqueta="+" clickHandler="agregarACarrito()" />
    </div>
  )
}