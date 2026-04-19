import React, { Component } from 'react'

export default class BotonFav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritos: false,
        }}
        agregarFav(id) {
            let storage
            {this.props.tipo === "movie" ? storage = localStorage.getItem("favoritosPeliculas") : storage = localStorage.getItem("favoritosSeries")}
            
            if (storage === null) {
                let primerFav = [id];
                let primerFavString = JSON.stringify(primerFav);
                {this.props.tipo === "movie" ? localStorage.setItem("favoritosPeliculas", primerFavString) : localStorage.setItem("favoritosSeries", primerFavString)}
            } 
            else {
                let favoritos = JSON.parse(storage);
                favoritos.push(id);
                {this.props.tipo === "movie" ? localStorage.setItem("favoritosPeliculas", JSON.stringify(favoritos)) : localStorage.setItem("favoritosSeries", JSON.stringify(favoritos))}
            }
            this.setState({favoritos: true})
            console.log(this.props.tipo)
        }
        eliminarFav(id) {
            let storage
            {this.state.tipo === "movie" ? storage = localStorage.getItem("favoritosPeliculas") : storage = localStorage.getItem("favoritosSeries")}
            let favoritos = JSON.parse(storage);
            let nuevosFavs = favoritos.filter(function(fav) {
                return fav !== id;
            });
            {this.state.tipo === "movie" ? localStorage.setItem("favoritosPeliculas", JSON.stringify(nuevosFavs)) : localStorage.setItem("favoritosSeries", JSON.stringify(nuevosFavs))}
            this.setState({favoritos: false})
        }

  render() {
    return (
      <div>
        <button onClick={() => (this.state.favoritos? this.eliminarFav(this.props.id) : this.agregarFav(this.props.id))} className =  {'botonFav' + (this.state.favoritos ? 'false' : 'true') }>
          {this.state.favoritos ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
        </button>
      </div>
    )
  }
}
