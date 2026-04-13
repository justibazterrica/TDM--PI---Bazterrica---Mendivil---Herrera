import React, { Component } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";
import CardSerie from "../../components/CardSerie/CardSerie";
import Loader from "../../components/Loader/Loader";

class Resultados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: ""
    };
  }

  render(){
    const search = this.props.match.params.search;
    return (
      <div>
        <h1> Resultados para: {search}</h1> 
      </div>
    )
  }
}

export default Resultados;