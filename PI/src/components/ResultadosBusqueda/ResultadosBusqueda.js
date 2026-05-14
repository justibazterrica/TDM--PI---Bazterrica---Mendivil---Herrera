import { useState, useEffect } from "react";
import CardPelicula from "../CardPelicula/CardPelicula";
import CardSerie from "../CardSerie/CardSerie";
import Loader from "../Loader/Loader";

function ResultadosBusqueda(props) {

    const [resultados, setResultados] = useState([]);
    const [tipo, setTipo] = useState(props.tipo);

    useEffect(() => {

        console.log(props.tipo);

        fetch(`https://api.themoviedb.org/3/search/${props.tipo}?query=${props.search}&api_key=7af9e68f00d96b306cc0ab2e52ceaf9c`)
            .then(response => response.json())
            .then(data => setResultados(data.results))
            .catch(error => console.log(error));

    }, []);

    console.log(resultados);
    console.log(props);

    return (
        <div>
            {tipo === "movie" ? (
                <section className="seccion">
                    {resultados.length === 0 ? <Loader /> : resultados.map((pelicula, idx) => (
                            <CardPelicula
                                key={idx}
                                id={pelicula.id}
                                img={pelicula.poster_path}
                                title={pelicula.original_title}
                                overview={pelicula.overview}
                            />
                        ))
                    }
                </section>
            ) : (<section className="seccion">
                    {resultados.length === 0 ? <Loader /> : resultados.map((serie, idx) => (
                            <CardSerie
                                key={idx}
                                id={serie.id}
                                img={serie.poster_path}
                                name={serie.original_name}
                                overview={serie.overview}
                            />
                        ))
                    }
                </section>
            )}
        </div>
    );
}

export default ResultadosBusqueda;

