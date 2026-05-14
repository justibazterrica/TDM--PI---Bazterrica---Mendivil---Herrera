import { setState, useState, useRef, useEffect} from "react";
import CardPelicula from "../CardPelicula/CardPelicula"
import Loader from "../Loader/Loader"
import "./PaginaPeliculas.css"

function PaginaPeliculas (props){

    const [datos, setDatos] = useState([]);
    const [paginaSiguiente, setPaginaSiguiente] = useState(1);
    const [valorFiltro, setValorFiltro] = useState("");

    useEffect(() => { cargarMas(); }, []);


    function cargarMas() { 
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&page=${paginaSiguiente}`)
            .then(response => response.json())
            .then(data => {
                setDatos (datos.concat(data.results)) ;
                setPaginaSiguiente(paginaSiguiente + 1);
            })
            .catch(error => console.log(error))
    }


    function evitarSubmit(evento) {
        evento.preventDefault();
    }

    function controlarCambios(evento) {
        setValorFiltro(evento.target.value)}

    let peliculasFiltradas = datos.filter(pelicula => 
            pelicula.original_title.toLowerCase().includes(valorFiltro.toLowerCase())
        );

        return (
            <div className="paginaPeliculas">
                
                <form onSubmit={(e) => evitarSubmit(e)} className="form-filtro">
                    <input 
                        type="text" 
                        placeholder="Filtrar películas..." 
                        onChange={(e) => controlarCambios(e)}
                        value={valorFiltro}
                    />
                </form>

                <section className="Peliculas">
                    {setDatos.length === 0 ? (
                        <Loader />
                    ) : (
                        peliculasFiltradas.length > 0 ? (
                            peliculasFiltradas.map((pelicula, idx) => (
                                <CardPelicula
                                    key={idx}
                                    id={pelicula.id}
                                    img={pelicula.poster_path}
                                    title={pelicula.original_title}
                                    overview={pelicula.overview}
                                />
                            ))
                        ) : (
                            <h3>No hay resultados para tu búsqueda</h3>
                        )
                    )}
                </section>

                <button className="verMas" onClick={() => cargarMas()}>
                    Más peliculas
                </button>
            </div>
        )
    }

export default PaginaPeliculas