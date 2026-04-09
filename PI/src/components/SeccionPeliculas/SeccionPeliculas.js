import React, { Component } from 'react'
import CardPelicula from "../CardPelicula/CardPelicula"
import Loader from '../Loader/Loader'
import {Link} from "react-router-dom"
import "./styles.css"


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
       
         {this.state.datos === "" ? <Loader/> : 
                this.state.datos.map(pelicula => (
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