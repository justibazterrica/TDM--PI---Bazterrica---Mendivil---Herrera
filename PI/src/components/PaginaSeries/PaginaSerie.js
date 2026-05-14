import { useState, useEffect } from "react";
import "./PaginaSerie.css"
import CardSerie from "../CardSerie/CardSerie"
import Loader from '../Loader/Loader'

function PaginaSerie() {

    const [datos, setDatos] = useState([]);
    const [paginaSiguiente, setPaginaSiguiente] = useState(1);
    const [valorFiltro, setValorFiltro] = useState("");

    useEffect(() => {
        cargarMas();
    }, []);

    function cargarMas() { 
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&page=${paginaSiguiente}`)
            .then(response => response.json())
            .then(data => {
                setDatos(datos.concat(data.results));
                setPaginaSiguiente(paginaSiguiente + 1);
            })
            .catch(error => console.log(error))
    } 

    function controlarCambios(evento) {
        setValorFiltro(evento.target.value);
    }

     let seriesFiltradas = datos.filter(serie => serie.name.toLowerCase().includes(valorFiltro.toLowerCase())
    );

        return (
            <div className="paginaSeries">
                
                <form onSubmit={(e) => e.preventDefault()} className="form-filtro">
                    <input 
                    type="text"
                    placeholder="Filtrar series..."
                    onChange={controlarCambios}
                    value={valorFiltro}
                    />
                </form>

                <section className="Series">
                    {datos.length === 0 ? (
                        <Loader />
                    ) : (
                        seriesFiltradas.length > 0 ? (
                            seriesFiltradas.map((serie, idx) => (
                                <CardSerie
                                    key={idx}
                                    id={serie.id}
                                    img={serie.poster_path}
                                    name={serie.original_name}
                                    overview={serie.overview}
                                />
                            ))
                        ) : ( 
                            <h3>No se encontraron series con ese nombre</h3>
                        )
                    )}
                </section>
                
                <button className="verMas" onClick={cargarMas}>
                    Más series
                </button>
            </div>
        );
    }

export default PaginaSerie;