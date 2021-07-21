import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './AppLogin.css'
import { ReactComponent as Logo } from '../../assets/icons/bildmarke_unterschrift.svg';
import axios from 'axios';


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
    event.preventDefault();

    let formData = new FormData();    //formdata object

formData.append('username', this.state.username);   //append the values with key, value pair
formData.append('password', this.state.password);

const config = {     
    headers: 
    { 
      'content-type': 'multipart/form-data' }
}

    axios
      .post('http://localhost:8080/api/authenticate', {"username":this.state.username,"password":this.state.password})
      .then(res => {
        console.log(res);
        console.log(res.data);
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