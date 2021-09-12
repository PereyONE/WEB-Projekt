import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faSnowflake, faUserClock, faWallet } from '@fortawesome/free-solid-svg-icons'
import './AppModule.css'
import { useParams } from "react-router-dom";
import axios from 'axios';

function ModuleProfil({ modul }) {
    const { modulid } = useParams()
    /*
    const [modul, setmodul] = useState([]);

    useEffect(()=> {
        axios.get('/api/modules/'+{modulid})
        .then(res => {
        setmodul(res.data)
        })
        .catch(err => {
        console.log(err)
        })
    },[])
    */
    return (

        <div>

            <div className="titel">
                <figure>
                    <Image className="titelbild" src={modul.picture} alt="prof" fluid />
                    <figcaption style={{position: 'absolute', right:'0px'}}>Foto: {modul.bildrechte}</figcaption>
                </figure>
                <h1 className="titeltext" style={{ color: 'white' }}>{modul.name}</h1>
            </div>

            <div>
                <Row xs={1} lg={2}>

                    <Col xs={{ span: 12, order: 'last' }} lg={{ span: 4, order: 'first' }}>
                        <h3>Personen</h3>
                        <Row xs={2} lg={1}>
                            {modul.personen.map((p) => (
                                <Link to="/lehrende/prof.name">
                                    <Col>
                                        <Row className="personCard" xs={2}>
                                            <Col lg={{ span: 4, offset: 0 }}>
                                                <Image className="thumbnailperson" src={p.picture} alt="" />
                                            </Col>
                                            <Col className="nameFrame" lg={{ span: 8, offset: 0 }} >
                                                <h5 className="nameperson">{p.name}</h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Link>
                            ))}
                        </Row>

                    </Col>

                    <Col xs={{ span: 12, order: 'first' }} lg={{ span: 8, order: 'last' }}>
                        <h3>Fakten</h3>
                        <Row xs={2} >
                            <Col >
                                <Row className="factCard" >
                                    <Col xs={{ span: 4 }} >
                                        <FontAwesomeIcon className="ModulIcon" icon={faUserClock} />
                                    </Col>
                                    <Col className="ProfilSchrift" xs={{ span: 8, offset: 0 }}>
                                        Regelstudienzeit<br />{modul.zeit}. Semester
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <Row className="factCard">
                                    <Col xs={{ span: 4, offset: 0 }} >
                                        <FontAwesomeIcon className="ModulIcon" icon={faSnowflake} />
                                    </Col>
                                    <Col className="ProfilSchrift" xs={{ span: 7, offset: 0 }}>
                                        ULP und Vorlesung<br />{modul.ulp}
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <Row className="factCard">
                                    <Col xs={{ span: 4, offset: 0 }} >
                                        <FontAwesomeIcon className="ModulIcon" icon={faCommentDots} />
                                    </Col>
                                    <Col className="ProfilSchrift" xs={{ span: 7, offset: 0 }}>
                                        Prüfungsform<br />{modul.klausur}
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <Row className="factCard">
                                    <Col xs={{ span: 4, offset: 0 }} >
                                        <FontAwesomeIcon className="ModulIcon" icon={faWallet} />
                                    </Col>
                                    <Col className="ProfilSchrift" xs={{ span: 7, offset: 0 }}>
                                        {modul.ects} ECTS
                                    </Col>
                                </Row>
                            </Col>


                        </Row>
                        <p>Inhalt <br />
                            Die Produktion von auditiven, visuellen und multimedialen Medieninhalten ist geprägt
                            durch die verwendeten Techniken und Technologien zur Aufzeichnung, Speicherung, Bearbeitung,
                            Transport und Wiedergabe von Ton und (Bewegt-)Bild.
                        </p>
                    </Col>

                </Row>

            </div>
        </div >


    );
}

export default ModuleProfil;