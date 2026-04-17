import React, { Component } from "react";
import { Link } from "react-router-dom";

class Favoritos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peliculasFavoritas: [],
      seriesFavoritas: [],
    };
  }

  componentDidMount() {
    let storagePeliculas = localStorage.getItem("favoritosPeliculas");
    let storageSeries = localStorage.getItem("favoritosSeries");

    let peliculasIds = storagePeliculas ? JSON.parse(storagePeliculas) : [];
    let seriesIds = storageSeries ? JSON.parse(storageSeries) : [];

    let peliculasRecuperadas = [];
    let seriesRecuperadas = [];

      peliculasIds.map(id => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&language=es-ES`)
          .then(response => response.json())
          .then(data => {
            peliculasRecuperadas.push(data);

            this.setState({
              peliculasFavoritas: peliculasRecuperadas
            });
          })
          .catch(error => console.log(error));
      });

      seriesIds.map(id => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&language=es-ES`)
          .then(response => response.json())
          .then(data => {
            seriesRecuperadas.push(data);

            this.setState({
              seriesFavoritas: seriesRecuperadas
            });
          })
          .catch(error => console.log(error));
      });
    }

  eliminarPelicula(id) {
    let nuevasPeliculas = this.state.peliculasFavoritas.filter(pelicula=> pelicula.id !== id);

    let storage = JSON.parse(localStorage.getItem("favoritosPeliculas"));
    let nuevosIds = storage.filter(fav => fav !== id);

    localStorage.setItem("favoritosPeliculas", JSON.stringify(nuevosIds));

    this.setState({ 
      peliculasFavoritas: nuevasPeliculas 
    });
  }

  eliminarSerie(id) {
    let nuevasSeries = this.state.seriesFavoritas.filter(s => s.id !== id);

    let storage = JSON.parse(localStorage.getItem("favoritosSeries"));
    let nuevosIds = storage.filter(fav => fav !== id);

    localStorage.setItem("favoritosSeries", JSON.stringify(nuevosIds));

    this.setState({
       seriesFavoritas: nuevasSeries 
      });
  }

  render() {

  let contenidoPeliculas;
  let contenidoSeries;

  if (this.state.peliculasFavoritas.length === 0) {
    contenidoPeliculas = <p>No hay películas favoritas</p>;
  } else {
    contenidoPeliculas = (
      <ul>
        {this.state.peliculasFavoritas.map((pelicula, idx) => (
          <li key={idx}>
            <Link to={`/Detalle/pelicula/${pelicula.id}`}>
              {pelicula.title}
            </Link>

            <button onClick={() => this.eliminarPelicula(pelicula.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
     );
   }

   if (this.state.seriesFavoritas.length === 0) {
    contenidoSeries = <p>No hay series favoritas</p>;
  } else {
    contenidoSeries = (
      <ul>
        {this.state.seriesFavoritas.map((serie, idx) => (
          <li key={idx}>
            <Link to={`/Detalle/serie/${serie.id}`}>
              {serie.name}
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

