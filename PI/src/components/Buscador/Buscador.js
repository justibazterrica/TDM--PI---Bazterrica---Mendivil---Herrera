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
            tipo: "movie"
        }
    }

    evitarSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/Resultados/${this.state.tipo}/${this.state.search}`);

    }


    guardarBusqueda(event) {
        this.setState(
            {search: event.target.value}, 
            () => {console.log("Evento:", this.state.search);} )
        console.log("Evento:", this.state.search);
    }

    guardartipo(event) {
        this.setState({tipo:event.target.value})

    }
       
  render() {
    return (
      <div>
        <form className = "buscador" onSubmit = {(event) => this.evitarSubmit(event)}>
          <input  onChange = {(event) => this.guardarBusqueda(event)}/>

          

        <select onChange={(event) => this.guardartipo(event)}  value={this.state.tipo}>
            
            <option value="movie">Películas</option>
            <option value="tv">Series</option>
        </select>
       
          <button className="boton" type="submit">Buscar</button>
        
        </form>

      </div>
    )
  }

}

export default withRouter(Buscador);
