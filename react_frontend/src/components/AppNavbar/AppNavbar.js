import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Wortmarke } from '../../assets/icons/wortmarke.svg';
import './AppNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import axios from "axios";





function AppNavbar({ auth }) {


  const [show, setShow] = useState(false)
  const [authAdmin, setAuthAdmin] = useState(false)

  function clickHandler() {
    setShow(!show);
  }

  function logoutLeiste() {
    localStorage.clear()
    window.location.reload()
  }

  useEffect(() => {
    axios.get('/api/authenticate/admin')
        .then(res => {
            setAuthAdmin(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}, [])


  if (!auth) { return null }
  else {
    return (


      <Navbar className="Leiste" expand="lg" sticky="top">


        <Container>



          <Col className="Left" >
            <Navbar.Brand href="/">
              <Wortmarke className="Logo" />
            </Navbar.Brand>
          </Col>


          <Navbar.Toggle className="Toggler" aria-controls="responsive-navbar-nav" > <FontAwesomeIcon className="Hamburger" icon={faBars} /> </Navbar.Toggle>

          <Navbar.Collapse className="Collapsable" id="responsive-navbar-nav">

            <Col xs="auto">

              <Row className="Center"  >


                <ul className="NavLinks">
                  <li>
                    <Nav.Link className="Red" href="/login" id="shown">Logout</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="hoverRed" href="/studienverlaufsplan">Studienverlaufsplaner</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="hoverOrange" href="/stundenplan">Stundenplan</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="hoverOrange" href="/module">Module</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="hoverPurple" href="/lehrende">Lehrende</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="hoverRed" href="/faq">FAQ</Nav.Link>
                  </li>
                  <li><Nav.Link className="hoverPurple" href="/einstellungen">Einstellungen</Nav.Link></li>
                  <li><Nav.Link className="hoverRed" href="/impressum" id="shown">Impressum</Nav.Link></li>

                </ul>

              </Row>

            </Col>


            <Col className="Right" >
              <button onClick={clickHandler}>
                <FontAwesomeIcon className="Hamburger" icon={faBars} id="hidden" />
              </button>

            </Col>

          </Navbar.Collapse>

        </Container>

        <ul className={(show ? "NavLinksSide-Active" : "NavLinksSide")}>

          <li>
            <button className="Red" onClick={logoutLeiste}>Logout</button>
          </li>

          <li>
            <Nav.Link href="/admin">{authAdmin ? 'Admin':''}</Nav.Link>
          </li>


          <li class="top">
            <Nav.Link href="/info">Information</Nav.Link>
          </li>

          <li>
            <Nav.Link href="/impressum">Impressum</Nav.Link>
          </li>

        </ul>
      </Navbar>
    );

  }
}

export default AppNavbar;
