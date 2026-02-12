import { Link } from "react-router"

export default function Producto({ id, categoria, descripcion, image, nombre, precio, stock }) {
  console.log(id);
  return (
    <div className="item-card">
      <img src={image} alt={nombre} />
      <h3>{nombre}</h3>
      <p>$ {precio}</p>

      <Link to={`/producto/${id}`}>
        <button className="item-card-button">Ver producto</button>
      </Link>
    </div>
  )
}

export function ItemButton() {
  return (
    <>
      <h2>Hola ItemButton</h2>
      <button>Click aquí</button>
    </>
  )
}