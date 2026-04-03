import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  const opciones = [
    { name: "Home", path: "/" },
    { name: "Películas", path: "/movies" },
    { name: "Series", path: "/series" },
    { name: "Favoritos", path: "/favorites" },
    { name: "Crear", path: "/crear" },
    { name: "Login", path: "/login" }
  ];

  return (
    <ul className="nav nav-tabs my-4">
      {opciones.map((opcion, idx) => (
        <li className="nav-item" key={idx}>
          <Link className="nav-link" to={opcion.path}>
            {opcion.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;