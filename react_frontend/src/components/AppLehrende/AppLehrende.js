import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Lehrende from './Lehrende'
import {Redirect} from 'react-router-dom'
import axios from 'axios';

function AppLehrende({ auth }) {
  const [profs, setprofs] = useState([]);

  useEffect(()=> {
    axios.get('/api/lehrende')
    .then(res => {
      setprofs(res.data)
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
      <h1>Professor*innen</h1>
      <div className="profs">
        <Row xs={2} lg={3}>
          {profs.map((prof, i) => {
            if(prof.funktion == "Professor"){
              return(<Lehrende prof={prof} index={i} />)
            }
          })}
        </Row>
      </div>

      <h1>Mitarbeiter*innen</h1>
      <div className="profs">
        <Row >
          {profs.map((prof, i) => {
            if(prof.funktion == "Mitarbeiter"){
              return(<Lehrende prof={prof} index={i} />)
            }
          })}
        </Row>
      </div>

      <h1>Externe Mitarbeiter*innen</h1>
      <div className="profs">
        <Row >
          {profs.map((prof, i) => {
            if(prof.funktion == "Externe"){
              return(<Lehrende prof={prof} index={i} />)
            }
          })}
        </Row>
      </div>
    </Container>


  );
}

export default AppLehrende;