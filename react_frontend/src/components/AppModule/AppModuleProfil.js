import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ModuleProfil from './ModuleProfil';
import './AppModule.css'
import axios from 'axios';
import { Link, useParams, Redirect } from 'react-router-dom';

function AppModuleProfil({ auth }) {
  const { id } = useParams();
  const [modul, setmodul] = useState({ lehrende: [] });

  useEffect(() => {
    axios.get(`api/modules/${id}`)
      .then(res => {
        setmodul(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
        if (err.response.status === 403) {
          localStorage.clear()
          window.location.reload()
        }
      })
  }, [])



  if (!auth) {
    return <Redirect to="/login" />
  }

  return (

    <Container>
      <div>
        <ModuleProfil modul={modul} />
      </div>
    </Container>


  );
}

export default AppModuleProfil;