import React, { Component } from "react";
import "./CardSerie.css"
import {Link} from "react-router-dom";

class SerieCard  extends Component {
    constructor(props) {
        super(props);
         this.state = {
      verMenos: false
    };
    }       

    clickVerMenos() {
    this.setState({
      verMenos: !this.state.verMenos
    });
  }
    render (){  
      
        console.log(this.props);
        
        return(

            <article className='character-card'>

                <img src={"https://image.tmdb.org/t/p/w342/" + this.props.img} alt={this.props.name}  className = "fotos" />
                <h2 className = "titulo">{this.props.name} </h2> 


               <section className="info">
            
                  <p className= {'extra-info ' + (this.state.verMenos ? 'false' : 'true') }>  {this.props.overview} </p>
          
              </section>

              <Link to={`/Detalle/serie/${this.props.id}`} className="link"> Ir a detalle</Link>

		        <button className="ver-mas" onClick={() => this.clickVerMenos()} >
                  {this.state.verMenos ? "Ver más" : "Ver menos"}
                </button>
                
        </article>

        );

    }}
export default SerieCard;

    

import { useState, useEffect, useRef } from 'react'

function SerieCard (props) {
  const [ verMenos, setverMenos] = useState (false);
  
 function clickVerMenos (){
    setverMenos(!verMenos)
  }

   return(

            <article className='character-card'>

                <img src={"https://image.tmdb.org/t/p/w342/" + props.img} alt={props.name}  className = "fotos" />
                <h2 className = "titulo">{props.name} </h2> 


               <section className="info">
            
                  <p className= {'extra-info ' + (verMenos ? 'false' : 'true') }>  {props.overview} </p>
          
              </section>

              <Link to={`/Detalle/serie/${props.id}`} className="link"> Ir a detalle</Link>

		        <button className="ver-mas" onClick={() => clickVerMenos()} >
                  {verMenos ? "Ver más" : "Ver menos"}
                </button>
                
        </article>

        );

}