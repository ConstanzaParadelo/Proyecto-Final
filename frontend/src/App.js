
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";


import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';


import InicioPage from './pages/InicioPage';
import HistoriaPage from './pages/HistoriaPage';
import ProfesionalesPage from './pages/ProfesionalesPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
   <Router>
     <Header/>
      <Navigation/>
        <Switch>
          <Route path= '/' exact component={ InicioPage } />
          <Route path= '/historia' exact component={ HistoriaPage } />
          <Route path= '/profesionales' exact component={ ProfesionalesPage } />
          <Route path= '/novedades' exact component={ NovedadesPage } />
          <Route path= '/contacto' exact component={ ContactoPage } />
        </Switch>
      <Footer/>
   </Router>
  );
}

export default App;
