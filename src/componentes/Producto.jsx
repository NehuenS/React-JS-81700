import { Link } from "react-router"
import Boton from "./Boton"

export default function Producto({ id, descripcion, image, nombre, precio }) {
  return (
    <div className="card w-100 h-100 d-flex flex-column producto-card">
      <img src={image} alt={nombre} className="card-img-top img-fluid producto-foto" />
      <div className="card-body d-flex flex-column flex-grow-1">
        <h4 className="card-title text-center">{nombre}</h4>
        <h5 className="card-text h6 text-center fw-bold fs-5">$ {precio}</h5>
        <p className="card-text flex-grow-1">{
          descripcion.length > 75 ? descripcion.substring(0, descripcion.indexOf(" ", 74)) + "..." : descripcion
        }</p>

        <div className="mt-auto">
          <Link to={`/producto/${id}`}>
            <Boton clases="btn btn-primary w-100" etiqueta="Ver producto" />
          </Link>
        </div>
      </div>
    </div>
  )
}