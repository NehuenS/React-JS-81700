import { NavLink } from "react-router";
// import CartWidget from "./CartWidget"

export default function NavBar() {
  const listaLinks = [
    { "key": "mascaras", "label": "Máscaras" },
    { "key": "protector", "label": "Protectores Térmicos" },
    { "key": "serum", "label": "Sérums" },
    { "key": "cepillo", "label": "Cepillos" },
  ];
  return (
    <nav>
      <NavLink to="/">
        <h2>TLD</h2>
      </NavLink>
      <ul>
        {listaLinks.map((i) => (
          <li key={i.key}>
            <NavLink to={"/category/" + i.key}>{i.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav >
  )
}
