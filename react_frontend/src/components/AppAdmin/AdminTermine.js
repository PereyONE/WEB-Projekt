import React, { useState, useEffect } from 'react';
import './AppAdmin.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import TimePicker from 'react-time-picker';



function AdminTermine() {

    const test = [
        {
            id: 1, termin: [
                { id: 1, beschreibung: 'Vorlesung Mathe 1 (1)', wochentag: 'Montag', startzeit: '9:00', endzeit: '12:00', raum: 'H1', typ: 'Vorlesung', semester: '1' },
                { id: 1, beschreibung: 'Vorlesung Mathe 1 (2)', wochentag: 'Mittwoch', startzeit: '11:00', endzeit: '13:00', raum: 'H1', typ: 'Vorlesung', semester: '1' },
            ], name: 'Mathe 1',
        },
        {
            id: 2, termin: [
                { id: 1, beschreibung: 'Vorlesung Mathe 2 (1)', wochentag: 'Montag', startzeit: '10:00', endzeit: '12:00', raum: 'H2', typ: 'Vorlesung', semester: '2' },
                { id: 1, beschreibung: 'Vorlesung Mathe 2 (2)', wochentag: 'Mittwoch', startzeit: '14:00', endzeit: '16:00', raum: 'H2', typ: 'Vorlesung', semester: '2' },
            ], name: 'Mathe 2',
        },
        {
            id: 3, termin: [
                { id: 1, beschreibung: 'Vorlesung Siga (1)', wochentag: 'Dienstag', startzeit: '9:00', endzeit: '12:00', raum: 'H1', typ: 'Vorlesung', semester: '1' },
                { id: 1, beschreibung: 'Vorlesung Siga (2)', wochentag: 'Donnerstag', startzeit: '11:00', endzeit: '13:00', raum: 'H1', typ: 'Vorlesung', semester: '1' },
            ], name: 'Siga',
        },
    ]

    const defaultModul = { termin: [], name: '' }
    const [modulUpdate, setModulUpdate] = useState(defaultModul)

    const defaultTermin = { beschreibung: '', wochentag: '', startzeit: '', endzeit: '', raum: '', typ: '', semester: '' };

    //Hier weitermachen!
    const [auth, setAuth] = useState(true)
    const [termine, setTermine] = useState([])
    const [module, setModule] = useState(test)
    const [terminUpdate, setTerminUpdate] = useState(defaultTermin)

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
        axios.get('/api/termine')
            .then(res => {
                setTermine(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // useEffect(() => {
    //     axios.get('/api/svpModul')
    //         .then(res => {
    //             setModule(res.data)
    //             console.log(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [])





    const postTermin = () => {
        // axios.post('api/vertiefung', vertiefungUpdate)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        // Bild Upload
        console.log(modulUpdate, terminUpdate)


    }

    const deleteTermin = () => {
        // axios.delete('/api/vertiefung', terminUpdate)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        console.log(terminUpdate.beschreibung + ' löschen')
    }




    if (!(auth)) {
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
                                <button key={i} onClick={() => { setModulUpdate(modul); setTerminUpdate(defaultTermin)}} type="button" class="list-group-item list-group-item-action" > {modul.name}  </button>
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
                                        <option value='Vorlesung'>Übung</option>
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