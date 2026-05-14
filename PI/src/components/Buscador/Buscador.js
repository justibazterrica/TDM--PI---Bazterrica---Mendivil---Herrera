import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Resultados from "../../Screens/Resultados/Resultados";
import "./styles.css"

function Buscador(props) {
    const [search, setSearch] = useState("");
    const [tipo, setTipo] = useState("movie");

    function evitarSubmit(event) {
        event.preventDefault();
        props.history.push(`/Resultados/${props.tipo}/${props.search}`);

    }

    function guardarBusqueda(event) {
        setSearch(event.target.value);
    }


    function guardartipo(event) {
        setTipo(event.target.value);

    }

   return(
     <div>
        <form className = "buscador" onSubmit = {(event) => evitarSubmit(event)}>
          <input  onChange = {(event) => guardarBusqueda(event)}/>

          

        <select onChange={(event) => guardartipo(event)}  value={props.tipo}>
            
            <option value="movie">Películas</option>
            <option value="tv">Series</option>
        </select>
       
          <button className="boton" type="submit">Buscar</button>
        
        </form>

      </div>

   )}
   
   export default withRouter(Buscador);