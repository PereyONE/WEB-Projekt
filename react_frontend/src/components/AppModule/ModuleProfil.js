import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faSnowflake, faUserClock, faWallet } from '@fortawesome/free-solid-svg-icons'
import './AppModule.css'


function ModuleProfil({ modul }) {
    
    return (

        <div>

            <div className="titel">
                <figure>
                    <Image className="titelbild" src={'/images/module/'+modul.bild} alt="modul" fluid />
                    <figcaption style={{position: 'absolute', right:'0px'}}>Foto: {modul.bildrechte}</figcaption>
                </figure>
                <h1 className="titeltext" style={{ color: 'white' }}>{modul.moduleName}</h1>
            </div>

            <div>
                <Row xs={1} lg={2}>

                    <Col xs={{ span: 12, order: 'last' }} lg={{ span: 4, order: 'first' }}>
                        <h3>Personen</h3>
                        <Row xs={2} lg={1}>
                            {modul.lehrende.map((p) => (
                                <Link to={`/lehrende/${p.id}`}>
                                    <Col>
                                        <Row className="personCard" xs={2}>
                                            <Col lg={{ span: 4, offset: 0 }}>
                                                <Image className="thumbnailperson" src={'/images/lehrende/'+p.bild} alt="" />
                                            </Col>
                                            <Col className="nameFrame" lg={{ span: 8, offset: 0 }} >
                                                <h5 className="nameperson">{p.titel} {p.vorname} {p.nachname}</h5>
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
                                        Regelstudienzeit<br />{modul.regelstudienzeitsieben}. Semester
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <Row className="factCard">
                                    <Col xs={{ span: 4, offset: 0 }} >
                                        <FontAwesomeIcon className="ModulIcon" icon={faSnowflake} />
                                    </Col>
                                    <Col className="ProfilSchrift" xs={{ span: 7, offset: 0 }}>
                                        ULP und Vorlesung<br />{modul.verfügbarkeit}
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <Row className="factCard">
                                    <Col xs={{ span: 4, offset: 0 }} >
                                        <FontAwesomeIcon className="ModulIcon" icon={faCommentDots} />
                                    </Col>
                                    <Col className="ProfilSchrift" xs={{ span: 7, offset: 0 }}>
                                        Prüfungsform<br />{modul.prüfungsart}
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
                            {modul.beschreibung}
                        </p>
                    </Col>

                </Row>

            </div>
        </div >


    );
}

export default ModuleProfil;