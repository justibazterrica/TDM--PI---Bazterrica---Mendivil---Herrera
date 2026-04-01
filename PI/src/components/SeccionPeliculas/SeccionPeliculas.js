import React, { Component } from 'react'
import CardPelicula from "../CardPelicula/CardPelicula"
import {Link} from "react-router-dom"

class SeccionPeliculas extends Component {

    constructor(props) {
        super(props)
        this.state = { datos: ""}
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c")
        .then(response => response.json())
        .then(data => {
            this.setState({ datos: data.results })
        })
        .catch(error => console.log(error))
    }


    render() {
     return (

       <seccion>
        <h1 className="alert alert-primary">Popular movies this week</h1>
         {this.state.datos === "" ? <h3> Cargando... </h3> : 
                this.state.datos.slice(0, 8).map(pelicula => (
                    <CardPelicula
                    
                      id={pelicula.id}
                      img = {pelicula.poster_path}
                      title = {pelicula.original_title} 
                      overview = {pelicula.overview}
                    
                    /> ))}
       </seccion>
     )
  }
}

export default SeccionPeliculas