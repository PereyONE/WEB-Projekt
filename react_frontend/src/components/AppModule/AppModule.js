import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './AppModule.css'
import Module from './Module';
import { Redirect } from 'react-router';
import axios from 'axios';



function AppModule({ auth }) {
  const [module, setmodule] = useState([]);


  const [kategorien, setKategorien] = useState([
    { typ: 'Pflichtmodule', categories: [] },
    { typ: 'Vertiefungsmodule', categories: [] },
    { typ: 'Wahlmodule', categories: [] }
  ])

  useEffect(() => {
    axios.get('/api/modules')
      .then(res => {
        setmodule(res.data)
      })
      .catch(err => {
        console.log(err)
        if (err.response.status === 403) {
          localStorage.clear()
          window.location.reload()
        }
      })

  }, [])

  useEffect(() => {

    module.map((modul) => {
      console.log(kategorien)
      if ((!(kategorien[0].categories.includes(modul.oberkategorie))) && (modul.moduleTyp === 'Pflichtmodule')) {
        setKategorien([
          ...kategorien,
          kategorien[0].categories.push(modul.oberkategorie)
        ]
        )
      }
      if ((!(kategorien[1].categories.includes(modul.oberkategorie))) && (modul.moduleTyp === 'Vertiefungsmodule')) {
        setKategorien([
          ...kategorien,
          kategorien[1].categories.push(modul.oberkategorie)
        ]
        )
      }
      if ((!(kategorien[2].categories.includes(modul.oberkategorie))) && (modul.moduleTyp === 'Wahlmodule')) {
        setKategorien([
          ...kategorien,
          kategorien[2].categories.push(modul.oberkategorie)
        ]
        )
      }



    })


  })

  if (!auth) {
    return <Redirect to="/login" />
  }




  return (

    <Container>


      <h1>Pflichtmodule</h1>
      {kategorien[0].categories.map((kategorie, i) => {
        var mods = module
        return (<Module kategorie={kategorie} mod={mods} />)
      })}

      <h1>Vertiefungsmodule</h1>
      {kategorien[1].categories.map((kategorie, i) => {
        var mods = module
        return (<Module kategorie={kategorie} mod={mods} />)
      })}

      <h1>Wahlmodule</h1>
      {kategorien[2].categories.map((kategorie, i) => {
        var mods = module
        return (<Module kategorie={kategorie} mod={mods} />)
      })}

    </Container>


  );
}

export default AppModule;