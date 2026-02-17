
import Producto from "./Producto.jsx"
import { getProductos, getCategoria } from '../database/firestore'
import { useEffect, useState } from "react"
import { useParams } from "react-router"


export default function ProductoListContainer() {
  const [productos, setProductos] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      getCategoria(categoriaId).then(respuesta => setProductos(respuesta))
    }
    else {
      getProductos().then(respuesta => setProductos(respuesta))
    }
  }, [categoriaId])

  return (
    <section className="Producto-list-container">
      <h2>Toda La Onda</h2>
      <div className="Productolist">
        {
          productos.map(
            (producto) => <Producto
              key={producto.id}
              {...producto}
            />
          )
        }
      </div>
    </section>
  )
}