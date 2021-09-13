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
import AppEinstellungen from '../AppEinstellungen/AppEinstellungen';
import AppInfo from '../AppInfo/AppInfo'

import AppAdmin from '../AppAdmin/AppAdmin';
import AdminLehrende from '../AppAdmin/AdminLehrende';
import AdminModule from '../AppAdmin/AdminModule';
import AdminFAQ from '../AppAdmin/AdminFAQ';
import AdminVertiefung from '../AppAdmin/AdminVertiefung';
import AdminTermine from '../AppAdmin/AdminTermine';


function App() {

  fetch('/URI', {
    credentials: 'same-origin'
  })

  const [auth, setAuth]=useState(true)


  useEffect(() => {
    if(localStorage.getItem('token')!=null){
      setAuth(true)
    }
    else{
      setAuth(false)
    }
    console.log('Auth: '+auth)

  })

  return (
    
    <Router>
      <div className="App">

        <AppNavbar auth={auth}/>
        
        <Route path="/login" component={()=> <AppLogin auth={auth} />} /> {/* auth implementiert */}
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
        <Route path="/impressum" component={()=><AppImpressum auth={auth} />} /> {/* auth implementiert */}
        <Route path="/info" component={()=><AppInfo auth={auth} />} /> {/* auth implementiert */}

        <Route path="/admin" exact component={AppAdmin} />
        <Route path="/adminLehrende" component={AdminLehrende} />
        <Route path="/adminModule" component={AdminModule} />
        <Route path="/adminFaqs" component={AdminFAQ} />
        <Route path="/adminVertiefungen" component={AdminVertiefung} />
        <Route path="/adminTermine" component={AdminTermine}/>
        
      </div>
    </Router>

  );
}

export default App;

