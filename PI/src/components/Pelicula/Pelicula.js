import React, { Component } from 'react'

export default function Serie (props) {
    return (
        <div>
            <h2 className="alert alert-warning">{props.name}</h2>
            <section className="row">
                <section className="col-md-6 info">
                    <p className="mt-0 mb-0" id="rating"><strong>Calificacion: </strong> {props.calificacion}</p>
                    <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {props.estreno}</p>
                    <p className="mt-0 mb-0" id="runtime"><strong>Duracion:</strong> {props.duracion} Minutos</p>
                    <h3>Descripcion</h3>
                    <p className="description">{props.sinopsis}</p>
                    <p className="mt-0 mb-0" id="genre"><strong>Genero: </strong>{props.genero} </p>
                </section>
                <img className="col-md-6" src={`https://image.tmdb.org/t/p/w500/${props.img}`} alt={props.name} />
            </section>
        </div>
        )
    }
