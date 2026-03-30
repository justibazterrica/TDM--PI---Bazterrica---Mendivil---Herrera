
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import Home from './Screens/Home/Home';
import NotFound from "./Screens/NotFound/NotFound";
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
