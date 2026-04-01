import React, { Component } from "react";
import {Link} from "react-router-dom";

class PeliculaCard  extends Component {
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

                <img src= {"https://image.tmdb.org/t/p/w342/" + this.props.img} alt={this.props.title}  className = "fotos" />
                <h2>{this.props.title} </h2> 


               <section className="info">
            
                  <p className= {'extra-info ' + (this.state.verMenos ? 'false' : 'true') }>  {this.props.overview} </p>
                  <Link to={`/Detalle/pelicula/${this.props.id}`} className="link"> Ir a detalle</Link>
              </section>

		        <button className="ver-mas" onClick={() => this.clickVerMenos()} >
                  {this.state.verMenos ? "Ver más" : "Ver menos"}
                </button>
                
        </article>

        );

    }}
export default PeliculaCard;

    
