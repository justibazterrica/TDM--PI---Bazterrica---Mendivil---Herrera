import React, { Component } from 'react'
import './DetalleSerie.css'
import Serie from '../Serie/Serie'

class DetalleSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: null
        }
    }

    componentDidMount() {
        
        const id = this.props.match.params.id
        
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&language=es-ES`)
        .then(response => response.json())
        .then(data => {
            this.setState({ series: data })
        })
        .catch(error => console.log(error))
    }

    render() {
        const { series } = this.state
        if (!series) {
            return <h3>Cargando...</h3>
        }
        return (
            <div>
                <Serie
                    id={series.id}
                    name={series.name}
                    calificacion={series.vote_average}
                    estreno={series.first_air_date}
                    sinopsis={series.overview}
                    genero={series.genres ? series.genres.map(g => g.name).join(", ") : "Sin género"}
                    img={series.poster_path}
                />
            </div>
        )
    }
}

export default DetalleSerie