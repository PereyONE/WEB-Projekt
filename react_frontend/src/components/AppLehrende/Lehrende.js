import React from 'react'
import { Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Lehrende.css'


function Lehrende({ prof }) {
    return (
        <Col className="prof" lg={{ span: 4, offset: 0 }}>
            <div >
                <Link to="/lehrende/prof.name">
                    <Image className="Bild" src={prof.picture} alt="prof" fluid />
                </Link>
            </div>

            <div className="Name">
                {prof.name}
            </div>
        </Col>
    )
}



export default Lehrende