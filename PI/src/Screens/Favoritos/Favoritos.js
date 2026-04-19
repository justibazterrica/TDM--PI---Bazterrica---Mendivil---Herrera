import React, { Component } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";
import CardSerie from "../../components/CardSerie/CardSerie";
import "./Favoritos.css";
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
            console.log(this.state.peliculasFavoritas)
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
            console.log(this.state.seriesFavoritas)
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
      <section className="PeliculasFav">
        {this.state.peliculasFavoritas.map((pelicula, idx) => (
          <section className="cardFav">
                                <CardPelicula
                                    key={idx}
                                    id={pelicula.id}
                                    img={pelicula.poster_path}
                                    title={pelicula.original_title}
                                    overview={pelicula.overview}
                                />

              <button onClick={() => this.eliminarPelicula(pelicula.id)} className="eliminar">
              Eliminar
            </button>
            
          </section>
        ))}
      </section>
     );
   }

   if (this.state.seriesFavoritas.length === 0) {
    contenidoSeries = <p>No hay series favoritas</p>;
  } else {
    contenidoSeries = (
      <section className="SeriesFav">
        {this.state.seriesFavoritas.map((serie, idx) => (
          <section className="cardFav">
                                <CardSerie
                                    key={idx}
                                    id={serie.id}
                                    img={serie.poster_path}
                                    title={serie.original_name}
                                    overview={serie.overview}
                                />

            <button onClick={() => this.eliminarSerie(serie.id)} className="eliminar">
              Eliminar
            </button>
          </section>
        ))}
      </section>
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

