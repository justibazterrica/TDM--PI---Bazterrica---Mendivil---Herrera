import React, { Component } from 'react'
import CardPelicula from "../CardPelicula/CardPelicula"
import CardSerie from "../CardSerie/CardSerie"
import Loader from "../Loader/Loader"

export default class ResultadosBusqueda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultados: [],
            tipo: this.props.tipo
        }
    }

    componentDidMount() {
        console.log(this.props.tipo);
        
        fetch(`https://api.themoviedb.org/3/search/${this.props.tipo}?query=${this.props.search}&api_key=7af9e68f00d96b306cc0ab2e52ceaf9c`)
        .then(response => response.json())
        .then(data => {this.setState({ resultados: data.results}) })
        .catch(error => console.log(error))
    }

  render() {
    console.log(this.state.resultados);
    console.log(this.props);
    
    return (

        <div>
        {this.state.tipo === "movie"? (<section className ="seccion" >
                    {this.state.resultados.length === 0 ? <Loader/> : 
                            
                    this.state.resultados.map(pelicula => (
                                <CardPelicula
                                
                                key = {pelicula.id}
                                id={pelicula.id}
                                img = {pelicula.poster_path}
                                title = {pelicula.original_title} 
                                overview = {pelicula.overview}
                                
                                /> ))}
            </section>) : (<section className="seccion" >
                {this.state.resultados.length === 0 ? <Loader/> : 
                        this.state.resultados.map(serie => (

                            <CardSerie 
                            
                            key = {serie.id}
                            id={serie.id}
                            img = {serie.poster_path}
                            name = {serie.original_name} 
                            overview = {serie.overview}
                            
                            /> ))}
            </section>) }

        </div>
    )
  }
}


