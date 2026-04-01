
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import Home from './Screens/Home/Home';
import NotFound from "./Screens/NotFound/NotFound";
import Detalle from "./Screens/Detalle/Detalle"
import {Switch, Route} from "react-router-dom";
import Series from './Screens/Series/Series';
import Login from './Screens/Login/Login';
import Peliculas from './Screens/Peliculas/Peliculas';
import Detalles from './Screens/Detalle/Detalle';


function App() {
  return (
    <React.Fragment>

      <Header />

      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/series" component={Series}/>
        <Route path="/login" component={Login}/>
        <Route path="/movies" component={Peliculas}/>
        <Route path="/Detalle" component={Detalles}/>
        <Route path="*" component={NotFound}/>
      </Switch>

      <Footer/> 

    </React.Fragment>
  );
}

export default App;
