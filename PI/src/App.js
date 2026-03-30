import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import Home from './screens/Home';
import NotFound from "./screens/NotFound/Notfound";
import {Switch, Route} from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <Header />

      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="*" component={NotFound}/>
      
      </Switch>

      <Footer/> 
    </React.Fragment>
  );
}

export default App;
