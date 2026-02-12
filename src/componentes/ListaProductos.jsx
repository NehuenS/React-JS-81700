
import Producto from "./Producto.jsx"
import { getProductos, getCategoria } from '../database/firestore'
import { useEffect, useState } from "react"
import { useParams } from "react-router"


export default function ProductoListContainer() {
  const [products, setProducts] = useState([]);

  const { categoriaId } = useParams();
  console.log(categoriaId)


  useEffect(() => {
    if (categoriaId) {
      getCategoria(categoriaId).then(respuesta => setProducts(respuesta))
    }
    else {
      getProductos().then(respuesta => setProducts(respuesta))
    }
  }, [categoriaId])

  return (
    <section className="Producto-list-container">
      <h2>Toda La Onda</h2>
      <div className="Productolist">
        {
          products.map(
            (producto) => <Producto
              key={producto.id}
              {...producto} // spread
            />
          )
        }
      </div>
    </section>
  )
}