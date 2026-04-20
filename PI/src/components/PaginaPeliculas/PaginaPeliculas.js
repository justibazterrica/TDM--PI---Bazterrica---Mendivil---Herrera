import React, { Component } from 'react'
import CardPelicula from "../CardPelicula/CardPelicula"
import Loader from "../Loader/Loader"
import "./PaginaPeliculas.css"

class PaginaPeliculas extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            datos: [],
            paginaSiguiente: 1,
            valorFiltro: ""
        }
    }

    componentDidMount() {
        this.cargarMas();
    }

    cargarMas() { 
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&page=${this.state.paginaSiguiente}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    datos: this.state.datos.concat(data.results),
                    paginaSiguiente: this.state.paginaSiguiente + 1
                })
            })
            .catch(error => console.log(error))
    }


    evitarSubmit(evento) {
        evento.preventDefault();
    }

    controlarCambios(evento) {
        this.setState({
            valorFiltro: evento.target.value
        });
    }

    render() {

        let peliculasFiltradas = this.state.datos.filter(pelicula => 
            pelicula.original_title.toLowerCase().includes(this.state.valorFiltro.toLowerCase())
        );

        return (
            <div className="paginaPeliculas">
                
                <form onSubmit={(e) => this.evitarSubmit(e)} className="form-filtro">
                    <input 
                        type="text" 
                        placeholder="Filtrar películas..." 
                        onChange={(e) => this.controlarCambios(e)}
                        value={this.state.valorFiltro}
                    />
                </form>

                <section className="Peliculas">
                    {this.state.datos.length === 0 ? (
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

                <button className="verMas" onClick={() => this.cargarMas()}>
                    Más peliculas
                </button>
            </div>
        )
    }
}

export default PaginaPeliculas