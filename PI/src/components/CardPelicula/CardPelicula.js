import React, { Component } from "react";
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react'


function CardPelicula(props) {
    const [VerMenos, setVerMenos] = useState(false)

    function clickVerMenos() {
        setVerMenos(!VerMenos)}

    return(

        <article className='character-card'>

             <img src= {"https://image.tmdb.org/t/p/w342/" + props.img} alt={props.title}  className = "fotos" />
            
            <h2 className = "titulo">{props.title} </h2> 


               <section className="info">
            
                  <p className= {'extra-info ' + (VerMenos ? 'false' : 'true') }>  {props.overview} </p>
                 
              </section>

                 <Link to={`/Detalle/pelicula/${props.id}`} className="link"> Ir a detalle</Link>

		        <button className="ver-mas" onClick={() => this.clickVerMenos()} >
                  {VerMenos ? "Ver más" : "Ver menos"}
                </button>
                

        </article>    ) 
  

}

export default CardPelicula;


