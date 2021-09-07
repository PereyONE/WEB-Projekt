import React, { useState, useEffect } from 'react';
import './AppAdmin.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'



function AdminVertiefung() {

    const defaultVertiefung = { name: '' };

    const [auth, setAuth] = useState(true)
    const [vertiefungen, setVertiefungen] = useState([])
    const [vertiefungUpdate, setVertiefungUpdate] = useState(defaultVertiefung)

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
        axios.get('/api/vertiefung')
            .then(res => {
                setVertiefungen(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])





    const postVertiefung = () => {
        axios.post('api/vertiefung', vertiefungUpdate)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    // Bild Upload

    window.location.reload()
}

const deleteVertiefung = () => {
    axios.delete('/api/vertiefung', vertiefungUpdate)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}




if (!(auth)) {
    return (
        <Redirect to='/' />
        
    )}


return (
    <div className="container">



        <h2>
            Vertiefungen
        </h2>
        <br></br>
        <div class="row">
            <div class="col-auto mr-auto">Zu bearbeitende Vertiefung auswählen</div>
            <div class="col-auto ">
                <button type="button" class="btn-small btn btn-danger" onClick={deleteVertiefung}>Vertiefung löschen</button>
            </div>

        </div>
        <br>
        </br>
        <div class="row">
            <div class="col" >
                <div class="Scroll">
                    <div class="list-group" >
                        <button key='x' onClick={() => setVertiefungUpdate(defaultVertiefung)} type="button" class="list-group-item list-group-item-action" > neue Vertiefung erstellen </button>
                        {vertiefungen.map((v) => (
                            <button type="button" class="list-group-item list-group-item-action" onClick={() => { setVertiefungUpdate(v); console.log(vertiefungUpdate) }}>{v.name} </button>
                        ))}
                    </div>
                </div>

                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text lenge" id="inputGroup-sizing-sm">Bezeichnung</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={vertiefungUpdate.name} onChange={e => setVertiefungUpdate({ ...vertiefungUpdate, name: e.target.value })}></input>
                </div>
                <div class="col ">
                    <button type="button" class="btn btn-info btn-lg btn-block" onClick={postVertiefung}>Alle Änderungen speichern!</button>
                </div>

            </div>

        </div>


    </div>
);
}
export default AdminVertiefung;