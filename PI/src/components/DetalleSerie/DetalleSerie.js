import { useState, useEffect, useRef } from 'react'
import './DetalleSerie.css'
import Loader from '../Loader/Loader'
import Serie from '../Serie/Serie'

function DetalleSerie( props) {
    const [series, setSeries] = useState(null)

    useEffect(() => { 
        const id = props.match.params.id

        fetch (`https://api.themoviedb.org/3/tv/${id}?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&language=es-ES`)
        .then ( response => response.json ())
        .then ( data => setSeries (data))
        .catch ( error => console.log(error))
    }, [])


return (
    !series ?
        <Loader /> :
        <div>
            <Serie
                key={series.id}
                id={series.id}
                name={series.name}
                calificacion={series.vote_average}
                estreno={series.first_air_date}
                sinopsis={series.overview}
                genero={series.genres ? series.genres.map(g => g.name).join(", ") : "Sin género"}
                img={series.poster_path}
            />
            
        </div>
)
}
export default DetalleSerie
