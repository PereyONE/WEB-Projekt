import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
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

    <div>
      <div className="profs">
        <Row className="justify-content-md-center" xs={2} md={2}>
          {profs.map((prof, i) => (

            <Lehrende prof={prof} index={i} />

          ))}
        </Row>
      </div>
    </div>


  );
}

export default AppLehrende;