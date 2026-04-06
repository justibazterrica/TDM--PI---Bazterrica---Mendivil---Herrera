
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import Home from './Screens/Home/Home';
import NotFound from "./Screens/NotFound/NotFound";
import {Switch, Route} from "react-router-dom";
import Series from './Screens/Series/Series';
import Login from './Screens/Login/Login';
import Peliculas from './Screens/Peliculas/Peliculas';
import DetallePelicula from './components/DetallePelicula/DetallePelicula';
import DetalleSerie from './components/DetalleSerie/DetalleSerie';
// import Crear from "./Screens/Crear/Crear";
// import Favoritos from "./Screens/Favoritos/Favoritos";;
import Resultados from "./Screens/Resultados/Resultados";

function App() {
  return (
    <React.Fragment>

      <Header />

      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/series" component={Series}/>
        <Route path="/login" component={Login}/>
        <Route path="/movies" component={Peliculas}/>
        {/* <Route path="/crear" component={Crear} /> */}
        {/* <Route path="/favorites" component={Favoritos} /> */}
        <Route path="/Resultados" component={Resultados} />
        <Route path="/Detalle/serie/:id" component={DetalleSerie}/>
        <Route path="/Detalle/pelicula/:id" component={DetallePelicula}/>
        <Route path="*" component={NotFound}/>
     
      </Switch>

      <Footer/> 

    </React.Fragment>
  );
}

export default App;
