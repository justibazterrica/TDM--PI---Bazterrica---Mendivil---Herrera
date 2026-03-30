import React, { Component } from 'react'
import CardSerie from "../CardSerie/CardSerie"
import {Link} from "react-router-dom"

class SeccionSeries extends Component {

    constructor(props) {
        super(props)
        this.state = { datos: ""}
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

       <seccion>
        <h2 className="alert alert-primary">Popular series this week</h2>
         {this.state.datos === "" ? <h3> Cargando... </h3> : 
                this.state.datos.map(personaje => (
                    <CardSerie
                    
                      id={personaje.id}
                      img = {personaje.image}
                      name = {personaje.name} 
                      estado = {personaje.status}
                      especie = {personaje.species}
                      origen = {personaje.origin.name}

                       /> ))}
       </seccion>
     )
  }
}

export default SeccionSeries