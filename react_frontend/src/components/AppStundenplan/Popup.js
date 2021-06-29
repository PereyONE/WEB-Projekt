import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './Popup.css';
import { Row } from 'react-bootstrap';



function Popup() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div className="EreignisErstellen btn" onClick={handleShow}>
          Ereignis erstellen
        </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Neues Ereignis</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="justify-content-md-center" sm={2}>
              <div >
                <p className="titel">Titel:</p>
                <input name="titel" className="input" type="text" placeholder="Titel"/><br/>
              </div>
              <div>
                <p className="titel">Type:</p>
                <select className="input">
                  <option>Vorlesung</option>
                  <option>Übung</option>
                  <option>Praktikum</option>
                  <option>Tutorial</option>
              </select>
              </div>
              <div>
                <p className="titel">Raum:</p>
                <input name="raum" className="input" type="text" placeholder="Raum"/><br/>
              </div>
              <div>
                <p className="titel">Wochentag:</p>
                <select className="input">
                  <option>Montag</option>
                  <option>Dienstag</option>
                  <option>Mittwoch</option>
                  <option>Donnerstag</option>
                  <option>Freitag</option>
                </select>
              </div>
              <p className="titel">Uhrzeit:</p>
              <div></div>
              
            </Row>
            <Row sm={3}>
              <input className="input2" name="stunden" type="number" min="0" max="23" placeholder="0" size="number"/>:
              <input className="input2" name="minuten" type="number" min="0" max="59" placeholder="0" size="number"/>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <div className="button1" onClick={handleClose}>
              Abbrechen
            </div>
            <div className="button2" onClick={handleClose}>
              Speichern
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
}
  
export default Popup