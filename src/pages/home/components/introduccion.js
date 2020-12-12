import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home'
import Contacto from './pages/contacto/'
import Detalles from './pages/detalles'
import Galeria from './pages/galeria'
import NavBar from './components/navBar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detalles">
            <Detalles />
          </Route>
          <Route path="/galeria">
            <Galeria />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();