import './Ereignis.css'
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import './Popup.css';
import { Row } from 'react-bootstrap';
import TimePicker from 'react-time-picker';
import axios from 'axios';

function Ereignis({ eintrag }) {
    const [show, setShow] = useState(false);
    const [formular, setformular] = useState(
        {
            id: eintrag.id,
            beschreibung: eintrag.beschreibung,
            typ: eintrag.typ,
            raum: eintrag.raum,
            wochentag: eintrag.wochentag,
            startzeit: eintrag.startzeit,
            endzeit: eintrag.endzeit,
            semester: eintrag.semester,
        }
    );
    const handleClose1 = () => setShow(false);
    const handleClose2 = event => {
        setShow(false);
        event.preventDefault();

        console.log(formular)
        axios.post('/api/termine', formular)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleClose3 = event => {
        setShow(false);
        event.preventDefault();

        console.log(formular)
        var test=
        {
            "id": 3,
            "beschreibung": "sport",
            "wochentag": "Montag",
            "startzeit": "10:00",
            "endzeit": "11:00",
            "raum": "4",
            "typ": "Vorlesung",
            "semester": 1
        }

        axios.delete('/api/termine', {data: formular})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleShow = () => setShow(true);

    if (eintrag.typ == "Vorlesung") {
        return (
            <>
                <div className="ereignis Vorlesung" onClick={handleShow}>
                    <p className="abstand">{eintrag.startzeit} - {eintrag.endzeit}</p>
                    <p className="abstand">{eintrag.beschreibung}</p>
                    <p className="abstand">{eintrag.typ}</p>
                    <p className="abstand">{eintrag.raum}</p>
                </div>
                <Modal show={show} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ereignis bearbeiten</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="justify-content-md-center" sm={2}>
                            <div>
                                <p className="titel">Titel:</p>
                                <input name="beschreibung" className="input" type="text" placeholder="Titel" value={formular.beschreibung} onChange={e => setformular({ ...formular, beschreibung: e.target.value })} /><br />
                            </div>
                            <div>
                                <p className="titel">Type:</p>
                                <select className="input" name="typ" onChange={e => setformular({ ...formular, typ: e.target.value })}>
                                    <option value="Vorlesung">Vorlesung</option>
                                    <option value="Übung">Übung</option>
                                    <option value="Praktikum">Praktikum</option>
                                    <option value="Tutorium">Tutorium</option>
                                    <option value="Sonstiges">Sonstiges</option>
                                </select>
                            </div>
                            <div>
                                <p className="titel">Raum:</p>
                                <input name="raum" className="input" type="text" placeholder="Raum" value={formular.raum} onChange={e => setformular({ ...formular, raum: e.target.value })} /><br />
                            </div>
                            <div>
                                <p className="titel">Wochentag:</p>
                                <select className="input" name="wochentag" onChange={e => setformular({ ...formular, wochentag: e.target.value })}>
                                    <option value="Montag">Montag</option>
                                    <option value="Dienstag">Dienstag</option>
                                    <option value="Mittwoch">Mittwoch</option>
                                    <option value="Donnerstag">Donnerstag</option>
                                    <option value="Freitag">Freitag</option>
                                </select>
                            </div>

                            <div>
                                <p className="titel">von:</p>
                                <TimePicker
                                    className="input"
                                    name="startzeit"
                                    value={formular.startzeit}
                                    onChange={(value) => setformular({ ...formular, startzeit: value })} />
                            </div>
                            <div>
                                <p className="titel">bis:</p>
                                <TimePicker
                                    className="input"
                                    name="endzeit"
                                    value={formular.endzeit}
                                    onChange={(value) => setformular({ ...formular, endzeit: value })} />
                            </div>
                            <div>
                                <p className="titel">Semester:</p>
                                <select className="input" name="wochentag" onChange={e => setformular({ ...formular, typ: e.target.value })}>
                                    <option value="1">1.Semester</option>
                                    <option value="2">2.Semester</option>
                                    <option value="3">3.Semester</option>
                                    <option value="4">4.Semester</option>
                                    <option value="5">5.Semester</option>
                                    <option value="6">6.Semester</option>
                                    <option value="7">7.Semester</option>
                                </select>
                            </div>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <div className="button1" onClick={handleClose3}>
                            Löschen
                        </div>
                        <div className="button2" onClick={handleClose2}>
                            Speichern
                        </div>
                    </Modal.Footer>
                </Modal></>
        )

    }
    else if (eintrag.typ == "Übung") {
        return (
            <>
                <div className="ereignis Übung" onClick={handleShow}>
                    <p className="abstand">{eintrag.startzeit} - {eintrag.endzeit}</p>
                    <p className="abstand">{eintrag.beschreibung}</p>
                    <p className="abstand">{eintrag.typ}</p>
                    <p className="abstand">{eintrag.raum}</p>
                </div>
                <Modal show={show} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ereignis bearbeiten</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="justify-content-md-center" sm={2}>
                            <div>
                                <p className="titel">Titel:</p>
                                <input name="beschreibung" className="input" type="text" placeholder="Titel" value={formular.beschreibung} onChange={e => setformular({ ...formular, beschreibung: e.target.value })} /><br />
                            </div>
                            <div>
                                <p className="titel">Type:</p>
                                <select className="input" name="typ" onChange={e => setformular({ ...formular, typ: e.target.value })}>
                                    <option value="Vorlesung">Vorlesung</option>
                                    <option value="Übung">Übung</option>
                                    <option value="Praktikum">Praktikum</option>
                                    <option value="Tutorium">Tutorium</option>
                                    <option value="Sonstiges">Sonstiges</option>
                                </select>
                            </div>
                            <div>
                                <p className="titel">Raum:</p>
                                <input name="raum" className="input" type="text" placeholder="Raum" value={formular.raum} onChange={e => setformular({ ...formular, raum: e.target.value })} /><br />
                            </div>
                            <div>
                                <p className="titel">Wochentag:</p>
                                <select className="input" name="wochentag" onChange={e => setformular({ ...formular, wochentag: e.target.value })}>
                                    <option value="Montag">Montag</option>
                                    <option value="Dienstag">Dienstag</option>
                                    <option value="Mittwoch">Mittwoch</option>
                                    <option value="Donnerstag">Donnerstag</option>
                                    <option value="Freitag">Freitag</option>
                                </select>
                            </div>

                            <div>
                                <p className="titel">von:</p>
                                <TimePicker
                                    className="input"
                                    name="startzeit"
                                    value={formular.startzeit}
                                    onChange={(value) => setformular({ ...formular, startzeit: value })} />
                            </div>
                            <div>
                                <p className="titel">bis:</p>
                                <TimePicker
                                    className="input"
                                    name="endzeit"
                                    value={formular.endzeit}
                                    onChange={(value) => setformular({ ...formular, endzeit: value })} />
                            </div>
                            <div>
                                <p className="titel">Semester:</p>
                                <select className="input" name="wochentag" onChange={e => setformular({ ...formular, typ: e.target.value })}>
                                    <option value="1">1.Semester</option>
                                    <option value="2">2.Semester</option>
                                    <option value="3">3.Semester</option>
                                    <option value="4">4.Semester</option>
                                    <option value="5">5.Semester</option>
                                    <option value="6">6.Semester</option>
                                    <option value="7">7.Semester</option>
                                </select>
                            </div>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <div className="button1" onClick={handleClose3}>
                            Löschen
                        </div>
                        <div className="button2" onClick={handleClose2}>
                            Speichern
                        </div>
                    </Modal.Footer>
                </Modal>
            </>

        )
    }
    else if (eintrag.typ == "Praktikum") {
        return (
            <>
                <div className="ereignis Praktikum" onClick={handleShow}>
                    <p className="abstand">{eintrag.startzeit} - {eintrag.endzeit}</p>
                    <p className="abstand">{eintrag.beschreibung}</p>
                    <p className="abstand">{eintrag.typ}</p>
                    <p className="abstand">{eintrag.raum}</p>
                </div>
                <Modal show={show} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ereignis bearbeiten</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="justify-content-md-center" sm={2}>
                            <div>
                                <p className="titel">Titel:</p>
                                <input name="beschreibung" className="input" type="text" placeholder="Titel" value={formular.beschreibung} onChange={e => setformular({ ...formular, beschreibung: e.target.value })} /><br />
                            </div>
                            <div>
                                <p className="titel">Type:</p>
                                <select className="input" name="typ" onChange={e => setformular({ ...formular, typ: e.target.value })}>
                                    <option value="Vorlesung">Vorlesung</option>
                                    <option value="Übung">Übung</option>
                                    <option value="Praktikum">Praktikum</option>
                                    <option value="Tutorium">Tutorium</option>
                                    <option value="Sonstiges">Sonstiges</option>
                                </select>
                            </div>
                            <div>
                                <p className="titel">Raum:</p>
                                <input name="raum" className="input" type="text" placeholder="Raum" value={formular.raum} onChange={e => setformular({ ...formular, raum: e.target.value })} /><br />
                            </div>
                            <div>
                                <p className="titel">Wochentag:</p>
                                <select className="input" name="wochentag" onChange={e => setformular({ ...formular, wochentag: e.target.value })}>
                                    <option value="Montag">Montag</option>
                                    <option value="Dienstag">Dienstag</option>
                                    <option value="Mittwoch">Mittwoch</option>
                                    <option value="Donnerstag">Donnerstag</option>
                                    <option value="Freitag">Freitag</option>
                                </select>
                            </div>

                            <div>
                                <p className="titel">von:</p>
                                <TimePicker
                                    className="input"
                                    name="startzeit"
                                    value={formular.startzeit}
                                    onChange={(value) => setformular({ ...formular, startzeit: value })} />
                            </div>
                            <div>
                                <p className="titel">bis:</p>
                                <TimePicker
                                    className="input"
                                    name="endzeit"
                                    value={formular.endzeit}
                                    onChange={(value) => setformular({ ...formular, endzeit: value })} />
                            </div>
                            <div>
                                <p className="titel">Semester:</p>
                                <select className="input" name="wochentag" onChange={e => setformular({ ...formular, typ: e.target.value })}>
                                    <option value="1">1.Semester</option>
                                    <option value="2">2.Semester</option>
                                    <option value="3">3.Semester</option>
                                    <option value="4">4.Semester</option>
                                    <option value="5">5.Semester</option>
                                    <option value="6">6.Semester</option>
                                    <option value="7">7.Semester</option>
                                </select>
                            </div>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <div className="button1" onClick={handleClose3}>
                            Löschen
                        </div>
                        <div className="button2" onClick={handleClose2}>
                            Speichern
                        </div>
                    </Modal.Footer>
                </Modal>
            </>

        )
    }
    else {
        return (
            <>
                <div className="ereignis Tutorial" onClick={handleShow}>
                    <p className="abstand">{eintrag.startzeit} - {eintrag.endzeit}</p>
                    <p className="abstand">{eintrag.beschreibung}</p>
                    <p className="abstand">{eintrag.typ}</p>
                    <p className="abstand">{eintrag.raum}</p>
                </div>
                <Modal show={show} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ereignis bearbeiten</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="justify-content-md-center" sm={2}>
                            <div>
                                <p className="titel">Titel:</p>
                                <input name="beschreibung" className="input" type="text" placeholder="Titel" value={formular.beschreibung} onChange={e => setformular({ ...formular, beschreibung: e.target.value })} /><br />
                            </div>
                            <div>
                                <p className="titel">Type:</p>
                                <select className="input" name="typ" onChange={e => setformular({ ...formular, typ: e.target.value })}>
                                    <option value="Vorlesung">Vorlesung</option>
                                    <option value="Übung">Übung</option>
                                    <option value="Praktikum">Praktikum</option>
                                    <option value="Tutorium">Tutorium</option>
                                    <option value="Sonstiges">Sonstiges</option>
                                </select>
                            </div>
                            <div>
                                <p className="titel">Raum:</p>
                                <input name="raum" className="input" type="text" placeholder="Raum" value={formular.raum} onChange={e => setformular({ ...formular, raum: e.target.value })} /><br />
                            </div>
                            <div>
                                <p className="titel">Wochentag:</p>
                                <select className="input" name="wochentag" onChange={e => setformular({ ...formular, wochentag: e.target.value })}>
                                    <option value="Montag">Montag</option>
                                    <option value="Dienstag">Dienstag</option>
                                    <option value="Mittwoch">Mittwoch</option>
                                    <option value="Donnerstag">Donnerstag</option>
                                    <option value="Freitag">Freitag</option>
                                </select>
                            </div>

                            <div>
                                <p className="titel">von:</p>
                                <TimePicker
                                    className="input"
                                    name="startzeit"
                                    value={formular.startzeit}
                                    onChange={(value) => setformular({ ...formular, startzeit: value })} />
                            </div>
                            <div>
                                <p className="titel">bis:</p>
                                <TimePicker
                                    className="input"
                                    name="endzeit"
                                    value={formular.endzeit}
                                    onChange={(value) => setformular({ ...formular, endzeit: value })} />
                            </div>
                            <div>
                                <p className="titel">Semester:</p>
                                <select className="input" name="wochentag" onChange={e => setformular({ ...formular, typ: e.target.value })}>
                                    <option value="1">1.Semester</option>
                                    <option value="2">2.Semester</option>
                                    <option value="3">3.Semester</option>
                                    <option value="4">4.Semester</option>
                                    <option value="5">5.Semester</option>
                                    <option value="6">6.Semester</option>
                                    <option value="7">7.Semester</option>
                                </select>
                            </div>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <div className="button1" onClick={handleClose3}>
                            Löschen
                        </div>
                        <div className="button2" onClick={handleClose2}>
                            Speichern
                        </div>
                    </Modal.Footer>
                </Modal>
            </>

        )
    }


}

export default Ereignis
