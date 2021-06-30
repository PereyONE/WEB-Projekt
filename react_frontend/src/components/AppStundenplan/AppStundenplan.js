import React, { useState } from 'react';
import './AppStundenplan.css';
import { Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Ereignis from'./Ereignis';
import Popup from'./Popup';

const Tage = () => {
  const [eintraege] = useState([
    {
      name: 'Mathe 1',
      von: '08:00',
      bis: '10:00',
      Raum: 'H1',
      tag: 'Montag',
      typ: 'Vorlesung',
    },
    {
      name: 'Mathe 1',
      von: '10:00',
      bis: '12:00',
      Raum: 'H1',
      tag: 'Montag',
      typ: 'Übung',
    },
    {
      name: 'Phot0 2',
      von: '08:00',
      bis: '10:00',
      Raum: 'H1',
      tag: 'Dienstag',
      typ: 'Tutorial',
    },
  ]);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  React.useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  if (width > breakpoint) {
    return (
      <Row className="justify-content-md-center" sm={5}>
        <div className="tag1">
          Montag<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.tag == "Montag"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
        <div className="tag2">
          Dienstag<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.tag == "Dienstag"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
        <div className="tag2">
          Mittwoch<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.tag == "Mittwoch"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
        <div className="tag2">
          Donnerstag<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.tag == "Donnerstag"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
        <div className="tag3">
          Freitag<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.tag == "Freitag"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
      </Row>
    );
  }
  return (
    <Carousel>
      <Carousel.Item>
        <div className="tag4">
          Montag<br></br>
          {eintraege.map((eintrag, i) => (
            <Ereignis className="Vorlesung" eintrag={eintrag} index={i} />
          ))}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="tag4">
          Dienstag<br></br>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="tag4">
          Mittwoch<br></br>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="tag4">
          Donnerstag<br></br>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="tag4">
          Freitag<br></br>
        </div>
      </Carousel.Item>
    </Carousel>
    
  );
}

function AppStundenplan() {
  
  return (
    
    <div className="container">
     
      <Row className="justify-content-md-center" xs={2} md={4}>
        <h1>Stundenplan</h1>
        <div></div>
        <div className="inhaltRechts">
          <select className="dropdown1">
                <option value="1.Semester">1.Semester</option>
                <option value="2.Semester">2.Semester</option>
                <option value="3.Semester">3.Semester</option>
                <option value="4.Semester">4.Semester</option>
                <option value="5.Semester">5.Semester</option>
                <option value="6.Semester">6.Semester</option>
                <option value="7.Semester">7.Semester</option>
          </select>
        </div>
        <div className="inhaltRechts"><Popup/></div>
        
      </Row>
      <Tage/>
      
    </div>
    
    
  );
}

export default AppStundenplan;