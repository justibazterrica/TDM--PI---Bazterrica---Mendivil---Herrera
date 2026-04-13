import React, { Component } from 'react'
import CardPelicula from "../CardPelicula/CardPelicula"
import CardSerie from "../CardSerie/CardSerie"
import Loader from "../Loader/Loader"

export default class ResultadosBusqueda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultados: "",
            tipo: ""
        }
    }

    componentDidMount() {
        console.log("entre al didmount");
        
        fetch(`https://api.themoviedb.org/3/search/${this.state.tipo}/${this.props.search}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            this.setState({ resultados: data.results
             })
        })
        .catch(error => console.log(error)
        )
    }

  render() {

    return (
        <div>
            <section className ="seccion" >
                    {this.state.resultados === "" ? <Loader/> : 
                            
                    this.state.resultados.map(pelicula => (
                                <CardPelicula
                                
                                id={pelicula.id}
                                img = {pelicula.poster_path}
                                title = {pelicula.original_title} 
                                overview = {pelicula.overview}
                                
                                /> ))}
            </section>


             <section className="seccion" >
                {this.state.resultados === "" ? <Loader/> : 
                        this.state.resultados.map(serie => (

                            <CardSerie 
                            
                            id={serie.id}
                            img = {serie.poster_path}
                            name = {serie.original_name} 
                            overview = {serie.overview}
                            
                            /> ))}
            </section>

        </div>
    )
  }
}
