import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Wortmarke } from '../../assets/icons/wortmarke.svg';
import './AppNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



function AppNavbar() {
  return (


    <Navbar className="Leiste" expand="lg" sticky="top">


      <Container>

        <Col xs="3">
          <Navbar.Brand className="Center" xs="3" href="/">
            <Wortmarke className="Logo" />
          </Navbar.Brand>
        </Col>



        <Navbar.Toggle aria-controls="responsive-navbar-nav" > <FontAwesomeIcon className="Hamburger" icon={faBars} /> </Navbar.Toggle>


        <Navbar.Collapse className="Collapsable" id="responsive-navbar-nav">


          <Col xs="auto">
            <Row>
              
              <Nav.Link className="hoverRed" href="/studienverlaufsplan">Studienverlaufsplaner</Nav.Link>

              <Nav.Link className="hoverOrange" href="/stundenplan">Stundenplan</Nav.Link>

              <Nav.Link className="hoverPurple" href="/kalender">Kalender</Nav.Link>

              <Nav.Link className="hoverOrange" href="/module">Module</Nav.Link>

              <Nav.Link className="hoverPurple" href="/lehrende">Lehrende</Nav.Link>

              <Nav.Link className="hoverRed" href="/faq">FAQ</Nav.Link>

            </Row>

          </Col>






        </Navbar.Collapse>



      </Container>



    </Navbar>
  );
}

export default AppNavbar;
