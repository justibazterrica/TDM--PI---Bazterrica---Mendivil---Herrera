import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  const opciones = [
    { name: "Home", path: "/" },
    { name: "Películas", path: "/peliculas" },
    { name: "Series", path: "/series" },
    { name: "Favoritos", path: "/favoritos" },
    { name: "Crear", path: "/crear" },
    { name: "Login", path: "/login" }
  ];

  return (
    <section>
    <ul className="nav nav-tabs my-4">
      {opciones.map((opcion, idx) => (
        <li className="nav-item" key={idx}>
          <Link className="nav-link" to={opcion.path}>
            {opcion.name}
          </Link>
        </li>
      ))}
    </ul>
    </section>
  );
}

export default Menu;