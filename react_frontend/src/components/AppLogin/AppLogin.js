import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './AppLogin.css'
import { ReactComponent as Logo } from '../../assets/icons/bildmarke_unterschrift.svg';


function AppLogin() {

  return (

    <Container className="Body">
      <Logo className="LogoLogin" />

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Username.." />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password.." />
        </Form.Group>

        <Row>
          <Col>
            <Button className="Login" type="submit" size="lg" href="/" block>
              Log In
            </Button>
          </Col>

          <Col>
            <Button className="Register" type="submit"  size="lg" href="/register" block>
              Register
            </Button>
          </Col>
        </Row>

      </Form>
    </Container>


  );
}

export default AppLogin;