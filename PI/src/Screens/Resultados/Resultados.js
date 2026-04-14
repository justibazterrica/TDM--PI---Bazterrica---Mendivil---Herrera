import React, { Component } from "react";
import ResultadosBusqueda from "../../components/ResultadosBusqueda/ResultadosBusqueda";

export default class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: this.props.match.params.search,
      tipo: this.props.match.params.value,
    };
  }
  render() {
  return (
    <div>
      <h1>Resultados de: {this.state.resultados}</h1>
      <ResultadosBusqueda search={this.state.resultados} tipo={this.state.tipo} />
    </div>
  )
  }
}