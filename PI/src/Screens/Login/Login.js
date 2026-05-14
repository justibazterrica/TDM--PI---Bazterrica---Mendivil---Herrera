import React, { useState } from "react";
import Cookies from "universal-cookie";
import "./styles.css";
import { withRouter } from "react-router-dom";

const cookies = new Cookies();

function Login(props) {

  const [emaillog, setEmailLog] = useState("");
  const [passwordlog, setPasswordLog] = useState("");
  const [error, setError] = useState("");

  function onSubmit(evento) {
    evento.preventDefault();

    const usersStorage = localStorage.getItem("Usuarios");

    if (usersStorage === null || usersStorage.length === 0) {
      setError("Las credenciales son inválidas");
      return;
    }

    let userParseado = JSON.parse(usersStorage);

    let usersFiltrado = userParseado.filter(
      (user) => user.email === emaillog
    );

    if (usersFiltrado.length > 0) {

      if (usersFiltrado[0].password === passwordlog) {

        cookies.set("user-auth-cookie", emaillog);

        props.history.push("/");

      } else {

        setError("Contraseña incorrecta");

      }

    } else {

      setError("Usuario no encontrado");

    }
  }

  return (
    <section>

      <h1>Log in:</h1>

      <form onSubmit={onSubmit}>

        <label>Email:</label>

        <input
          className="inpute"
          value={emaillog}
          onChange={(e) => setEmailLog(e.target.value)}
        />

        <label>Password:</label>

        <input
          className="inputp"
          type="password"
          value={passwordlog}
          onChange={(e) => setPasswordLog(e.target.value)}
        />

        <button type="submit">Log in</button>

      </form>

      <p>{error}</p>

    </section>
  );
}

export default withRouter(Login);