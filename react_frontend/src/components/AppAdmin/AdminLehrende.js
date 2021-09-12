import React, { useState, useEffect } from 'react';
import './AppAdmin.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'


function AdminLehrende() {

    //Konstanten und States
    const [auth, setAuth] = useState(true)
    const defaultProf = { id: null, titel: '', vorname: '', nachname: "", email: '', telefonnummer: '', raum: '', sprechstunde: '', funktion: '', bild: '', module: [] }

    const [profUpdate, setProfUpdate] = useState(defaultProf)

    const [courseAdd, setCourseAdd] = useState({ id: null })
    const [courseRemove, setCourseRemove] = useState({ id: null })

    const [courses, setCourses] = useState([
        { id: 1, modulname: 'Mathematik 1', modulabkürzung: 'MA1', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen', verfügbarkeit: 'Wintersemester', regelstudienzeitsieben: 'erstes Semester', regelstudienzeitzwölf: 'drittes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
        { id: 2, modulname: 'Mathematik 2', modulabkürzung: 'MA2', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen, aber mit 2', verfügbarkeit: 'Sommersemester', regelstudienzeitsieben: 'zweites Semester', regelstudienzeitzwölf: 'viertes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
        { id: 3, modulname: 'Mathematik 3', modulabkürzung: 'MA2', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen, aber mit 2', verfügbarkeit: 'Sommersemester', regelstudienzeitsieben: 'zweites Semester', regelstudienzeitzwölf: 'viertes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
        { id: 4, modulname: 'Mathematik 4', modulabkürzung: 'MA2', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen, aber mit 2', verfügbarkeit: 'Sommersemester', regelstudienzeitsieben: 'zweites Semester', regelstudienzeitzwölf: 'viertes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
        { id: 5, modulname: 'Mathematik 5', modulabkürzung: 'MA2', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen, aber mit 2', verfügbarkeit: 'Sommersemester', regelstudienzeitsieben: 'zweites Semester', regelstudienzeitzwölf: 'viertes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
        { id: 6, modulname: 'Mathematik 6', modulabkürzung: 'MA2', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen, aber mit 2', verfügbarkeit: 'Sommersemester', regelstudienzeitsieben: 'zweites Semester', regelstudienzeitzwölf: 'viertes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
        { id: 7, modulname: 'Mathematik 7', modulabkürzung: 'MA2', ects: '10', modultyp: '', vertiefung: 'keine', prüfungsart: 'schriftlich', beschreibung: 'Es geht um lineare Algebra und Funktionen, aber mit 2', verfügbarkeit: 'Sommersemester', regelstudienzeitsieben: 'zweites Semester', regelstudienzeitzwölf: 'viertes Semester', terminID: 'keine Ahnung', bild: 'Pfad einfügen oder so' },
    ])

    const [profs, setProfs] = useState([])


    //Data fetching
    useEffect(() => {
        axios.get('/api/authenticate/admin')
            .then(res => {
                setAuth(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    useEffect(() => {
        axios.get('api/lehrende')
            .then(res => {
                setProfs(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])




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

    

    


    const addModul = (evt) => {
        evt.preventDefault();
        if ((!(profUpdate.id === 0)) && (!(courseAdd.id === null)) && (!(parseInt(courseAdd) === 0))) {
            console.log('lol')
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
        console.log(profUpdate)

    }



    const removeModul = (evt) => {
        evt.preventDefault()
        if ((!(profUpdate.id === 0)) && (!(courseRemove.id === null)) && (!(parseInt(courseRemove) === 0))) {
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

    const [profBild, setProfBild] = useState()
    const fileSelectHandler = e => {
        setProfUpdate({ ...profUpdate, bild: e.target.files[0].name })
        setProfBild(e.target.files[0])

        console.log(profUpdate)
    }

    const fileUploadHandler = () => {
        const fd = new FormData()
        fd.append('image', profBild, profBild.name)
        axios.post('api/bilder/lehrende', profBild)
            .then(res => {
                console.log(res)
            })
    }



    if (!(auth)) {
        return (
            <Redirect to='/' />
        )
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
                            <button key='x' onClick={() => handleClick(defaultProf)} type="button" class="list-group-item list-group-item-action" > neue Person erstellen </button>
                            {profs.map((prof, i) => (
                                <button key={i} onClick={() => handleClick(prof)} type="button" class="list-group-item list-group-item-action" > {prof.nachname}  </button>
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




                    <div class="input-group marg">



                        <form onSubmit={addModul}>
                            <label>
                                Modul hinzufügen
                                <select class="custom-select" id="inputGroupSelect04" value={courseAdd} onChange={e => setCourseAdd(e.target.value)}>
                                    <option value='0'  >Modul wählen</option>
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
                                    <option value='0'  >Modul wählen</option>
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


                    {/*Bilder upload */}

                    <label for="formFileSm" class="form-label">Bild auswählen: </label>
                    <input class=" form-control-sm" id="formFileSm" type="file" accept='image/*' onChange={fileSelectHandler} />


                    <button type="button" class="btn btn-info btn-lg btn-block">Alle Änderungen speichern!</button>
                    <button type="button" class="btn btn-success btn-lg btn-block">Neuen Lehrenden hinzufügen!</button>


                </div>



            </div>
        </div>
    )
}
export default AdminLehrende;