import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import './Popup.css';
import { Row } from 'react-bootstrap';
import TimePicker from 'react-time-picker';
import axios from 'axios';

function Popup({ semester }) {
  const [show, setShow] = useState(false);
  const [formular, setformular] = useState(
    {
      beschreibung: '',
      typ: 'Vorlesung',
      raum: '',
      wochentag: 'Montag',
      startzeit: '',
      endzeit: '',
      semester: semester,
    }
  );
  const handleClose1 = () => setShow(false);

  const handleClose2 = event => {
    setShow(false);
    event.preventDefault();

    axios.post('/api/termine', formular)
      .then(res => {
        console.log(res)
        setShow(false)
        if (window.confirm("Möchtest du deinen neuen Stundenplan laden?")) {
          window.location.reload()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleShow = () => setShow(true);



  return (
    <>
      <div className="EreignisErstellen btn" onClick={handleShow}>
        Ereignis erstellen
      </div>

      <Modal show={show} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Neues Ereignis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-md-center" sm={2}>
            <div >
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
                onChange={(value) => setformular({ ...formular, startzeit: value })}

              />
            </div>
            <div>
              <p className="titel">bis:</p>
              <TimePicker
                className="input"
                name="endzeit"
                value={formular.endzeit}
                onChange={(value) => setformular({ ...formular, endzeit: value })}
              />
            </div>
            <div>
              <p className="titel">Semester:</p>
              <select className="input" name="wochentag" onChange={e => setformular({ ...formular, semester: e.target.value })}>
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
          <div className="button1" onClick={handleClose1}>
            Abbrechen
          </div>
          <div className="button2" onClick={handleClose2}>
            Speichern
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup