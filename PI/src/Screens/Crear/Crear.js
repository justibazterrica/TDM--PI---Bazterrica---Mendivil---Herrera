import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Crear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    evitarSubimit(event) {
        event.preventDefault();

        let usuariosGuardados = localStorage.getItem("Usuarios");

        if (usuariosGuardados === null) {
            usuariosGuardados = [];
        } else {
            usuariosGuardados = JSON.parse(usuariosGuardados);
        }

        let usuarioExistente = usuariosGuardados.filter((usuario) => {
            return usuario.email === this.state.email;
        });

        if (usuarioExistente.length > 0) {
            this.setState({ error: "El email ya está en uso" });
            return;
        }

        if (this.state.password.length < 6) {
            this.setState({ error: "La contraseña debe tener al menos 6 caracteres" });
            return;
        }

        let usuarioNuevo = {
            email: this.state.email,
            password: this.state.password
        };

        usuariosGuardados.push(usuarioNuevo);

        localStorage.setItem("Usuarios", JSON.stringify(usuariosGuardados));

        cookies.set("user-auth-cookie", this.state.email);

        this.setState({
            email: "",
            password: "",
            error: ""
        });

        this.props.history.push("/");
    }

    controlarEmail(event) {
        this.setState({ email: event.target.value });
    }

    controlarPassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        let mensajeError = null;

        if (this.state.error !== "") {
            mensajeError = <p>{this.state.error}</p>;
        }

        return (
            <div>
                <h2>Crear Cuenta:</h2>

                <form onSubmit={(event) => this.evitarSubimit(event)}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(event) => this.controlarEmail(event)}
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={this.state.password}
                        onChange={(event) => this.controlarPassword(event)}
                    />

                    <button type="submit">Crear cuenta</button>
                </form>

                {mensajeError}
            </div>
        );
    }
}

export default Crear;
