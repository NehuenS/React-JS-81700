import { Link } from "react-router"

export default function Producto({ title, img, price, id }) {
  return (
    <div className="item-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>$ {price}</p>

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