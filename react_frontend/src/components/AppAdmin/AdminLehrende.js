import React, { useState, useEffect } from 'react';
import './AppAdmin.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'


function AdminLehrende({ auth }) {

    //Konstanten und States
    const [authAdmin, setAuthAdmin] = useState(true)
    const defaultProf = { titel: '', vorname: '', nachname: "", email: '', telefonnummer: '', raum: '', sprechstunde: '', funktion: '', bild: '', modules: [] }

    const [profUpdate, setProfUpdate] = useState(defaultProf)

    const [courseAdd, setCourseAdd] = useState()
    const [courseRemove, setCourseRemove] = useState({ id: null })

    const [courses, setCourses] = useState([])
    const [profs, setProfs] = useState([])


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
        axios.get('api/lehrende')
            .then(res => {
                setProfs(res.data)
                console.log(res.data)
            })
            .catch(err => {
                if (err.response.status === 403) {
                    localStorage.clear()
                    window.location.reload()
                }
            })

        axios.get('api/modules')
            .then(res => {
                setCourses(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function updateProf() {
        axios.post('api/lehrende', profUpdate)
            .then(res => {
                console.log(res)
                fileUploadHandler()
            })
            .catch(err => {
                console.log(err)
            })
    }





    function handleClick(prof) {
        setProfUpdate(prof)
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







    const addModul = (evt) => {
        evt.preventDefault();
        if ((!(profUpdate.id === 0)) && (!(courseAdd.id === null)) && (!(parseInt(courseAdd) === 0))) {
            const test = courses.find(course => course.id === parseInt(courseAdd))
            var tmp = profUpdate.modules
            tmp.push(test)
            setProfUpdate(
                {
                    ...profUpdate,
                    modules: tmp

                }
            )
            setCourseAdd({ id: null })
        }

    }



    const removeModul = (evt) => {
        evt.preventDefault()
        if ((!(profUpdate.id === 0)) && (!(courseRemove.id === null)) && (!(parseInt(courseRemove) === 0))) {
            var tmp = profUpdate.modules
            var pos = tmp.findIndex(course => course.id === parseInt(courseRemove))

            tmp.splice(pos, 1)
            setProfUpdate(
                {
                    ...profUpdate,
                    modules: tmp
                }

            )

            setCourseRemove({ id: null })
        }
    }

    const [profBild, setProfBild] = useState()
    const fileSelectHandler = e => {
        setProfUpdate({ ...profUpdate, bild: e.target.files[0].name })
        setProfBild(e.target.files[0])
    }

    const fileUploadHandler = () => {
        const fd = new FormData()
        fd.append('file', profBild)
        axios.post('api/bilder/lehrende', fd, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(res => {
                console.log(res)
            })
    }

    function deleteProf() {
        console.log(profUpdate)
        axios.delete('api/lehrende', { data: profUpdate })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
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
                Lehrende
            </h2>
            <br></br>
            <div class="row">
                <div class="col-auto mr-auto">Zu bearbeitenden Lehrenden auswählen</div>
                <div class="col-auto ">
                    <button type="button" class="btn-small btn btn-danger" onClick={deleteProf}>Mitarbeiter löschen!</button>
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





                    </div>
                </div>

                <div class="col ">

                    <form >
                        <label>
                            Funktion
                            <select class="custom-select" id="inputGroupSelect04" value={profUpdate.funktion} onChange={e => setProfUpdate({ ...profUpdate, funktion: e.target.value })}>
                                <option value='0'  >Funktion wählen</option>

                                <option value='Professor'>Professor*in</option>
                                <option value='Mitarbeiter'>Mitarbeiter*in</option>
                                <option value='Externe'>Externe</option>

                            </select>
                        </label>
                    </form>


                    <div class="input-group marg">



                        <form onSubmit={addModul}>
                            <label>
                                Modul hinzufügen
                                <select class="custom-select" id="inputGroupSelect04" value={courseAdd} onChange={e => setCourseAdd(e.target.value)}>
                                    <option value='0'  >Modul wählen</option>
                                    {courses.map((modul) => {
                                        console.log(modul)
                                        console.log(profUpdate.modules.find(course => course.id === modul.id))
                                        var test = profUpdate.modules.find(course => course.id === modul.id)


                                        if (typeof test === 'undefined') {
                                            return (
                                                <option value={modul.id} >{modul.moduleName}</option>

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
                                    {profUpdate.modules.map((modul) => {

                                        return (
                                            <option value={modul.id} >{modul.moduleName}</option>

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


                    <button type="button" class="btn btn-info btn-lg btn-block" onClick={updateProf}>Alle Änderungen speichern!</button>


                </div>



            </div>
        </div>
    )
}
export default AdminLehrende;