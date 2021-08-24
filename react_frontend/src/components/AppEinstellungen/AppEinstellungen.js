import React, {Component} from 'react';
import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import './Einstellungen.css';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';


//npm install multiselect-react-dropdown      
export default class AppEinstellungen extends React.Component {
  state =
    {
      'password': '',
      'password_confirm':''
    };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };  

  handleSubmit = event => {
    event.preventDefault();

    axios
    .post('http://localhost:8080/api/einstellungen', {"password":this.state.password,"password_confirm":this.state.password_confirm})
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
}

render() {
   if(this.state.reset){
     console.log(this.state )
   }
    return(



      
    <form onSubmit={this.handleSubmit}>


<div className="create container">
                <form class="grenze">
                    <h3>4 Vertiefungen hinzufügen:
                    </h3>
                    <h6>
                    </h6>
                    <Multiselect
                    displayValue="key"
                    class="chips"
                    onRemove={function noRefCheck(){}}
                    onSearch={function noRefCheck(){}}
                    onSelect={function noRefCheck(){}}
                    options={[
                        {
                        key: 'Bildverarbeitung',
                        },
                        {
                        key: 'Produktion Audiovisueller Medien'
                        },
                        {
                        key: 'Web-Engineering'
                        },
                        {
                        key: 'Kameratechnik',
                        },
                        {
                        key: 'Mediengestaltung',
                        },
                        {
                        key: 'Mediendistribution'
                        },
                        {
                        key: 'Computergrafik'
                        }
                    ]}
                    style={{
                        chips: {
                          background: '#ef814c'
                        },
                       
                        multiselectContainer: {
                          color: '#bd5aa1'
                        },
                        searchBox: {
                          border: 'none',
                          'border-bottom': '1px solid black',
                          'border-radius': '0px'
                        }
                      }}
                    selectionLimit={4}
                    />
                </form>
                    <div>
                        <button type="button" class="btn btn-secondary buttonplace">Bestätigen</button>
                    </div>
                   <hr class="linie"></hr>
                   
                   <form>
                    <h3>
                        2 Wahlmodule hinzufügen:
                    </h3>
                    <h6>
                    </h6>
                    <Multiselect
                    displayValue="key"
                    class="chips grenze"
                    onRemove={function noRefCheck(){}}
                    onSearch={function noRefCheck(){}}
                    onSelect={function noRefCheck(){}}
                    options={[
                        {
                        key: 'Film-und Postproduction',
                        },
                        {
                        key: 'Postproduction'
                        },
                        {
                        key: 'Stereoskopie'
                        },
                        {
                        key: 'CGI-Workshop',
                        },
                        {
                        key: 'Themen der Computergrafik'
                        },
                        {
                        key: 'Mediendistribution'
                        },
                        {
                        key: 'Computergrafik'
                        }
                    ]}
                    style={{
                        chips: {
                          background: '#ef814c'
                        },

            
                       
                        multiselectContainer: {
                          color: '#bd5aa1'
                        },
                        searchBox: {
                          border: 'none',
                          'border-bottom': '1px solid black',
                          'border-radius': '0px'
                        }
                      }}
                    selectionLimit={2}
                    />
                </form>
                    <div>
                        <button type="button" class="btn btn-secondary buttonplace ">Bestätigen</button>
                    </div>
                    <hr class="linie"></hr>
                   

</div>
      <div className="container">

      <h3>
      Password ändern        
      </h3>

      <Form onSubmit={this.handleSubmit}>
      <div className="formGroup">
          <label> 
            Old Password
          </label>
          <input type="password" className="form-control" placeholder="Password"
              onChange={this.handleChange}/>
      </div>
      <div className="formGroup">
          <label>
            New Password
          </label>
          <input type="password" className="form-control" placeholder="New Password"
              onChange={this.handleChange}/>
      </div>
      <div className="formGroup">
          <label>
            New Password confirm
          </label>
          <input type="password" className="form-control" placeholder="New Password confirm"
              onChange={this.handleChange}/>
      </div>
          <button type="submit" className="btn btn-primary btn-block buttonstyle text-center" >
                  Submit
          </button> 
          </Form>  
      </div>
      </form>)
}

}
