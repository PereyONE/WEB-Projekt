import React from 'react';
import { Container } from 'react-bootstrap';
import './AppModule.css'
import Module from './Module';




function AppModule() {

  const module = [
    {
      name: 'Mathematik',
      module: [
        {
          name: 'Mathematik 1',
          picture: '/images/module/platzhalter.jpg',
        },
        {
          name: 'Mathematik 2',
          picture: '/images/module/platzhalter.jpg',
        },
        {
          name: 'Mathematik 3',
          picture: '/images/module/platzhalter.jpg',
        }

      ],
    },
    {
      name: 'Phototechnik',
      module: [
        {
          name: 'PHO1',
          picture: '/images/module/platzhalter.jpg',
        },
        {
          name: 'PHO 2',
          picture: '/images/module/platzhalter.jpg',
        },
        {
          name: 'PHO 3',
          picture: '/images/module/platzhalter.jpg',
        }

      ],
    },
    {
      name: 'Elektronische Medien',
      module: [
        {
          name: 'EM1',
          picture: '/images/module/platzhalter.jpg',
        },
        {
          name: 'EM2',
          picture: '/images/module/platzhalter.jpg',
        }

      ],
    }
  ];

  return (

    <Container>

      <h1>Pflichtmodule</h1>


      {module.map((modul, i) => (
        <Module modul={modul} />
      ))}



      <h1>Vertiefungsmodule</h1>
      {module.map((modul, i) => (
        <Module modul={modul} />
      ))}
      <h1>Wahlmodule</h1>
      {module.map((modul, i) => (
        <Module modul={modul} />
      ))}

    </Container>


  );
}

export default AppModule;