import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './AppRegister.css'
import { ReactComponent as Logo } from '../../assets/icons/bildmarke_unterschrift.svg';


function AppRegister() {

  return (

    <Container className="Body">
      <Logo className="Logo" />

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Username.." />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="E-Mail.." />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password.." />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="repeat Password.." />
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