import React, { useState, useEffect } from 'react';
import './AppAdmin.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import TimePicker from 'react-time-picker';



function AdminTermine({ auth }) {


    const defaultModul = { termin: [], name: '' }
    const [modulUpdate, setModulUpdate] = useState(defaultModul)

    const defaultTermin = { beschreibung: '', wochentag: '', startzeit: '', endzeit: '', raum: '', typ: '', semester: '' };

    const [authAdmin, setAuthAdmin] = useState(true)
    const [module, setModule] = useState([])
    const [terminUpdate, setTerminUpdate] = useState(defaultTermin)

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
        axios.get('/api/svpModul')
            .then(res => {
                var mods = res.data
                var mods2 = []
                mods.map((mod) => {
                    if (!(mod.art === 'pf')) {
                        mods2.push(mod)
                    }
                })
                setModule(mods2)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 403) {
                    localStorage.clear()
                    window.location.reload()
                }
            })
    }, [])





    const postTermin = () => {
        console.log(modulUpdate)
        console.log(terminUpdate)
        var update = { svpModul: modulUpdate, termin: terminUpdate }
        axios.post('api/termine/add', update)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

        // Bild Upload
        console.log(modulUpdate, terminUpdate)

    }

    const deleteTermin = () => {
        axios.delete('/api/termine'+terminUpdate.id, { data: terminUpdate })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        console.log(terminUpdate.beschreibung + ' löschen')
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
                Termine
            </h2>
            <br></br>
            <div class="row">
                <div class="col-auto mr-auto">Modul auswählen dessen Termine bearbeitet werden sollen</div>
                <div class="col-auto ">
                    <button type="button" class="btn-small btn btn-danger" onClick={deleteTermin}>Termin löschen</button>
                </div>

            </div>
            <br>
            </br>
            <div class="row">

                <div class="col" >

                    {/* Modulauswahl */}
                    <div class="Scroll">
                        <div class="list-group" >
                            {module.map((modul, i) => (
                                <button key={i} onClick={() => { setModulUpdate(modul); setTerminUpdate(defaultTermin) }} type="button" class="list-group-item list-group-item-action" > {modul.name} {modul.art}  </button>
                            ))}
                        </div>
                    </div>

                    {/* Terminauswahl */}
                    <div class="Scroll">
                        <div class="list-group" >
                            <button key='x' onClick={() => { setTerminUpdate(defaultTermin) }} type='button' class="list-group-item list-group-item-action"> neuen Temin erstellen </button>
                            {modulUpdate.termin.map((termin, i) => (
                                <button key={i} onClick={() => { setTerminUpdate(termin) }} type="button" class="list-group-item list-group-item-action" > {termin.beschreibung}  </button>
                            ))}
                        </div>
                    </div>
                </div>


                <div class="col" >

                    <div>
                        <br></br>

                        {/* Terminbeschreibung Textinput */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Beschreibung</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={terminUpdate.beschreibung} onChange={e => { setTerminUpdate({ ...terminUpdate, beschreibung: e.target.value }) }}></input>
                        </div>

                        {/* Wochentag */}
                        <div>
                            <form >
                                <label>
                                    Wochentag
                                    <select class="custom-select" id="inputGroupSelect04" value={terminUpdate.wochentag} onChange={e => setTerminUpdate({ ...terminUpdate, wochentag: e.target.value })}>
                                        <option value='Montag'>Montag</option>
                                        <option value='Dienstag'>Dienstag</option>
                                        <option value='Mittwoch'>Mittwoch</option>
                                        <option value='Donnerstag'>Donnerstag</option>
                                        <option value='Freitag'>Freitag</option>
                                    </select>
                                </label>
                            </form>
                        </div>

                        <div>
                            <label>
                                Startzeit
                                <TimePicker
                                    className="input"
                                    value={terminUpdate.startzeit}
                                    onChange={(value) => { setTerminUpdate({ ...terminUpdate, startzeit: value }) }}
                                />
                            </label>
                            <label>
                                Endzeit
                                <TimePicker
                                    className="input"
                                    value={terminUpdate.endzeit}
                                    onChange={(value) => { setTerminUpdate({ ...terminUpdate, endzeit: value }) }}
                                />
                            </label>
                        </div>

                        {/* Raum Textinput */}
                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text lenge" id="inputGroup-sizing-sm">Raum</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={terminUpdate.raum} onChange={e => { setTerminUpdate({ ...terminUpdate, raum: e.target.value }) }}></input>
                        </div>
                    </div>

                    {/* Typ */}
                    <div>
                        <form >
                            <label>
                                Termintyp
                                <select class="custom-select" id="inputGroupSelect04" value={terminUpdate.typ} onChange={e => setTerminUpdate({ ...terminUpdate, typ: e.target.value })}>
                                    <option value='Vorlesung'>Vorlesung</option>
                                    <option value='Praktikum'>Praktikum</option>
                                    <option value='Übung'>Übung</option>
                                    <option value='Tutorium'>Tutorium</option>
                                    <option value='Sonstiges'>Sonstiges</option>

                                </select>
                            </label>
                        </form>
                    </div>

                </div>







            </div>
            <br />
            <br />
            <br />
            <button type="button" class="btn btn-info btn-lg btn-block" onClick={postTermin}>Alle Änderungen speichern!</button>


        </div>
    );
}
export default AdminTermine;