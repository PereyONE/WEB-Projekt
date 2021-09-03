import React , {useState} from 'react';
import { row, col} from 'react-bootstrap';
import './AppAdmin.css'
import AppAdminFunc from './AppAdminFunc';

export default class Testt extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            list: [
        {
            id: 0,
            anrede: "",
            vorname: "",
            nachname: "",
            eMail: "",
            telefon: 0,
        },
        /*{
            id: 1,
            anrede: 'Herr Grünvogel',
            vorname: 'Stefan',
            Nachname: 'Grünvogel',
            eMail: 'stefan.grünvogel@th-koeln.de',
            telefon: 123456789
        },
           {
            id: 2,
            anrede: 'Herr Kunz',
            vorname: 'Stefan',
            Nachname: 'Grünvogel',
            eMail: 'stefan.grünvogel@th-koeln.de',
            telefon: 123456789
        },
           {
            id: 3,
            anrede: 'Herr Reiter',
            vorname: 'Stefan',
            Nachname: 'Grünvogel',
            eMail: 'stefan.grünvogel@th-koeln.de',
            telefon: 123456789
        },
           {
            id: 4,
            anrede: 'Herr Fuhrmann',
            vorname: 'Stefan',
            Nachname: 'Grünvogel',
            eMail: 'stefan.grünvogel@th-koeln.de',
            telefon: 123456789
        },*/
        ],
    };
    this.inputChange = this.inputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };

  inputChange(event) {
      this.setState({vorname: event.target.value});
  }

    handleSubmit(event){
        alert("Vorname wurde geändert/hinzugefügt:" + this.state.value);
        event.preventDefault();
    }

  

    render() {
        return (
            <div className="container">
                <h2>
                    Lehrende
                </h2>
                <br></br>
                    <div class="row">
                        <div class="col-auto mr-auto">Zu bearbeitenden Lehrenden auswählen</div>
                            <div class="col-auto ">
                                <button type="button"  class="btn-small btn btn-danger  ">Mitarbeiter löschen!</button>
                            </div>
                    </div>
                <br></br>
                
             <div class= "row">
                <div  class="col" >
                <div class="Scroll">
                    <div class="list-group" >
                        {this.state.list.map(item =>(
                            <button type="button"   class="list-group-item list-group-item-action" > {item.anrede}  
                            </button>))}
                    </div>
                </div>
                <div>
                    <br></br>
                <form onSubmit= {this.handleSubmit}>
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text lenge" id="inputGroup-sizing-sm">Anrede </span>
                        </div>
                            <input 
                                type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.inputChange} name="anrede">
                            </input>
                            <input type="submit" value="Submit" />
                        </div>
                </form>

                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend ">
                        <span class="input-group-text lenge" id="inputGroup-sizing-sm " >
                            Vorname
                            </span>
                    </div>
                        <input 
                            type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.inputChange} name="vorname">
                        </input>
                    </div>

                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Nachname</span>
                            </div>
                                <input 
                                    type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.inputChange} name="nachname">
                                </input>
                        </div>

                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text lenge" id="inputGroup-sizing-sm">E-Mail</span>
                        </div>
                            <input 
                                type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.inputChange} name="eMail">
                            </input>
                        </div>


                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text lenge" id="inputGroup-sizing-sm">Telefonnummer</span>
                        </div>
                            <input 
                            type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.inputChange} name="telefon">
                            {this.state.telefon}
                            </input>
                        </div>


                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text lenge" id="inputGroup-sizing-sm">Raumnummer</span>
                        </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                            </input>
                        </div>
                </div>
                
</div>
</div>
</div>



    );
    }
}
