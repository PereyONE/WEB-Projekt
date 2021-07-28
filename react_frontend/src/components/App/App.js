import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from '../AppNavbar/AppNavbar';
import AppFAQ from '../AppFAQ/AppFAQ';
import AppHome from '../AppHome/AppHome'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppVerlaufsplan from '../AppVerlaufsplan/AppVerlaufsplan';
import AppStundenplan from '../AppStundenplan/AppStundenplan';
import AppModule from '../AppModule/AppModule';
import AppLehrende from '../AppLehrende/AppLehrende';
import AppLogin from '../AppLogin/AppLogin'
import AppRegister from '../AppRegister/AppRegister';
import AppImpressum from '../AppImpressum/AppImpressum';
import AppLehrendeProfil from '../AppLehrende/AppLehrendeProfil';
import AppModuleProfil from '../AppModule/AppModuleProfil'
import Test from '../AppXXX/Test'
import AppAdmin from '../AppAdmin/AppAdmin';



function App() {

  fetch('/URI', {
    credentials: 'same-origin'
  })

  return (
    <Router>
      <div className="App">
        <AppNavbar />

        <Route path="/login" component={AppLogin} />
        <Route path="/register" component={AppRegister} />

        <Route path="/" exact component={AppHome} />
        <Route path="/studienverlaufsplan" component={AppVerlaufsplan} />
        <Route path="/stundenplan" component={AppStundenplan} />
        <Route path="/module" exact component={AppModule} />
        <Route path="/module/modul.name" component={AppModuleProfil} />
        

        <Route path="/lehrende" exact component={AppLehrende} />
          <Route path="/lehrende/prof.name" component={AppLehrendeProfil} />
        <Route path="/faq" component={AppFAQ} />
        <Route path = "/admin" component= {AppAdmin}/>
        <Route path="/impressum" component={AppImpressum} />

        <Route path="/test" component={Test} />

      </div>
    </Router>

  );
}

export default App;

