import React from 'react'
import Buscador from "../../components/Buscador/Buscador";
import SeccionSeries from "../../components/SeccionSeries/SeccionSeries";
import SeccionPeliculas from "../../components/SeccionPeliculas/SeccionPeliculas";

export default function Home() {
  return (
    < React.Fragment>

        <Buscador />

        <h1>Popular movies this week</h1> 

        <SeccionPeliculas />

        <h1>Popular series this week</h1>

        <SeccionSeries />
  
    </React.Fragment>
  )
}
