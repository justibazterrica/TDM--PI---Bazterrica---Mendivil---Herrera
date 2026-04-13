import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Resultados from "../../Screens/Resultados/Resultados";

import "./styles.css"

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
    }

    evitarSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/Resultados/${this.state.search}`);
    }

    onSubmit(event) {
        console.log("Buscando:", this.props);
    }

    guardarBusqueda(event) {
        this.setState(
            {search: event.target.value}, 
            () => {console.log("Evento:", this.state.search);} )
        console.log("Evento:", this.state.search);
    }
       
  render() {
    return (
      <div>
        <form className = "buscador" onSubmit = {(event) => this.evitarSubmit(event)}>
          <input onChange = {(event) => this.guardarBusqueda(event)}/>
           <button className="boton" type="submit">Buscar  </button>
        </form >
      </div>
    )
  }
}

export default withRouter(Buscador);
