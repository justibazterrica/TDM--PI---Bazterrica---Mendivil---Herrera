import React, { Component } from 'react'
import BotonFav from '../BotonFav/BotonFav'

export default function Serie (props) {
    return (
        <div>
            <h2 className="alert alert-warning">{props.name}</h2>
            <section className="row">
                <section className="col-md-6 info">
                    <p className="mt-0 mb-0" id="release-date"><strong>Calificacion: </strong> {props.calificacion}</p>
                    <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {props.estreno}</p>
                    <p><strong>Descripcion:</strong></p>
                    <p className="description">{props.sinopsis}</p>
                    <p className="mt-0 mb-0" id="release-date"><strong>Genero: </strong>{props.genero} </p>
                    <BotonFav id={props.id} />
                </section>
                <img className="fotos" src={`https://image.tmdb.org/t/p/w500/${props.img}`} alt={props.name} />
            </section>
        </div>
        )
    }

  


