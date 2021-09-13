import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHandsHelping, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import './LehrendeProfil.css'
import FAQ from '../AppFAQ/FAQ'
import { Link } from 'react-router-dom'





function LehrendeProfil({ prof }) {


    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }
    const [faqs, setfaqs] = useState([
        {
            question: 'Module',
            answer:
                <div>
                    {prof.modules.map((modul)=>{
                        console.log(modul)
                        return(
                            <Link to='/'>{modul.moduleName}</Link>
                        )
                    })}
                </div>
            ,
            open: false
        }
    ]);

    return (
        <div>

            <Row xs={1} md={2}>
                <Col lg={{ span: 4, offset: 0 }}>
                    <figure>
                        <Image className="BildProfil" src={'/images/lehrende/' + prof.bild} alt="prof" fluid />
                        <figcaption>Foto: {prof.bildrechte}</figcaption>
                    </figure>
                </Col>
                <Col lg={{ span: 8, offset: 0 }}>
                    <Row xs={1} xl={2}>
                        <Col className="Card">
                            <Row  >
                                <Col xs={{ span: 4, offset: 0 }} >
                                    <FontAwesomeIcon className="ProfIcon" icon={faUser} />
                                </Col>
                                <Col className="ProfilSchrift" xs={{ span: 7, offset: 0 }}>
                                    Name<br />{prof.titel} {prof.vorname} {prof.nachname}
                                </Col>
                            </Row>
                        </Col>
                        <Col className="Card">
                            <Row>
                                <Col xs={{ span: 4, offset: 0 }}>
                                    <FontAwesomeIcon className="ProfIcon" icon={faHandsHelping} />
                                </Col>
                                <Col className="ProfilSchrift">
                                    Sprechzeiten<br />{prof.sprechstunde}
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
                                    Telefon<br />{prof.telefonnummer}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} color="lila" />
                ))}
            </div>
        </div>





    )
}



export default LehrendeProfil