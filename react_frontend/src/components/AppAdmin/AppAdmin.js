import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { row, col } from 'react-bootstrap';
import './AppAdmin.css'
import AppAdminFunc from './AppAdminFunc';
import CheckBox from '../AppVerlaufsplan/CheckBox';



function AppAdmin({ prof, course }) { //evtl zu class umändern!!!!! Siehe Register!export default class AppRegister extends React.Component {
    const [profs, setName] = useState([
        { id: 1, titel: 'Herr Fischer', vorname: 'Gregor', nachname: "Fischer", email: 'xyz@gmail.com', telefonnummer: '11111111', raum: 'ZW- 08', sprechstunde: 'montags 11-12', funktion: 'prof', bild: 'platzhalter.jpg', module: [1] },
        { id: 2, titel: 'Herr Wischer', vorname: 'Stefan', nachname: "Wischer", email: 'xyzss@gmail.com', telefonnummer: '111111131', raum: 'ZW- 09', sprechstunde: 'dienstags 13-14', funktion: 'prof', bild: 'platzhalter.jpg', module: [1, 2] },
    ])

    const defaultProf = { id: 0, titel: '', vorname: '', nachname: "", email: '', telefonnummer: '', raum: '', sprechstunde: '', funktion: '', bild: '', module: [] }

    const [profUpdate, setProfUpdate] = useState(defaultProf)

    function handleClick(prof) {
        //preventDefault();
        setProfUpdate(prof)
        console.log(prof);
        console.log(profUpdate)
    }

    // Für jeden Bereich wird eine onTodoChange- Funktion angelegt, 
    // damit sich die Eingabedaten nicht gegenseitig überschreiben.
    function onTodoChangeTitel(value) {
        setProfUpdate({
            ...profUpdate,
            titel: value,
        });
    }
    function onTodoChangeVorname(value) {
        setProfUpdate({
            ...profUpdate,
            vorname: value,
        });
    }
    function onTodoChangeNachname(value) {
        setProfUpdate({
            ...profUpdate,
            nachname: value,
        });
    }
    function onTodoChangeEmail(value) {
        setProfUpdate({
            ...profUpdate,
            email: value,
        });
    }
    function onTodoChangeTelefonnummer(value) {
        setProfUpdate({
            ...profUpdate,
            telefonnummer: value,
        });
    }
    function onTodoChangeRaum(value) {
        setProfUpdate({
            ...profUpdate,
            raum: value,
        });
    }
    function onTodoChangeZeit(value) {
        setProfUpdate({
            ...profUpdate,
            sprechstunde: value,
        });
    }
    function onTodoChangeModule(value) {
        setProfUpdate({
            ...profUpdate,
            [module]: value,
        });
    }

    const [courses, setCourses] = useState([
        { id: 1, modulname: 'Mathematik 1', modulabkürzung: 'MA1', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen', verfügbarkeit: 'Wintersemester', regelstudienzeitsieben: 'erstes Semester', regelstudienzeitzwölf: 'drittes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
        { id: 2, modulname: 'Mathematik 2', modulabkürzung: 'MA2', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen, aber mit 2', verfügbarkeit: 'Sommersemester', regelstudienzeitsieben: 'zweites Semester', regelstudienzeitzwölf: 'viertes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
        { id: 3, modulname: 'Mathematik 3', modulabkürzung: 'MA2', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen, aber mit 2', verfügbarkeit: 'Sommersemester', regelstudienzeitsieben: 'zweites Semester', regelstudienzeitzwölf: 'viertes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
        { id: 4, modulname: 'Mathematik 4', modulabkürzung: 'MA2', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen, aber mit 2', verfügbarkeit: 'Sommersemester', regelstudienzeitsieben: 'zweites Semester', regelstudienzeitzwölf: 'viertes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
        { id: 5, modulname: 'Mathematik 5', modulabkürzung: 'MA2', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen, aber mit 2', verfügbarkeit: 'Sommersemester', regelstudienzeitsieben: 'zweites Semester', regelstudienzeitzwölf: 'viertes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
        { id: 6, modulname: 'Mathematik 6', modulabkürzung: 'MA2', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen, aber mit 2', verfügbarkeit: 'Sommersemester', regelstudienzeitsieben: 'zweites Semester', regelstudienzeitzwölf: 'viertes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
        { id: 7, modulname: 'Mathematik 7', modulabkürzung: 'MA2', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen, aber mit 2', verfügbarkeit: 'Sommersemester', regelstudienzeitsieben: 'zweites Semester', regelstudienzeitzwölf: 'viertes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },

    ])

    const [courseAdd, setCourseAdd] = useState({ id: null })
    const [courseRemove, setCourseRemove] = useState({ id: null })

    const defaultCourse = { id: 0, modulname: 'Mathematik 1', modulabkürzung: 'MA1', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen', verfügbarkeit: 'Wintersemester', regelstudienzeitsieben: 'erstes Semester', regelstudienzeitzwölf: 'drittes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' };
    const [coursesUpdate, setCourseUpdate] = useState(defaultCourse)


    function handleClickCourse(course) {
        //preventDefault();
        setCourseUpdate(course)
        console.log(course);
        console.log(coursesUpdate)
    }

    function onTodoChangeModulname(value) {
        setCourseUpdate({
            modulname: value,
        });
    }

    function onTodoChangeAbkuerzung(value) {
        setCourseUpdate({
            modulabkürzung: value,
        });
    }

    // function addModul(e) {
    //     e.preventDefault();
    //     console.log('lol')
    // }

    const addModul = (evt) => {
        evt.preventDefault();
        if ((!(profUpdate.id === 0)) && (!(courseAdd.id === null))) {
            console.log(courseAdd)
            var tmp = profUpdate.module
            tmp.push(parseInt(courseAdd))
            setProfUpdate(
                {
                    ...profUpdate,
                    module: tmp

                }

            )
            console.log(profUpdate)
            setCourseAdd({ id: null })
        }

    }



    const removeModul = (evt) => {
        evt.preventDefault()
        if ((!(profUpdate.id === 0)) && (!(courseRemove.id === null))) {
            console.log(courseRemove)
            var tmp = profUpdate.module
            var pos
            for (var i = 0; i < tmp.length; i++) {
                if (tmp[i] === parseInt(courseRemove)) {
                    pos = i
                }

            }

            console.log(pos)
            tmp.splice(pos, 1)
            setProfUpdate(
                {
                    ...profUpdate,
                    module: tmp
                }

            )
            console.log(profUpdate)
            setCourseRemove({ id: null })
        }
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
                    <button type="button" class="btn-small btn btn-danger  ">Mitarbeiter löschen!</button>
                </div>

            </div>
            <br>
            </br>

            <div class="row">
                <div class="col" >
                    {/* Liste der Lehrenden */}
                    <div class="Scroll">
                        <div class="list-group" >
                            {profs.map((prof, i) => (
                                <button key={i} onClick={() => handleClick(prof)} type="button" class="list-group-item list-group-item-action" > {prof.titel}  </button>
                            ))}
                        </div>
                    </div>


                    <div>
                        <br></br>

                        {/* Inputfeld Titel */}

                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Titel</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={profUpdate.titel} onChange={e => onTodoChangeTitel(e.target.value)}></input>
                        </div>

                        {/* Inputfeld Vorname */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Vorname</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={profUpdate.vorname} onChange={e => onTodoChangeVorname(e.target.value)}></input>
                        </div>

                        {/* Inputfeld Nachname */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Nachname</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={profUpdate.nachname} onChange={e => onTodoChangeNachname(e.target.value)}></input>
                        </div>



                        {/* Inputfeld E-Mail */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">E-Mail</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={profUpdate.email} onChange={e => onTodoChangeEmail(e.target.value)}></input>
                        </div>


                        {/* Inputfeld Telefonnummer */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Telefonnummer</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={profUpdate.telefonnummer} onChange={e => onTodoChangeTelefonnummer(e.target.value)}></input>
                        </div>

                        {/* Inputfeld Raumnummer */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Raumnummer</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={profUpdate.raum} onChange={e => onTodoChangeRaum(e.target.value)}></input>
                        </div>

                        {/* Inputfeld Sprechzeiten */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Sprechzeit</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={profUpdate.sprechstunde} onChange={e => onTodoChangeZeit(e.target.value)}></input>
                        </div>

                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Module</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={profUpdate.module} onChange={e => onTodoChangeModule(e.target.value)}></input>
                        </div>

                    </div>
                </div>

                <div class="col ">

                    {/* <div style={{}}>
                        
                        {courses.map((course, i) =>{
                        console.log(course.id)
                        if(profUpdate.module.includes(course.id)){
                            return(
                            <CheckBox label={course.modulname} value={true} />
                            )
                        }
                        else{
                            return(
                            <CheckBox label={course.modulname} value={false} />
                            )
                        }
                        })}

                    </div> */}


                    <div class="input-group marg">
                        {/* <form onSubmit={addModul('lol')}>
                            <label>Modul hinzufügen
                                <select class="custom-select" id="inputGroupSelect04" value={courseAdd} onChange={courseAddChange(Event)}>

                                    {courses.map((modul) => {
                                        if (!(profUpdate.module.includes(modul.id))) {
                                            return (
                                                <option value={modul.id} >{modul.modulname}</option>

                                            )
                                        }
                                    })}

                                </select>
                            </label>
                            <input type="submit" value='hinzufügen' />

                        </form> */}


                        <form onSubmit={addModul}>
                            <label>
                                Modul hinzufügen
                                <select class="custom-select" id="inputGroupSelect04" value={courseAdd} onChange={e => setCourseAdd(e.target.value)}>

                                    {courses.map((modul) => {
                                        if (!(profUpdate.module.includes(modul.id))) {
                                            return (
                                                <option value={modul.id} >{modul.modulname}</option>

                                            )
                                        }
                                    })}

                                </select>
                            </label>
                            <input type="submit" value="hinzufügen" />
                        </form>

                    </div>

                    <div class="input-group marg">
                        <form onSubmit={removeModul}>
                            <label>
                                Modul entfernen
                                <select class="custom-select" id="inputGroupSelect04" value={courseRemove} onChange={e => setCourseRemove(e.target.value)}>

                                    {profUpdate.module.map((modulID) => {
                                        var m
                                        courses.map((course) => {
                                            if (course.id === modulID) { m = course }
                                        })
                                        return (
                                            <option value={m.id} >{m.modulname}</option>

                                        )
                                    }
                                    )}

                                </select>
                            </label>
                            <input type="submit" value="enfernen" />
                        </form>
                    </div>


                    {/* <form>
                        <fieldset>
                            <div class="form-group">
                                <label for="disabledTextInput"></label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Modulliste"></input>
                            </div>
                        </fieldset>

                    </form> */}

                    <label for="formFileSm" class="form-label">Bild auswählen: </label>
                    <input class=" form-control-sm" id="formFileSm" type="file" />


                    <button type="button" class="btn btn-info btn-lg btn-block">Alle Änderungen speichern!</button>
                    <button type="button" class="btn btn-success btn-lg btn-block">Neuen Lehrenden hinzufügen!</button>


                </div>



            </div>



            <h2>
                Module
            </h2>
            <br></br>
            <div class="row">
                <div class="col-auto mr-auto">Zu bearbeitenden Lehrenden auswählen</div>
                <div class="col-auto ">
                    <button type="button" class="btn-small btn btn-danger  ">Mitarbeiter löschen!</button>
                </div>

            </div>
            <br>
            </br>
            <div class="row">
                <div class="col" >
                    <div class="Scroll">
                        <div class="list-group" >
                            {courses.map((course, i) => (
                                <button key={i} onClick={() => handleClickCourse(course)} type="button" class="list-group-item list-group-item-action" > {course.modulname}  </button>
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

                        {/* Inputfeld Modulname */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Modulname</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={coursesUpdate.modulname} onChange={e => onTodoChangeModulname(e.target.value)}></input>
                        </div>

                        {/* Inputfeld Modulname */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Modulabkürzung</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={coursesUpdate.modulabkürzung} onChange={e => onTodoChangeAbkuerzung(e.target.value)}></input>
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
                    <h6 class="font">Angeboten im:</h6>
                    <div class="form-check form-check-inline">

                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                        <label class="form-check-label" for="inlineRadio1">Sommersemester</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                        <label class="form-check-label" for="inlineRadio2">Wintersemester</label>
                    </div>

                    <h6 class="font">Regelstudienzeit:</h6>
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
                        <input type="text" class="form-control" aria-label="Small" placeholder="Wochentag" aria-describedby="inputGroup-sizing-sm">
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
                    <button type="button" class="btn-small btn btn-danger  ">Vertiefungsrichtung löschen!</button>
                </div>

            </div>
            <br>
            </br>
            <div class="row">
                <div class="col" >
                    <div class="Scroll">
                        <div class="list-group" >
                            {profs.map((prof, i) => (
                                <button type="button" class="list-group-item list-group-item-action" ><AppAdminFunc prof={prof} index={i} />  </button>
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
                    <button type="button" class="btn-small btn btn-danger  ">Vertiefungsrichtung löschen!</button>
                </div>

            </div>
            <br>
            </br>
            <div class="row">
                <div class="col" >
                    <div class="Scroll">
                        <div class="list-group" >
                            {profs.map((prof, i) => (
                                <button type="button" class="list-group-item list-group-item-action" ><AppAdminFunc prof={prof} index={i} />  </button>
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