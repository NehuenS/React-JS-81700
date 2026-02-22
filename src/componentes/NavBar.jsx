import { NavLink } from "react-router";
// import CartWidget from "./CartWidget"

export default function NavBar() {
  const listaLinks = [
    { "key": "mascaras", "label": "Máscaras", "enlace": "/categoria/mascaras" },
    { "key": "protector", "label": "Protectores Térmicos", "enlace": "/categoria/protector" },
    { "key": "serum", "label": "Sérums", "enlace": "/categoria/serum" },
    { "key": "cepillo", "label": "Cepillos", "enlace": "/categoria/cepillo" },
    { "key": "carrito", "label": "Carrito", "enlace": "/carrito" }
  ];
  return (
    <nav>
      <NavLink to="/">
        <h2>TLD</h2>
      </NavLink>
      <ul>
        {listaLinks.map((i) => (
          <li key={i.key}>
            <NavLink to={i.enlace}>{i.label}</NavLink> 
          </li>
        ))}
      </ul>
    </nav >
  )
}
