import React, { useState, useEffect} from 'react';
import './AppStundenplan.css';
import { Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Ereignis from'./Ereignis';
import Popup from'./Popup';
import { Redirect } from 'react-router';
import axios from 'axios';

const Tage = () => {
  const [eintraege, seteintraege] = useState([]);

  useEffect(()=> {
    axios.get('/api/termine')
    .then(res => {
      seteintraege(res.data)
    })
    .catch(function (error) {
      if (error.response.status===403) {
        localStorage.clear()
        window.location.reload()
      }
    })
  },[])
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
            if(eintrag.wochentag == "Montag"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
        <div className="tag2">
          Dienstag<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.wochentag == "Dienstag"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
        <div className="tag2">
          Mittwoch<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.wochentag == "Mittwoch"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
        <div className="tag2">
          Donnerstag<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.wochentag == "Donnerstag"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
        <div className="tag3">
          Freitag<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.wochentag == "Freitag"){
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
          {eintraege.map((eintrag, i) => {
            if(eintrag.wochentag == "Montag"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="tag4">
          Dienstag<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.wochentag == "Dienstag"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="tag4">
          Mittwoch<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.wochentag == "Mittwoch"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="tag4">
          Donnerstag<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.wochentag == "Donnerstag"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="tag4">
          Freitag<br></br>
          {eintraege.map((eintrag, i) => {
            if(eintrag.wochentag == "Freitag"){
              return(<Ereignis eintrag={eintrag} index={i} />)
            }
          })}
        </div>
      </Carousel.Item>
    </Carousel>
    
  );
}

function AppStundenplan({auth}) {

  if (!auth) {
    return <Redirect to="/login" />
}
  
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