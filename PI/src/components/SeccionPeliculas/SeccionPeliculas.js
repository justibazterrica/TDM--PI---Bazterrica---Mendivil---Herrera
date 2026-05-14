import {useState, useRef, useEffect} from 'react'
import CardPelicula from "../CardPelicula/CardPelicula"
import Loader from '../Loader/Loader'
import {Link} from "react-router-dom"
import "./styles.css"


function SeccionPeliculas (props){

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c")
        .then(response => response.json())
        .then(data => {
            setDatos(data.results)
        })
        .catch(error => console.log(error))
    }, [])

     return (

       <section className ="seccion" >
       
         {datos === "" ? <Loader/> : 
                datos.map((pelicula, idx) => (
                    <CardPelicula
                      
                      key = {idx}
                      id={pelicula.id}
                      img = {pelicula.poster_path}
                      title = {pelicula.original_title} 
                      overview = {pelicula.overview}
                    
                    /> ))}
       </section>
       
     )
  }

export default SeccionPeliculas