import React from 'react'
import Buscador from "../../components/Buscador/Buscador";
import SeccionSeries from "../../components/SeccionSeries/SeccionSeries";
import SeccionPeliculas from "../../components/SeccionPeliculas/SeccionPeliculas";

export default function Home() {
  return (
    <React.Fragment>

        <Buscador />
        <SeccionPeliculas />
        <SeccionSeries />
  
    </React.Fragment>
  )
}
