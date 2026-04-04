import React, { Component } from "react";
import { Link } from "react-router-dom";

class Favoritos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peliculasFavoritas: [],
      seriesFavoritas: []
    };
  }

  eliminarPelicula(id) {
    let nuevasPeliculas = this.state.peliculasFavoritas.filter(function(pelicula) {
      return pelicula.id !== id;
    });

    this.setState({
      peliculasFavoritas: nuevasPeliculas
    });
  }

  eliminarSerie(id) {
    let nuevasSeries = this.state.seriesFavoritas.filter(function(serie) {
      return serie.id !== id;
    });

    this.setState({
      seriesFavoritas: nuevasSeries
    });
  }

  render() {

    //peliculas
    let contenidoPeliculas;

    if (this.state.peliculasFavoritas.length === 0) {
      contenidoPeliculas = <p>No hay películas favoritas</p>;
    } else {
      contenidoPeliculas = (
        <ul>
          {this.state.peliculasFavoritas.map((pelicula, idx) => (
            <li key={idx}>
              <Link to="/detalle">
                {pelicula.titulo}
              </Link>

              <button onClick={() => this.eliminarPelicula(pelicula.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      );
    }

    //Series
    let contenidoSeries;

    if (this.state.seriesFavoritas.length === 0) {
      contenidoSeries = <p>No hay series favoritas</p>;
    } else {
      contenidoSeries = (
        <ul>
          {this.state.seriesFavoritas.map((serie, idx) => (
            <li key={idx}>
              <Link to="/detalle">
                {serie.titulo}
              </Link>

              <button onClick={() => this.eliminarSerie(serie.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <main>
        <h1>Favoritos</h1>

        <section>
          <h2>Películas favoritas</h2>
          {contenidoPeliculas}
        </section>

        <section>
          <h2>Series favoritas</h2>
          {contenidoSeries}
        </section>
      </main>
    );
  }
}

export default Favoritos;

//no esta terminado, falta lo de cookie de sesion y mas
