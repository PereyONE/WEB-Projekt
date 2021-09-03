import React, { useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import './AppModule.css'
import Module from './Module';
import { Redirect } from 'react-router';
import axios from 'axios';



function AppModule({auth}) {
  const [module, setmodule] = useState([]);

  useEffect(()=> {
    axios.get('/api/modules')
    .then(res => {
      setmodule(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  if (!auth) {
    return <Redirect to="/login" />
  }

  return (

    <Container>

      <h1>Pflichtmodule</h1>
      {module.map((modul, i) => {
        if(modul.moduleTyp == "Pflichtmodule"){
          return(<Module modul={modul} />)
        }
      })}

      <h1>Vertiefungsmodule</h1>
      {module.map((modul, i) => {
        if(modul.moduleTyp == "Vertiefungsmodule"){
          return(<Module modul={modul} />)
        }
      })}

      <h1>Wahlmodule</h1>
      {module.map((modul, i) => {
        if(modul.moduleTyp == "Wahlmodule"){
          return(<Module modul={modul} />)
        }
      })}

    </Container>


  );
}

export default AppModule;