import React from 'react';
import { Container } from 'react-bootstrap';
import ModuleProfil from './ModuleProfil';
import './AppModule.css'



function AppModuleProfil() {

  const modul =
  {
    name:"Mathematik 1",
    picture: "/images/module/mathe1.jpg",
    zeit: "1",
    ulp:"Wintersemester",
    klausur:"schriftlich",
    ects:"10",
    inhalt:"lorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolorlorem ipsum sit amet dolor",
    personen:[
      {
        name:"Prof. Dr. Dietmar Kunz",
        picture: "/images/lehrende/platzhalter.jpg"
      },
      {
        name:"Claudia Linke",
        picture: "/images/lehrende/platzhalter.jpg"
      },
      {
        name:"Nadine Wiehlpütz",
        picture: "/images/lehrende/platzhalter.jpg"
      }
    ]
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