import React, { useState, useEffect} from 'react';
import './AppStundenplan.css';
import { Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Ereignis from'./Ereignis';
import Popup from'./Popup';
import { Redirect } from 'react-router';
import axios from 'axios';
import Stundenplan from './Stundenplan';



function AppStundenplan({auth}) {
  const [semester, setsemester] = useState("1");

  const handleChange = e => {
    setsemester(e.target.value)
    console.log(semester)
  };

  if (!auth) {
    return <Redirect to="/login" />
}
  
  return (
    
    <div className="container">
     
      <Row className="justify-content-md-center" xs={2} md={4}>
        <h1>Stundenplan</h1>
        <div></div>
        <div className="inhaltRechts">
          <select className="dropdown1" onChange={handleChange}>
                <option value="1">1.Semester</option>
                <option value="2">2.Semester</option>
                <option value="3">3.Semester</option>
                <option value="4">4.Semester</option>
                <option value="5">5.Semester</option>
                <option value="6">6.Semester</option>
                <option value="7">7.Semester</option>
          </select>
        </div>
        <div className="inhaltRechts"><Popup semester={semester}/></div>
        
      </Row>
      <Stundenplan semester={semester}/>
      
    </div>
    
    
  );
}

export default AppStundenplan;