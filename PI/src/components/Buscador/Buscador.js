import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
    }

    onSubmit(event) {
        event.preventDefault();
        console.log("Buscando:", this.props);
        this.props.history.push(`/resultados/${this.state.search}`);
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
        <form onsubmit = {(event) => this.onSubmit(event)}>
          <input on change = {(event) => this.guardarBusqueda(event)}/>
          <botton type="submit">Buscar </botton>
        </form>
      </div>
    )
  }
}

export default withRouter(Buscador);
