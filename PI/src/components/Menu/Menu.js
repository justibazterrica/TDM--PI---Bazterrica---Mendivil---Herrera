import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Menu() {

  let usuario = cookies.get("user-auth-cookie");

  let opciones = [
    { name: "Home", path: "/" },
    { name: "Películas", path: "/peliculas" },
    { name: "Series", path: "/series" },
    ];

  if (usuario) {
    opciones.push({ name: "Favoritos", path: "/favoritos" });

  } else {
    opciones.push({ name: "Crear", path: "/crear" });
    opciones.push({ name: "Login", path: "/login" });
  }

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