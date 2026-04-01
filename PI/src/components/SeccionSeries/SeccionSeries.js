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
        <h1 className="alert alert-primary">Popular series this week</h1>
         {this.state.datos === "" ? <h3> Cargando... </h3> : 
                this.state.datos.map(serie => (
                    <CardSerie
                    
                      id={serie.id}
                      img = {serie.poster_path}
                      name = {serie.original_name} 
                      overview = {serie.overview}
                    
                    /> ))}
       </seccion>
     )
  }
}

export default SeccionSeries