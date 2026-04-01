import React, { Component } from 'react'
import './DetallePelicula.css'
import Pelicula from '../Pelicula/Pelicula'

class DetallePelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: null
        }
    }

    componentDidMount() {
        
        const id = this.props.match.params.id
        
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&language=es-ES`)
        .then(response => response.json())
        .then(data => {
            this.setState({ peliculas: data })
        })
        .catch(error => console.log(error))
    }

    render() {
        const { peliculas } = this.state
        if (!peliculas) {
            return <h3>Cargando...</h3>
        }
        return (
            <div>
                <Pelicula
                    id={peliculas.id}
                    name={peliculas.name}
                    calificacion={peliculas.vote_average}
                    estreno={peliculas.first_air_date}
                    duracion={peliculas.runtime}
                    sinopsis={peliculas.overview}
                    genero={peliculas.genres ? peliculas.genres.map(g => g.name).join(", ") : "Sin género"}
                    img={peliculas.poster_path}
                />
            </div>
        )
    }
}

export default DetallePelicula