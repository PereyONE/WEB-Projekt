import React, { useState } from 'react';
import FAQ from '../AppFAQ/FAQ';
import { Link } from 'react-router-dom';
import { Col, Image, Row } from 'react-bootstrap';
import './AppModule.css'





function Module({ modul }) {

    /*
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
            question: modul.name,
            answer:
                <Row xs={1} sm={3}>
                    {modul.module.map((m) => (
                        <Col className="Centro">
                            <Link to="/module/modul.name">
                                <Image className="" src={m.picture} alt="modul" fluid />
                            </Link>

                            {m.name}
                        </Col>
                    ))}
                </Row>,

            open: false
        }
    ]);

    return (

        <div>

            <div className="faqs">
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} color="orange" />
                ))}
            </div>

        </div>


    );
    */
    return (
        <div>
            <div className="faqs">
                <Link to={`/module/${modul.id}`}>
                    <Image className="" src={"/images/module/"+modul.bild} alt="modul" fluid />
                </Link>
                {modul.moduleName}
            </div>
        </div>
    );
}

export default Module;