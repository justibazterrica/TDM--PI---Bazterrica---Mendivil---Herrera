import React, { Component } from 'react'
import "./PaginaSerie.css"
import CardSerie from "../CardSerie/CardSerie"
import Loader from '../Loader/Loader'

class PaginaSerie extends Component {

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
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c&page=${this.state.paginaSiguiente}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    datos: this.state.datos.concat(data.results),
                    paginaSiguiente: this.state.paginaSiguiente + 1
                })
            })
            .catch(error => console.log(error))
    }

        controlarCambios(evento) {
        this.setState({
            valorFiltro: evento.target.value
        });
    }

    render() {
        let seriesFiltradas = this.state.datos.filter(serie => 
            serie.name.toLowerCase().includes(this.state.valorFiltro.toLowerCase())
        );

        return (
            <div className="paginaSeries">
                
                <form onSubmit={(e) => e.preventDefault()} className="form-filtro">
                    <input 
                        type="text" 
                        placeholder="Filtrar series..." 
                        onChange={(e) => this.controlarCambios(e)}
                        value={this.state.valorFiltro}
                    />
                </form>

                <section className="Series">
                    {this.state.datos.length === 0 ? (
                        <Loader />
                    ) : (
                        seriesFiltradas.length > 0 ? (
                            seriesFiltradas.map(serie => (
                                <CardSerie
                                    key={serie.id}
                                    id={serie.id}
                                    img={serie.poster_path}
                                    title={serie.name}
                                    overview={serie.overview}
                                />
                            ))
                        ) : (
                            <h3>No se encontraron series con ese nombre</h3>
                        )
                    )}
                </section>
                
                <button className="verMas" onClick={() => this.cargarMas()}>
                    Más series
                </button>
            </div>
        )
    }
}

export default PaginaSerie;