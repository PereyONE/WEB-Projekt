//import React, { useState } from 'react';
import { Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import React from 'react';


//import {Row} from "react-bootstrap";
import './AppHome.css'


//Notiz: Die Margin-Bottom im CSS von der NavBar (die 40px) wegmachen oder verringern :-( (Default:50px)
function AppHome() {
  return(
<div class="container ">
    <Row xs={2} md={3} xl={3} className="justify-content-center mx-auto">
        <Col class=" mx-auto">
            <Link to="/studienverlaufsplan">
                    <div  class="btn btn-sq-lg boxred rounded-0 toprow" > 
                        <i  class="fas fa-chart-line icons iconcolred" ></i>
                        <h5 class="textbox" >Studienverlaufsplan </h5>
                
                    </div>
            </Link>
      </Col>

      <Col class=" mx-auto" >
            <Link to="/stundenplan">
                 <div class="btn btn-sq-lg boxorange rounded-0 toprow"> 
                        <i class="far fa-clock icons iconcolorange"></i>
                        <h5 class="textbox">Stundenplan</h5>
                 </div>
            </Link>
      </Col>

      <Col class=" mx-auto" >
      <Link to="/studienverlaufsplan">
      <div class="btn btn-sq-lg boxpurple rounded-0 toprow"> 
                  <i class="far fa-address-book icons iconcolpurple "></i>
                  <h5 class="textbox">Sonstiges</h5>
            </div>
            </Link>
      </Col>

      <Col class=" mx-auto"  >
      <Link to="/module">
      <div class="btn btn-sq-lg boxorange rounded-0 toprow"> 
                  <i class="far fa-address-book icons iconcolorange"></i>
                  <h5 class="textbox">Module</h5>
            </div>  
            </Link>
      </Col>

      <Col class=" mx-auto" >
      <Link to="/lehrende">
      <div class="btn btn-sq-lg boxpurple rounded-0 toprow"> 
                  <i class="fas fa-user-friends icons iconcolpurple"></i>
                  <h5 class="textbox">Lehrende</h5>
                  
            </div>
            </Link>
      </Col>

      <Col class=" mx-auto" >
      <Link to="/faq">
      <div class="btn btn-sq-lg boxred rounded-0 toprow"> 
                  <i class="far fa-comments icons iconcolred"></i>
                  <h5 class="textbox">FAQ</h5>
            </div>
            </Link>
      </Col>
</Row>
</div>
  )
}


export default AppHome;

