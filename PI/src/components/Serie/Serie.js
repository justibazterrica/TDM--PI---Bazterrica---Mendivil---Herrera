import React, { Component } from 'react'
import BotonFav from '../BotonFav/BotonFav'
import Cookies from 'universal-cookie'
import {Link} from 'react-router-dom'

const cookies = new Cookies();

export default function Serie (props) {
    
    let usuario = cookies.get("user-auth-cookie");

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
                    { usuario ? <BotonFav id={props.id} /> : <p className = "texto-alternativo"><Link to="/crear">Crear cuenta</Link> o <Link to="/login">iniciar sesion</Link> para agregar a favoritos</p> }
                </section>
                <img className="img" src={`https://image.tmdb.org/t/p/w500/${props.img}`} alt={props.name} />
            </section>
        </div>
        )
    }

  


