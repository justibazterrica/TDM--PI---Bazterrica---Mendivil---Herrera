import { setState, useState, useRef, useEffect} from "react";

export default function BotonFav (props) {
    const [favoritos, setFavoritos] = useState(false);

        function agregarFav(id) {
            let storage
            {props.tipo === "movie" ? storage = localStorage.getItem("favoritosPeliculas") : storage = localStorage.getItem("favoritosSeries")}
            
            if (storage === null) {
                let primerFav = [id];
                let primerFavString = JSON.stringify(primerFav);
                {props.tipo === "movie" ? localStorage.setItem("favoritosPeliculas", primerFavString) : localStorage.setItem("favoritosSeries", primerFavString)}
            } 
            else {
                let favoritos = JSON.parse(storage);
                favoritos.push(id);
                {props.tipo === "movie" ? localStorage.setItem("favoritosPeliculas", JSON.stringify(favoritos)) : localStorage.setItem("favoritosSeries", JSON.stringify(favoritos))}
            }
            setFavoritos(true);
            console.log(props.tipo)
        }
        function eliminarFav(id) {
            let storage
            {props.tipo === "movie" ? storage = localStorage.getItem("favoritosPeliculas") : storage = localStorage.getItem("favoritosSeries")}
            let favoritos = JSON.parse(storage);
            let nuevosFavs = favoritos.filter(function(fav) {
                return fav !== id;
            });
            {props.tipo === "movie" ? localStorage.setItem("favoritosPeliculas", JSON.stringify(nuevosFavs)) : localStorage.setItem("favoritosSeries", JSON.stringify(nuevosFavs))}
            setFavoritos(false);
        }

  return (
      <div>
        <button onClick={() => (favoritos? eliminarFav(props.id) : agregarFav(props.id))} className =  {'botonFav' + (favoritos ? 'false' : 'true') }>
          {favoritos ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
        </button>
      </div>
    )
}
