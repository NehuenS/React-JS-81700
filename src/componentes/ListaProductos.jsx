
import Producto from "./Producto"
import { getProductos, getCategoria } from '../database/firestore'
import { useEffect, useState } from "react"
import { useParams } from "react-router"


export default function ProductoListContainer(props) {
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
      <h2>Hola, bienvenidos a mi tienda {props.greeting} </h2>
      <div className="Productolist">
        {
          products.map(
            (Producto) => <Producto
              key={Producto.id}
              {...Producto} // spread
            />
          )
        }
      </div>
    </section>
  )
}