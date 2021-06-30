import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Lehrende from './Lehrende'



function AppLehrende() {

  const [profs] = useState([
    {
      name: 'Prof. Dr. Reiter',
      picture: '/images//lehrende/platzhalter.jpg',
    },
    {
      name: 'Prof. Dr. Grünvogel',
      picture: '/images//lehrende/platzhalter.jpg',
    },
    {
      name: 'Prof. Dr. Fischer',
      picture: '/images//lehrende/platzhalter.jpg',
    },
    {
      name: 'Prof. Dr. Kunz',
      picture: '/images//lehrende/platzhalter.jpg',
    },

    {
      name: 'Prof. Dr. Reiter',
      picture: '/images//lehrende/platzhalter.jpg',
    },
    {
      name: 'Prof. Dr. Grünvogel',
      picture: '/images//lehrende/platzhalter.jpg',
    },
    {
      name: 'Prof. Dr. Fischer',
      picture: '/images//lehrende/platzhalter.jpg',
    },
    {
      name: 'Prof. Dr. Kunz',
      picture: '/images//lehrende/platzhalter.jpg',
    },

  ]);

  return (

    <Container>
      <h1>Professor*innen</h1>
      <div className="profs">
        <Row xs={2} lg={3}>
          {profs.map((prof, i) => (

            <Lehrende prof={prof} index={i} />

          ))}
        </Row>
      </div>

      <h1>Mitarbeiter*innen</h1>
      <div className="profs">
        <Row >
          {profs.map((prof, i) => (

            <Lehrende prof={prof} index={i} />

          ))}
        </Row>
      </div>
    </Container>


  );
}

export default AppLehrende;