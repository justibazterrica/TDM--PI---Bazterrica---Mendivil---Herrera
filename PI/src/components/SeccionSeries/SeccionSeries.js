import React, { useState, useEffect } from "react";
import CardSerie from "../CardSerie/CardSerie"
import {Link} from "react-router-dom"
import "./styles.css"
import Loader from '../Loader/Loader'

const SeccionSeries = () => {
    const [datos, setDatos] = useState("");

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=7af9e68f00d96b306cc0ab2e52ceaf9c`)
            .then(response => response.json())
            .then(data => {
                setDatos(data.results);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <section className="seccion">
            {datos === "" ? (
                <Loader />
            ) : (
                datos.map((serie, idx) => (
                    <CardSerie
                        key={idx}
                        id={serie.id}
                        img={serie.poster_path}
                        name={serie.original_name}
                        overview={serie.overview}
                    />
                ))
            )}
        </section>
    );
};

export default SeccionSeries;
