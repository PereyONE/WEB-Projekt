import React , {useState} from 'react';
import { row, col} from 'react-bootstrap';
import './AppAdmin.css'
import AppAdminFunc from './AppAdminFunc';



function AppAdmin( {prof} ) { //evtl zu class umändern!!!!! Siehe Register!export default class AppRegister extends React.Component {
  //Schriftart ändern :-)
    const [profs, setName] = useState([
        {id:1,Ansprech: 'Herr Fischer', vorname: 'Gregor', nachname: "Fischer", eMail: 'xyz@gmail.com', Telefonnummer: '11111111', Raumnummer:'ZW- 08', VonZeit:'10:00Uhr', BisZeit: '14Uhr', Verfügbarkeit:true,},
        {id:2,Ansprech: 'Herr Fischer',vorname: 'Stefan', nachname: "Wischer", eMail: 'xyzss@gmail.com', Telefonnummer: '111111131', Raumnummer:'ZW- 08', VonZeit:'10:02Uhr', BisZeit: '14Uhr', Verfügbarkeit:true,},
        {id:3,Ansprech: 'Herr Reiter', vorname: 'Greg', nachname: "Ulrich", eMail: 'xyzaa@gmail.com', Telefonnummer: '11622111111', Raumnummer:'ZW- 08', VonZeit:'10:03Uhr', BisZeit: '14Uhr', Verfügbarkeit:true,},
        {id:4,Ansprech: 'Herr Rühlberg', vorname: 'Wegl', nachname: "Wilhelm", eMail: 'xyzqq@gmail.com', Telefonnummer: '1111131121', Raumnummer:'ZW- 08', VonZeit:'10:04Uhr', BisZeit: '14:05Uhr', Verfügbarkeit:true,},
        {id:5,Ansprech: 'Herr Fischer', vorname: 'Hector', nachname: "Greg", eMail: 'xyyyz@gmail.com', Telefonnummer: '1112211111', Raumnummer:'ZW- 08', VonZeit:'10:05Uhr', BisZeit: '14Uhr', Verfügbarkeit:true,},
        ])
        
    const [kurse] = useState([
        {id:1, Ansprech: 'Herr Fischer', vorname: 'Gregor', nachname: "Fischer", eMail: 'xyz@gmail.com', Telefonnummer: '11111111', Raumnummer:'ZW- 08', VonZeit:'10:00Uhr', BisZeit: '14Uhr', Verfügbarkeit:true,},
        {id:2,Ansprech: 'Herr Fischer',vorname: 'Stefan', nachname: "Wischer", eMail: 'xyzss@gmail.com', Telefonnummer: '111111131', Raumnummer:'ZW- 08', VonZeit:'10:02Uhr', BisZeit: '14Uhr', Verfügbarkeit:true,},
        {id:3,Ansprech: 'Herr Reiter', vorname: 'Greg', nachname: "Ulrich", eMail: 'xyzaa@gmail.com', Telefonnummer: '11622111111', Raumnummer:'ZW- 08', VonZeit:'10:03Uhr', BisZeit: '14Uhr', Verfügbarkeit:true,},
        {id:4,Ansprech: 'Herr Rühlberg', vorname: 'Wegl', nachname: "Wilhelm", eMail: 'xyzqq@gmail.com', Telefonnummer: '1111131121', Raumnummer:'ZW- 08', VonZeit:'10:04Uhr', BisZeit: '14:05Uhr', Verfügbarkeit:true,},
        {id:5,Ansprech: 'Herr Fischer', vorname: 'Hector', nachname: "Greg", eMail: 'xyyyz@gmail.com', Telefonnummer: '1112211111', Raumnummer:'ZW- 08', VonZeit:'10:05Uhr', BisZeit: '14Uhr', Verfügbarkeit:true,},
        ])    

    
    function handleClick(i){
        //preventDefault();
        this.setState(i);
        console.log(i);
    }
    
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
          <br>
          </br>
        
<div class= "row">
        <div  class="col" >
        <div class="Scroll">
            <div class="list-group" >
                {profs.map((prof, i) => (
                       <button key={i} onClick={() => this.handleClick(i)} type="button" class="list-group-item list-group-item-action" > {prof.Ansprech}  </button>                          
                            ))}
            </div>
        </div>
                {/* <button type="button" class="list-group-item list-group-item-action">Mr. Krabs</button>
                <button type="button" class="list-group-item list-group-item-action"> Mr. Incredible </button>
                <button type="button" class="list-group-item list-group-item-action">Mr. Wash</button>
                <button type="button" class="list-group-item list-group-item-action">Meister Propper</button>
                <button type="button" class="list-group-item list-group-item-action" >BURAK YILMAZ TÜRKIYE TÜRKIYE</button> */}
        <div>
            <br></br>

        <div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text lenge" id="inputGroup-sizing-sm">Titel </span>
  </div>
  <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
      </input>
            </div>

            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend ">
                    <span class="input-group-text lenge" id="inputGroup-sizing-sm ">
                    <input/>
                    
                     </span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                  
                    </input>
                </div>


                <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text lenge" id="inputGroup-sizing-sm">Nachname     </span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                    </input>
                </div>


            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text lenge" id="inputGroup-sizing-sm">E-Mail</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                    </input>
                </div>


            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text lenge" id="inputGroup-sizing-sm">Telefonnummer</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
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

<div class="col ">
<div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Sprechstunde</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small"  placeholder="Wochentag" aria-describedby="inputGroup-sizing-sm">
                    </input>

                    <input type="text" class="form-control" aria-label="Small" placeholder="Beginnende Uhrzeit " aria-describedby="inputGroup-sizing-sm">
                    </input>

                    <input type="text" class="form-control" aria-label="Small" placeholder="Endende Uhrzeit" aria-describedby="inputGroup-sizing-sm">
                    </input>
                    
                </div>

                    <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                            <label class="form-check-label" for="inlineCheckbox1">Nach Vereinbarung</label>
                    </div>

        

                    <div class="input-group marg">
  <select class="custom-select" id="inputGroupSelect04">
    <option selected>Modul hinzufügen</option>
    <option value="1">Mathematik 1</option>
    <option value="2">Mathematik 2</option>
    <option value="3">Geschichtsunterricht</option>
  </select>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Hinzufügen</button>
  </div>
</div>
     


<form>
<fieldset disabled>
    <div class="form-group">
      <label for="disabledTextInput"></label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Modulliste"></input>
    </div>
    </fieldset>
   
    </form>

    <label for="formFileSm" class="form-label">Bild auswählen: </label>
<input class=" form-control-sm" id="formFileSm" type="file" />


<button type="button" class="btn btn-info btn-lg btn-block">Alle Änderungen speichern!</button>


</div>



</div>



<h2>
              Module
          </h2>
          <br></br>
          <div class="row">
          <div class="col-auto mr-auto">Zu bearbeitenden Lehrenden auswählen</div>
            <div class="col-auto ">
            <button type="button"  class="btn-small btn btn-danger  ">Mitarbeiter löschen!</button>
            </div>
         
          </div>
          <br>
          </br>
<div class= "row">
        <div  class="col" >
        <div class="Scroll">
            <div class="list-group" >
                {profs.map((prof, i) => (
                       <button type="button" class="list-group-item list-group-item-action" ><AppAdminFunc prof={prof} index={i}/>  </button>                          
                            ))}
            </div>
        </div>
                {/* <button type="button" class="list-group-item list-group-item-action">Mr. Krabs</button>
                <button type="button" class="list-group-item list-group-item-action"> Mr. Incredible </button>
                <button type="button" class="list-group-item list-group-item-action">Mr. Wash</button>
                <button type="button" class="list-group-item list-group-item-action">Meister Propper</button>
                <button type="button" class="list-group-item list-group-item-action" >BURAK YILMAZ TÜRKIYE TÜRKIYE</button> */}
        <div>
            <br></br>

        <div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text lenge" id="inputGroup-sizing-sm">Modulname </span>
  </div>
  <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
      </input>
            </div>

            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend ">
                    <span class="input-group-text lenge" id="inputGroup-sizing-sm ">Modulabkürzung </span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                    </input>
                </div>


                <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text lenge" id="inputGroup-sizing-sm">ECTS     </span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                    </input>
                </div>


            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text lenge" id="inputGroup-sizing-sm">Modulart</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                    </input>
                </div>


            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text lenge" id="inputGroup-sizing-sm">Klausurart</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                    </input>
                </div>


            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text lenge" id="inputGroup-sizing-sm">Beschreibung</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                    </input>
                    
                </div>


        </div>
</div>

<div class="col ">
<h6 class= "font">Angeboten im:</h6>
<div class="form-check form-check-inline">
  
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
  <label class="form-check-label" for="inlineRadio1">Sommersemester</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
  <label class="form-check-label" for="inlineRadio2">Wintersemester</label>
</div>

<h6 class= "font">Regelstudienzeit:</h6>
<div class="form-check form-check-inline">
  
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
  <label class="form-check-label" for="inlineRadio1">7 Semester</label>
</div>
<div class="form-check form-check-inline">
    <br></br>
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
  <label class="form-check-label" for="inlineRadio2">12 Semester</label>
</div>

<div class="input-group input-group-sm mb-3">

                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Sprechstunde</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small"  placeholder="Wochentag" aria-describedby="inputGroup-sizing-sm">
                    </input>

                    <input type="text" class="form-control" aria-label="Small" placeholder="Uhrzeit-Beginn " aria-describedby="inputGroup-sizing-sm">
                    </input>

                    <input type="text" class="form-control" aria-label="Small" placeholder="Uhrzeit-Ende" aria-describedby="inputGroup-sizing-sm">
                    </input>
                    
                </div>

                    <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                            <label class="form-check-label" for="inlineCheckbox1">Nach Vereinbarung</label>
                    </div>

                    <div class="input-group marg">
                        <br></br>
                <select class="custom-select" id="inputGroupSelect04">
                    <option selected>Lehrende hinzufügen </option>
                    <option value="1">Herr Fischer</option>
                    <option value="2">Herr Grünvogel</option>
                    <option value="3">Geschichtsunterricht</option>
                </select>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Hinzufügen</button>
                </div>
                </div>
                    


<form>
<fieldset disabled>
    <div class="form-group">
      <label for="disabledTextInput"></label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Lehrendeliste"></input>
    </div>
    </fieldset>
   
    </form>

    <label for="formFileSm" class="form-label">Bild auswählen: </label>
<input class=" form-control-sm" id="formFileSm" type="file" />
<button type="button" class="btn btn-info btn-lg btn-block">Alle Änderungen speichern!</button>
</div>
</div>

<h2>
              Vertiefungsrichtung
          </h2>
          <br></br>
          <div class="row">
          <div class="col-auto mr-auto">Zu bearbeitende Vertiefungsrichtungauswählen</div>
            <div class="col-auto ">
            <button type="button"  class="btn-small btn btn-danger  ">Vertiefungsrichtung löschen!</button>
            </div>
         
          </div>
          <br>
          </br>
<div class= "row">
        <div  class="col" >
        <div class="Scroll">
            <div class="list-group" >
                {profs.map((prof, i) => (
                       <button type="button" class="list-group-item list-group-item-action" ><AppAdminFunc prof={prof} index={i}/>  </button>                          
                            ))}
            </div>
        </div>
                {/* <button type="button" class="list-group-item list-group-item-action">Mr. Krabs</button>
                <button type="button" class="list-group-item list-group-item-action"> Mr. Incredible </button>
                <button type="button" class="list-group-item list-group-item-action">Mr. Wash</button>
                <button type="button" class="list-group-item list-group-item-action">Meister Propper</button>
                <button type="button" class="list-group-item list-group-item-action" >BURAK YILMAZ TÜRKIYE TÜRKIYE</button> */}
        <div>
            <br></br>

        <div class="input-group input-group-sm mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text greatLenge" id="inputGroup-sizing-sm">Name der Vertiefungsrichtung </span>
  </div>
  <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
      </input>
            </div>
        </div>
</div>
<div class="col ">

<button type="button" class="btn btn-info btn-lg btn-block margTop">Alle Änderungen speichern!</button>
</div>
</div>



<h2>
              FAQ
          </h2>
          <br></br>
          <div class="row">
          <div class="col-auto mr-auto">Zu bearbeitende Frage auswählen</div>
            <div class="col-auto ">
            <button type="button"  class="btn-small btn btn-danger  ">Vertiefungsrichtung löschen!</button>
            </div>
         
          </div>
          <br>
          </br>
<div class= "row">
        <div  class="col" >
        <div class="Scroll">
            <div class="list-group" >
                {profs.map((prof, i) => (
                       <button type="button" class="list-group-item list-group-item-action" ><AppAdminFunc prof={prof} index={i}/>  </button>                          
                            ))}
            </div>
        </div>
                {/* <button type="button" class="list-group-item list-group-item-action">Mr. Krabs</button>
                <button type="button" class="list-group-item list-group-item-action"> Mr. Incredible </button>
                <button type="button" class="list-group-item list-group-item-action">Mr. Wash</button>
                <button type="button" class="list-group-item list-group-item-action">Meister Propper</button>
                <button type="button" class="list-group-item list-group-item-action" >BURAK YILMAZ TÜRKIYE TÜRKIYE</button> */}
        <div>
            <br></br>
            <div class="form-group">
    <label for="exampleFormControlTextarea1">Frage:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
        </div>
        <div>
        
            <div class="form-group">
    <label for="exampleFormControlTextarea1">Antwort:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
        </div>
</div>
<div class="col ">
    <button type="button" class="btn btn-info btn-lg btn-block">Alle Änderungen speichern!</button>
</div>

</div>
        </div>
    );    
  }
  export default AppAdmin;