import { NavLink } from "react-router";
import CarritoWidget from "./CarritoWidget"

export default function NavBar() {
  const listaLinks = [
    { "key": "mascaras", "label": "Máscaras", "enlace": "/categoria/mascaras" },
    { "key": "protector", "label": "Protectores Térmicos", "enlace": "/categoria/protector" },
    { "key": "serum", "label": "Sérums", "enlace": "/categoria/serum" },
    { "key": "cepillo", "label": "Cepillos", "enlace": "/categoria/cepillo" }
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <h2 className="h4 mb-0">Toda La Onda</h2>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            {listaLinks.map((i) => (
              <li key={i.key} className="nav-item">
                <NavLink
                  to={i.enlace}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''}`
                  }
                >
                  {i.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav >
  )
}
