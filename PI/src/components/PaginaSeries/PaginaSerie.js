import React, { Component } from 'react'
import CardSerie from "../CardSerie/CardSerie"

class PaginaSeries extends Component {
    constructor(props) {
        super(props)
        this.state = { datos: [] }
    }
    

    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c`)
        .then(response => response.json())
        .then(data => {
            this.setState({ datos: data.results })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <section>
                <h1 className="alert alert-primary">Series</h1>
                
                {this.state.datos.length === 0 ? (
                    <h3> Cargando... </h3>
                ) : (
                    this.state.datos.map(serie => (
                        <CardSerie 
                            key={serie.id}
                            id={serie.id}
                            img={serie.poster_path}
                            name={serie.original_name} 
                            overview={serie.overview}
                        />
                    ))
                )}
            </section>
        )
    }
}


export default PaginaSeries