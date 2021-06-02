import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from '../AppNavbar/AppNavbar';
import AppFAQ from '../AppFAQ/AppFAQ';
import AppHome from '../AppHome/AppHome'
import {BrowserRouter as Router, Route} from'react-router-dom';
import AppVerlaufsplan from '../AppVerlaufsplan/AppVerlaufplan';
import AppStundenplan from '../AppStundenplan/AppStundenplan';
import AppModule from '../AppModule/AppModule';
import AppLehrende from '../AppLehrende/AppLehrende';
import AppLogin from '../AppLogin/AppLogin'
import AppRegister from '../AppRegister/AppRegister';




function App() {
 
  return (
    <Router>
    <div className="App">
      <AppNavbar /> 

      <Route path="/login" component={AppLogin} />
      <Route path="/register" component={AppRegister} />

      <Route path="/" exact component={AppHome} />
      <Route path="/studienverlaufsplan" component={AppVerlaufsplan} />
      <Route path="/stundenplan" component={AppStundenplan} />
      <Route path="/module" component={AppModule} />
      <Route path="/lehrende" component={AppLehrende} />
      <Route path="/faq" component={AppFAQ} />

     
    </div>
    </Router>
    
  );
}

export default App;

