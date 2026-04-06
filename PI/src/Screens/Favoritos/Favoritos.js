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
    return (
      <main>
        <h1>Favoritos</h1>

        <section>
          <h2>Películas favoritas</h2>

          {
            this.state.peliculasFavoritas.length === 0
            ?
            <p>No hay películas favoritas</p>
            :
            <ul>
              {this.state.peliculasFavoritas.map((pelicula, idx) => (
                <li key={idx}>
                  <Link to="/detalle">{pelicula.titulo}</Link>

                  <button onClick={() => this.eliminarPelicula(pelicula.id)}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          }
        </section>

        <section>
          <h2>Series favoritas</h2>

          {
            this.state.seriesFavoritas.length === 0
            ?
            <p>No hay series favoritas</p>
            :
            <ul>
              {this.state.seriesFavoritas.map((serie, idx) => (
                <li key={idx}>
                  <Link to="/detalle">{serie.titulo}</Link>

                  <button onClick={() => this.eliminarSerie(serie.id)}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          }
        </section>
      </main>
    );
  }
}

export default Favoritos;
