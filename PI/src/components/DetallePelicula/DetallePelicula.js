import React, { Component, use } from 'react'
import './DetallePelicula.css'
import Loader from '../Loader/Loader'
import Pelicula from '../Pelicula/Pelicula'
import { useEffect, useState } from 'react'

function DetallePelicula(props) {
    const [peliculas, setPeliculas] = useState()

    useEffect(() => {

        const id = props.match.params.id

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&language=es-ES`)
        .then(response => response.json())
        .then(data => setPeliculas(data))
        .catch(error => console.log(error))
    
    })

    if (peliculas.length === 0)
             { <Loader/>}

    else
    return (

            <div>
                <Pelicula
                    key = {peliculas.id}
                    id={peliculas.id}
                    name={peliculas.title}
                    calificacion={peliculas.vote_average}
                    estreno={peliculas.first_air_date}
                    duracion={peliculas.runtime}
                    sinopsis={peliculas.overview}
                    genero={peliculas.genres ? peliculas.genres.map(g => g.name).join(", ") : "Sin género"}
                    img={peliculas.poster_path}
                />
            </div>
            


    )

}

export default DetallePelicula;

