import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHandsHelping, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import './LehrendeProfil.css'





function LehrendeProfil({ prof }) {
    return (
        
            <Row xs={1} md={2}>
                <Col lg={{ span: 4, offset: 0 }}>
                    <Image className="BildProfil" src={prof.picture} alt="prof" fluid />
                </Col>
                <Col lg={{ span: 8, offset: 0 }}>
                    <Row xs={1} xl={2}>
                        <Col className="Card">
                            <Row  >
                                <Col xs={{ span: 4, offset: 0 }} >
                                    <FontAwesomeIcon className="ProfIcon" icon={faUser} />
                                </Col>
                                <Col className="ProfilSchrift" xs={{ span: 7, offset: 0 }}>
                                    Name<br />{prof.name}
                                </Col>
                            </Row>
                        </Col>
                        <Col className="Card">
                            <Row>
                                <Col xs={{ span: 4, offset: 0 }}>
                                    <FontAwesomeIcon className="ProfIcon" icon={faHandsHelping} />
                                </Col>
                                <Col className="ProfilSchrift">
                                    Sprechzeiten<br />{prof.zeit}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row xs={1} xl={2}>
                        <Col className="Card">
                            <Row>
                                <Col xs={{ span: 4, offset: 0 }}>
                                    <FontAwesomeIcon className="ProfIcon" icon={faEnvelope} />
                                </Col>
                                <Col className="ProfilSchrift">
                                    E-mail<br />{prof.email}
                                </Col>
                            </Row>
                        </Col>
                        <Col className="Card">
                            <Row>
                                <Col xs={{ span: 4, offset: 0 }}>
                                    <FontAwesomeIcon className="ProfIcon" icon={faPhone} />
                                </Col>
                                <Col className="ProfilSchrift">
                                    Telefon<br />{prof.telefon}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            
  
        

    )
}



export default LehrendeProfil