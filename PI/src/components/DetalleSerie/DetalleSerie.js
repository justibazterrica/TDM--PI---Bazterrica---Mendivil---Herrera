import React, { Component } from 'react'
import './DetalleSerie.css'

class DetalleSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/${this.props.id}?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c`)
        .then(response => response.json())
        .then(data => {
            this.setState({ serie: data })
        })
        .catch(error => console.log(error))
    }

  render() {
    return (
    <section>
        <h2 className="alert alert-warning">{this.state.serie.name}</h2>
        <section className="row">
            <section className="col-md-6 info">
                <p className="mt-0 mb-0" id="release-date"><strong>Calificacion: </strong> {this.state.serie.popularity}</p>
                <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.serie.first_air_date}</p>
                <h3>Descripcion</h3>
                <p className="description"><strong>Sinopsis:</strong>{this.state.serie.overview}</p>
                <p className="mt-0 mb-0" id="release-date"><strong>Genero: </strong>{this.state.serie.genres.name} </p>
            </section>
            <img className="col-md-6" src={`https://image.tmdb.org/t/p/w500/${this.state.serie.backdrop_path}`} alt={this.state.serie.name} />
        </section>
    </section>
    )
  }
}

export default DetalleSerie