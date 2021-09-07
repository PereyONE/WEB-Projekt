import React, { useState, useEffect } from 'react';
import './AppAdmin.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'



function AdminModule({ prof, course }) {

    const [auth, setAuth] = useState(true)



    useEffect(() => {
        axios.get('/api/authenticate/admin')
            .then(res => {
                setAuth(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const [courses, setCourses] = useState([])
    const [vertiefung, setVertiefung] = useState([])

    useEffect(() => {
        axios.get('/api/modules')
            .then(res => {
                setCourses(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios.get('/api/vertiefung')
            .then(res => {
                setVertiefung(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const updateModul = () =>{
        axios.post('api/modules')
    }

    const postModul = () =>{
        axios.post('api/modules', courseUpdate)
        .then(res=>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

        //Bild Upload

        // window.location.reload()
    }

    const deleteModule = () => {
        axios.delete('/api/modules/' + courseUpdate.id)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }










    const [courseAdd, setCourseAdd] = useState({ id: null })
    const [courseRemove, setCourseRemove] = useState({ id: null })

    const defaultCourse = {  moduleName: '', moduleAbkürzung: '', ects: '', moduleTyp: '', vertiefung: '', prüfungsart: '', beschreibung: '', verfügbarkeit: '', regelstudienzeitsieben: '', regelstudienzeitzwölf: '', terminID: '', bild: 'platzhalter.jpg' };
    const [courseUpdate, setCourseUpdate] = useState(defaultCourse)
    const sieben = [1, 2, 3, 4, 5, 6, 7]
    const zwoelf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    function handleClickCourse(course) {
        //preventDefault();
        setCourseUpdate(course)
        console.log(course);
    }

    // Für jeden Bereich wird eine onTodoChange- Funktion angelegt, 
    // damit sich die Eingabedaten nicht gegenseitig überschreiben.

    function onTodoChangeModulname(value) {
        setCourseUpdate({
            ...courseUpdate,
            modulname: value,
        });
    }

    function onTodoChangeAbkuerzung(value) {
        setCourseUpdate({
            ...courseUpdate,
            modulabkürzung: value,
        });
    }

    function onTodoChangeEcts(value) {
        setCourseUpdate({
            ...courseUpdate,
            ects: value,
        });
    }

    function onTodoChangePrüfungsart(value) {
        setCourseUpdate({
            ...courseUpdate,
            prüfungsart: value,
        });
    }

    function onTodoChangeBeschreibung(value) {
        setCourseUpdate({
            ...courseUpdate,
            beschreibung: value,
        });
    }

    const onTodoChangeVerfügbarkeit = e => {
        setCourseUpdate({
            ...courseUpdate,
            verfügbarkeit: e.target.value,
        });
    }

    const [courseBild, setCourseBild] = useState()

    const fileSelectHandler = e => {
        setCourseUpdate({ ...courseUpdate, bild: e.target.files[0].name })
        setCourseBild(e.target.files[0])

        console.log(courseUpdate)
    }

    const fileUploadHandler = () => {
        const fd = new FormData()
        fd.append('image', courseBild, courseBild.name)
        axios.post('api/fileUpload', fd)
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
                Module
            </h2>
            <br></br>
            <div class="row">
                <div class="col-auto mr-auto">Zu bearbeitendes Modul auswählen</div>
                <div class="col-auto ">
                    <button type="button" class="btn-small btn btn-danger" onClick={deleteModule}>Modul löschen!</button>
                </div>

            </div>
            <br>
            </br>
            <div class="row">
                <div class="col" >
                    <div class="Scroll">
                        <div class="list-group" >
                            <button key='x' onClick={() => handleClickCourse(defaultCourse)} type="button" class="list-group-item list-group-item-action" > neues Modul erstellen </button>
                            {courses.map((course, i) => (
                                <button key={i} onClick={() => handleClickCourse(course)} type="button" class="list-group-item list-group-item-action" > {course.moduleName}  </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <br></br>

                        {/* Inputfeld Modulname */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Modulname</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={courseUpdate.moduleName} onChange={e => setCourseUpdate({...courseUpdate, moduleName: e.target.value})}></input>
                        </div>

                        {/* Inputfeld Modulabkürzung */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Modulabkürzung</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={courseUpdate.moduleAbkürzung} onChange={e => setCourseUpdate({...courseUpdate, moduleAbkürzung:e.target.value})}></input>
                        </div>

                        {/* Inputfeld ECTS */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">ECTS</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={courseUpdate.ects} onChange={e => onTodoChangeEcts(e.target.value)}></input>
                        </div>

                        {/* Inputfeld Klausurart */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Klausurart</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={courseUpdate.prüfungsart} onChange={e => onTodoChangePrüfungsart(e.target.value)}></input>
                        </div>

                        {/* Inputfeld Beschreibung */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Beschreibung</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={courseUpdate.beschreibung} onChange={e => onTodoChangeBeschreibung(e.target.value)}></input>
                        </div>
                    </div>
                </div>

                <div class="col ">

                    {/* Semesterauswahl */}
                    <h6 class="font">Angeboten im:</h6>
                    <div onChange={onTodoChangeVerfügbarkeit}>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="verf" id="inlineRadio2" value="ws" ></input>
                            <label class="form-check-label" for="inlineRadio2">Wintersemester</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="verf" id="inlineRadio1" value="ss"></input>
                            <label class="form-check-label" for="inlineRadio1">Sommersemester</label>
                        </div>
                    </div>

                    {/* Typauswahl */}
                    <h6 class="font">Angeboten im:</h6>
                    <div onChange={e => { setCourseUpdate({ ...courseUpdate, moduleTyp: e.target.value }) }}>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="typ" id="inlineRadio2" value="Pflichtmodule" ></input>
                            <label class="form-check-label" for="inlineRadio2">Pflichtmodul</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="typ" id="inlineRadio1" value="Vertiefungsmodule"></input>
                            <label class="form-check-label" for="inlineRadio1">Vertiefungsmodul</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="typ" id="inlineRadio3" value="Wahlmodule"></input>
                            <label class="form-check-label" for="inlineRadio1">Wahlmodul</label>
                        </div>
                    </div>

                    {/* Regelstudiensemesterauswahl */}
                    <h6>Regelstudienzeit</h6>
                    <div>
                        <form >
                            <label>
                                7 Semester
                                <select class="custom-select" id="inputGroupSelect04" value={courseUpdate.regelstudienzeitsieben} onChange={e => setCourseUpdate({ ...courseUpdate, regelstudienzeitsieben: e.target.value })}>
                                    <option value='0'  >Semester wählen</option>
                                    {sieben.map((i) =>
                                        <option value={i}>{i}. Semester</option>
                                    )}

                                </select>
                            </label>
                            <input type="submit" value="auswählen" />
                        </form>

                        <form >
                            <label>
                                12 Semester
                                <select class="custom-select" id="inputGroupSelect04" value={courseUpdate.regelstudienzeitzwölf} onChange={e => setCourseUpdate({ ...courseUpdate, regelstudienzeitzwölf: e.target.value })}>
                                    <option value='0'  >Semester wählen</option>
                                    {zwoelf.map((i) =>
                                        <option value={i}>{i}. Semester</option>
                                    )}

                                </select>
                            </label>
                            <input type="submit" value="auswählen" />
                        </form>
                    </div>

                    {/* Vertiefung und Oberkategorie */}
                    <div class="input-group marg">
                        <form >
                            <label>
                                Vertiefung auswählen
                                <select class="custom-select" id="inputGroupSelect04" value={courseAdd} onChange={e => setCourseUpdate({...courseUpdate,vertiefung:e.target.value})}>
                                    <option value='0'  >Vertiefung wählen</option>
                                    {vertiefung.map((v) => {
                                        if (courseUpdate.moduleTyp === 'Vertiefungsmodule') {
                                            return (<option value={v.id} >{v.name}</option>)
                                        }
                                        else{
                                            return (<option disabled value={v.id} >{v.name}</option>)
                                        }

                                    })}

                                </select>
                            </label>
                        </form>

                    </div>

                    {/*Bilder upload */}

                    <label for="formFileSm" class="form-label">Bild auswählen: </label>
                    <input class=" form-control-sm" id="formFileSm" type="file" accept='image/*' onChange={fileSelectHandler} />


                    <br />
                    <br />
                    <br />
                    <button type="button" class="btn btn-info btn-lg btn-block" onClick={postModul}>Alle Änderungen speichern!</button>
                </div>

            </div>





        </div>
    );
}
export default AdminModule;