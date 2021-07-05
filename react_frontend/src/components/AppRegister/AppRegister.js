import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './AppRegister.css'
import { ReactComponent as Logo } from '../../assets/icons/bildmarke_unterschrift.svg';
import axios from 'axios';


export default class AppRegister extends React.Component {
  state =
    {
      'username': '',
      'email':'',
      'password':'',
    };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post('http://localhost:8080/api/registration', {"username":this.state.username,"email":this.state.email,"password":this.state.password})
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    return (

      <Container className="Body">
        <Logo className="LogoLogin" />

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" name='username' placeholder="Username.." onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="email" name='email'placeholder="E-Mail.."  onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" name='password' placeholder="Passwort.."  onChange={this.handleChange}/>
          </Form.Group>

          {/* <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Passwort wiederholen.." />
        </Form.Group> */}

          <Row>

            <Col>
              <Button className="Register" type="submit" size="lg"  block>
                Register
              </Button>
            </Col>
          </Row>

        </Form>
      </Container>


    );
  }
}