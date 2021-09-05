import React, { useState, useEffect} from 'react';
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
import AppEinstellungen from '../AppEinstellungen/AppEinstellungen';
import AppAdmin from '../AppAdmin/AppAdmin';

function App() {

  fetch('/URI', {
    credentials: 'same-origin'
  })

  const [auth, setAuth]=useState(true)

  const changeAuth=()=> {
    if(localStorage.getItem('token')!=null){
      setAuth(true)
    }
    else{
      setAuth(false)
    }
  }


  return (
    
    <Router>
      <div className="App">

        <AppNavbar auth={auth}/>
        
        <Route path="/login" component={AppLogin} /> {/* auth implementiert */}
        <Route path="/register" component={AppRegister} /> {/* auth implementiert */}

       

        <Route path="/" exact component={()=> <AppHome auth={auth} />} /> {/* auth implementiert */} 
        <Route path="/studienverlaufsplan" component={()=><AppVerlaufsplan auth={auth} />} /> {/* auth implementiert */}
        <Route path="/stundenplan" component={()=> <AppStundenplan auth={auth} />} />{/* auth implementiert */}
        <Route path="/module" exact component={()=> <AppModule auth={auth} />} />{/* auth implementiert */}
        <Route path="/module/:modulid" component={()=> <AppModuleProfil auth={auth} />} />{/* auth implementiert */}


        <Route path="/lehrende" exact component={()=><AppLehrende auth={auth}/>} /> {/* auth implementiert */}
        <Route path="/lehrende/:profid" component={()=><AppLehrendeProfil auth={auth}/>} />{/* auth implementiert */}
        <Route path="/faq" component={()=><AppFAQ auth={auth} />} /> {/* auth implementiert */}
        <Route path="/einstellungen" component={AppEinstellungen} />
        <Route path="/admin" component={AppAdmin} />
        <Route path="/impressum" component={()=><AppImpressum auth={auth} />} /> {/* auth implementiert */}
        <Route path="/appadmin" component={()=><AppAdmin auth={auth}/>} />


        <Route path="/test" component={Test} />

      </div>
    </Router>

  );
}

export default App;

