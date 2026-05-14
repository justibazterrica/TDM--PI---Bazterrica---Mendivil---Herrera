import { useState } from "react";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom";

const cookies = new Cookies();

function Crear(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    function evitarSubimit(event) {
        event.preventDefault();
   
        let usuariosGuardados = localStorage.getItem("Usuarios");

        if (usuariosGuardados === null) {
            usuariosGuardados = [];
        } else {
            usuariosGuardados = JSON.parse(usuariosGuardados);
        }

        let usuarioExistente = usuariosGuardados.filter((usuario) => {
            return usuario.email === email;
        });

        if (usuarioExistente.length > 0) {
            setError("El email ya está en uso");
            return;
        } 

        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        let usuarioNuevo = {
            email: email,
            password:password
        };
      
        usuariosGuardados.push(usuarioNuevo);

        localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

        cookies.set("user-auth-cookie", email);

        setEmail("");
        setPassword("");
        setError("");

        props.history.push("/");
    }

    function controlarEmail(event) {
        setEmail(event.target.value );
    }

    function controlarPassword(event) {
        setPassword(event.target.value);
    }

        let mensajeError = null;

        if (error !== "") {
            mensajeError = <p>{error}</p>;
        }

        return (
            <div>
                <h2>Crear Cuenta:</h2>

                <form onSubmit={evitarSubimit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={controlarEmail}
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={controlarPassword}
                    />

                    <button type="submit">Crear cuenta</button>
                </form>

                {mensajeError}
            </div>
        );
    }

export default withRouter(Crear);

