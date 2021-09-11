import React from 'react'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Lehrende.css'


function Lehrende({ prof }) {
    return (
        <Col className="prof" lg={{ span: 4, offset: 0 }}>
            <div >
                <figure>
                    <Link to={`/lehrende/${prof.id}`}>
                        <Image className="Bild" src={"/images/lehrende/" + prof.bild} alt="prof" fluid />
                    </Link>
                    <figcaption>Foto: Michael M. Schuff</figcaption>
                </figure>
            </div>

            <div className="Name">
                {prof.titel} {prof.vorname} {prof.nachname}
            </div>
        </Col>
    )
}



export default Lehrende