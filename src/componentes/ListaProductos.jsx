
import Producto from "./Producto.jsx"
import { getProductos, getCategoria } from '../datos/firestore.js'
import { useEffect, useState } from "react"
import { useParams } from "react-router"


export default function ListaProductos() {
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
    <section className="container my-4">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {
          productos.map(
            (producto) => <div key={producto.id} className="col">
              <Producto
                {...producto}
              />
            </div>
          )
        }
      </div>
    </section>
  )
}