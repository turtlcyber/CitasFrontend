import React from 'react';
import { BrowserRouter as Switch, Route, } from 'react-router-dom';

import Homepage from '../pages/Home';
import Contact from '../pages/Contact';
// import Admin from '../pages/Admin';
// import Login from '../pages/login';
import Features from '../pages/Features';
import About from '../pages/About';
import Showdata from '../pages/profile';
import Venderlogin from '../pages/vender-login';
import Terms from '../pages/terms';
import Cookie from '../pages/Cookie';
import Privacy from '../pages/Privacy ';
import CitaShip from '../pages/CitaShip';
import CitasDate from '../pages/CitasDate';
import CitaTrip from '../pages/CitaTrip';
import Citascom from '../pages/Citascom';

const Routs = () => {

  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Features" component={Features} />
      <Route path="/About" component={About} />
      <Route path="/profile" component={Showdata} />
      <Route path="/terms" component={Terms} />
      <Route path="/Cookie" component={Cookie} />
      <Route path="/Privacy" component={Privacy} />
      <Route path="/CitasDate" component={CitasDate} />
      <Route path="/CitaShip" component={CitaShip} />
      <Route path="/Citascom" component={Citascom} />
      <Route path="/CitaTrip" component={CitaTrip} />
      <Route path="/vender-login" component={Venderlogin} />
    </Switch >
  )
}

export default Routs