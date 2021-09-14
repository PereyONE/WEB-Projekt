import React, { useState, useEffect } from 'react';
import './AppAdmin.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'



function AdminModule({ auth }) {


    //Konstanten und States
    const [authAdmin, setAuthAdmin] = useState(true)

    const defaultCourse = { moduleName: '', moduleAbkürzung: '', ects: '', moduleTyp: '', vertiefung: '', prüfungsart: '', beschreibung: '', verfügbarkeit: '', regelstudienzeitsieben: '', regelstudienzeitzwölf: '', terminID: '', bild: 'platzhalter1.png', bildrechte: '', oberkategorie: '' };
    const [courseUpdate, setCourseUpdate] = useState(defaultCourse)
    const [courseAdd, setCourseAdd] = useState({ id: null })

    const sieben = [1, 2, 3, 4, 5, 6, 7]
    const zwoelf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const [courses, setCourses] = useState([])
    const [vertiefung, setVertiefung] = useState([{ id: 1, name: 'Bildverarbeitung' },
    { id: 2, name: 'Web-Engineering' },
    { id: 3, name: 'Interaktive Computergrafik' },
    { id: 4, name: 'Mediendesign' },
    { id: 5, name: 'Kameratechnik' },
    { id: 6, name: 'Mediendistribution und -wiedergabe' },
    { id: 7, name: 'Produktionstechnik audiovisueller Medien' }
    ])


    //Data fetching
    useEffect(() => {
        axios.get('/api/authenticate/admin')
            .then(res => {
                setAuthAdmin(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    useEffect(() => {
        axios.get('/api/modules')
            .then(res => {
                setCourses(res.data)
                console.log(res.data)
            })
            .catch(err => {
                if (err.response.status === 403) {
                    localStorage.clear()
                    window.location.reload()
                }
            })
    }, [])




    const postModul = () => {
        axios.post('api/modules', courseUpdate)
            .then(res => {
                console.log(res)
                fileUploadHandler()

            })
            .catch(err => {
                console.log(err)
            })

        //Bild Upload


    }

    const deleteModule = () => {
        axios.delete('api/modules', { data: courseUpdate })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }



    function handleClickCourse(course) {
        //preventDefault();
        setCourseUpdate(course)
        console.log(course);
    }

    // Für jeden Bereich wird eine onTodoChange- Funktion angelegt, 
    // damit sich die Eingabedaten nicht gegenseitig überschreiben.


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
        console.log(e.target.files[0])
    }

    const fileUploadHandler = () => {
        const fd = new FormData()
        fd.append('file', courseBild)
        axios.post('api/bilder/module', fd,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(res => {
                console.log(res)
            })

    }



    if (!(auth)) {
        return (
            <Redirect to='/login' />
        )
    }
    if (!(authAdmin)) {
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
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={courseUpdate.moduleName} onChange={e => setCourseUpdate({ ...courseUpdate, moduleName: e.target.value })}></input>
                        </div>

                        {/* Inputfeld Modulabkürzung */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Modulabkürzung</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={courseUpdate.moduleAbkürzung} onChange={e => setCourseUpdate({ ...courseUpdate, moduleAbkürzung: e.target.value })}></input>
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

                        {/* Semesterauswahl */}
                        <form >
                            <label>
                                Angeboten im
                                <select class="custom-select" id="inputGroupSelect04" value={courseUpdate.verfügbarkeit} onChange={e => setCourseUpdate({ ...courseUpdate, verfügbarkeit: e.target.value })}>
                                    <option value='0'  >Semester wählen</option>
                                    <option value='Wintersemester'>Wintersemester</option>
                                    <option value='Sommersemester'>Sommersemester</option>



                                </select>
                            </label>
                        </form>

                        {/* Typauswahl */}

                        <form >
                            <label>
                                Modultyp
                                <select class="custom-select" id="inputGroupSelect04" value={courseUpdate.moduleTyp} onChange={e => setCourseUpdate({ ...courseUpdate, moduleTyp: e.target.value })}>
                                    <option value='0'  >Typ wählen</option>

                                    <option value='Pflichtmodule'>Pflichtmodul</option>
                                    <option value='Vertiefungsmodule'>Vertiefungsmodul</option>
                                    <option value='Wahlmodule'>Wahlmodul</option>


                                </select>
                            </label>
                        </form>
                    </div>
                </div>

                <div class="col ">




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

                        </form>
                    </div>

                    {/* Vertiefung */}
                    <div class="input-group marg">
                        <form >
                            <label>
                                Vertiefung auswählen
                                <select class="custom-select" id="inputGroupSelect04" value={courseUpdate.vertiefung} onChange={e => setCourseUpdate({ ...courseUpdate, vertiefung: e.target.value, oberkategorie: e.target.value })}>
                                    <option value='0'  >Vertiefung wählen</option>
                                    {vertiefung.map((v) => {
                                        if (courseUpdate.moduleTyp === 'Vertiefungsmodule') {
                                            return (<option value={v.name} >{v.name}</option>)
                                        }
                                        else {
                                            return (<option disabled value={v.name} >{v.name}</option>)
                                        }

                                    })}

                                </select>
                            </label>
                        </form>

                    </div>

                    {/*  Oberkategorie */}
                    Kategorie wählen (zB: Mathematik, Phototechnik etc.)
                    <div class="input-group input-group-sm mb-3">


                        <div class="input-group-prepend">
                            <span class="input-group-text lenge" id="inputGroup-sizing-sm">Kategorie</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={courseUpdate.oberkategorie} onChange={e => { setCourseUpdate({ ...courseUpdate, oberkategorie: e.target.value, }) }}></input>






                    </div>

                    {/*Bilder upload */}

                    <label for="formFileSm" class="form-label">Bild auswählen: </label>
                    <input class=" form-control-sm" id="formFileSm" type="file" accept='image/*' onChange={fileSelectHandler} />

                    {/* Inputfeld Bildrechte */}
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text lenge" id="inputGroup-sizing-sm">Bildrechte</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={courseUpdate.bildrechte} onChange={e => { setCourseUpdate({ ...courseUpdate, bildrechte: e.target.value }) }}></input>
                    </div>


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