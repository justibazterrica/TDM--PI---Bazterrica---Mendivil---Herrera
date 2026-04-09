import React, { Component } from 'react'
import CardPelicula from "../CardPelicula/CardPelicula"
import Loader from '../Loader/Loader'
import {Link} from "react-router-dom"
import "./styles.css"
import Loader from '../Loader/Loader'

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

       <section className ="seccion" >
       
<<<<<<< HEAD
         {this.state.datos === "" ? <Loader/> : 
                this.state.datos.slice(0, 8).map(pelicula => (
=======
         {this.state.datos === "" ? <h3> Cargando... </h3> : 
                this.state.datos.map(pelicula => (
>>>>>>> 04c7a8cd64fa7cbbffda8e31e11d4a2198eb0ab6
                    <CardPelicula
                    
                      id={pelicula.id}
                      img = {pelicula.poster_path}
                      title = {pelicula.original_title} 
                      overview = {pelicula.overview}
                    
                    /> ))}
       </section>
     )
  }
}

export default SeccionPeliculas