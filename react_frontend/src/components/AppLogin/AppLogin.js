import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './AppLogin.css'
import { ReactComponent as Logo } from '../../assets/icons/bildmarke_unterschrift.svg';
import axios from 'axios';
import { Redirect } from 'react-router-dom';




export default class AppLogin extends React.Component {
  state =
    {
      'username':'',
      'password':'',
    };

  

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    localStorage.clear();
    event.preventDefault(); 
    
  axios
    .post('/api/authenticate', {"username":this.state.username,"password":this.state.password})
    .then(res => {
      localStorage.setItem('token', res.data.token);
      return(
      <Redirect to='/'/>
      )
    });
  }
  render(){
    return (

      <Container className="Body">
      <Logo className="LogoLogin" />

      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" name='username' placeholder="E-Mail.." onChange={this.handleChange}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" name='password' placeholder="Passwort.." onChange={this.handleChange}/>
        </Form.Group>

        <Row>
          <Col>
            <Button className="Login" type="submit" size="lg"  block>
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
}

//export default AppLogin;