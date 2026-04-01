
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import Home from './Screens/Home/Home';
import NotFound from "./Screens/NotFound/NotFound";
import {Switch, Route} from "react-router-dom";
import SeccionSeries from './components/SeccionSeries/SeccionSeries';
import Login from './Screens/Login/Login';
import SeccionPeliculas from './components/SeccionPeliculas/SeccionPeliculas';


function App() {
  return (
    <React.Fragment>

      <Header />

      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/series" component={SeccionSeries}/>
        <Route path="/login" component={Login}/>
        <Route path="/peliculas" component={SeccionPeliculas}/>
        <Route path="*" component={NotFound}/>
      
      </Switch>

      <Footer/> 

    </React.Fragment>
  );
}

export default App;
