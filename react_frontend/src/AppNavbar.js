import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Wortmarke } from './icons/wortmarke.svg';
import './AppNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



function AppNavbar() {
  return (


    <Navbar className="Leiste" expand="lg" sticky="top">


      <Container>

        <Col xs="3">
          <Navbar.Brand className="Center" xs="3" href="/">
            <Wortmarke className="Logo" />
          </Navbar.Brand>
        </Col>


        
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" > <FontAwesomeIcon className="Hamburger" icon={faBars} /> </Navbar.Toggle>
        

        <Navbar.Collapse className="Collapsable" id="responsive-navbar-nav">


          <Col xs="auto">
            <Row>
              <Nav.Link className="hoverRed" href="/">Studienverlaufsplaner</Nav.Link>

              <Nav.Link className="hoverOrange" href="/">Stundenplan</Nav.Link>

              <Nav.Link className="hoverPurple" href="/">Kalender</Nav.Link>

              <Nav.Link className="hoverOrange" href="/">Module</Nav.Link>

              <Nav.Link className="hoverPurple" href="/">Lehrkräfte</Nav.Link>

              <Nav.Link className="hoverRed" href="/">FAQ</Nav.Link>
            </Row>

          </Col>






        </Navbar.Collapse>



      </Container>



    </Navbar>
  );
}

export default AppNavbar;
