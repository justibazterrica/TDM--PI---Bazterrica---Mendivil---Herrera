import React from 'react'
import DetalleSerie from "../../components/DetalleSerie/DetalleSerie";
import DetallePelicula from "../../components/DetallePelicula/DetallePelicula";
import {Route, Switch} from "react-router-dom";


export default function Detalles() {
  return (
    <React.Fragment>
        <Switch>
            <Route path="/Detalle/serie/:id" component={DetalleSerie}/>
            <Route path="/Detalle/pelicula/:id" component={DetallePelicula}/>
        </Switch>
        
    </React.Fragment>
  )
}
