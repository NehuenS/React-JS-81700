import { Link } from "react-router"
import Boton from "./Boton"

export default function Producto({ id, descripcion, image, nombre, precio }) {
  return (
    <div className="item-card">
      <img src={image} alt={nombre} />
      <h3>{nombre}</h3>
      <h5>$ {precio}</h5>
      <p>{
        descripcion.length > 75 ? descripcion.substring(0, descripcion.indexOf(" ", 74)) + "..." : descripcion
      }</p>

      <Link to={`/producto/${id}`}>
        <Boton clases="item-card-button" etiqueta="Ver producto" />
      </Link>
    </div>
  )
}