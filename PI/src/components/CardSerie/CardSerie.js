import "./CardSerie.css"
import {Link} from "react-router-dom";
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

export default SerieCard
