import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './AppRegister.css'
import { ReactComponent as Logo } from '../../assets/icons/bildmarke_unterschrift.svg';


function AppRegister() {

  return (

    <Container className="Body">
      <Logo className="LogoLogin" />

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Username.." />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="email" placeholder="E-Mail.." />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Passwort.." />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Passwort wiederholen.." />
        </Form.Group>

        <Row>

          <Col>
            <Button className="Register" type="submit" size="lg" href="/" block>
              Register
            </Button>
          </Col>
        </Row>

      </Form>
    </Container>


  );
}

export default AppRegister;