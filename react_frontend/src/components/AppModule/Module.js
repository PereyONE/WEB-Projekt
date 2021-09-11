import React, { useState, useEffect } from 'react';
import FAQ from '../AppFAQ/FAQ';
import { Link } from 'react-router-dom';
import { Col, Image, Row } from 'react-bootstrap';
import './AppModule.css'






function Module({ kategorie, mod }) {
    const module = mod

    useEffect(() => {
        console.log(module)
    })


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
            question: kategorie,
            answer:
                <Row xs={1} sm={3}>
                    {module.map((m) => {
                        if (m.oberkategorie === kategorie)

                            return (
                                <Col className="Centro">
                                    {m.moduleName}
                                    <figure>
                                        <Link to={`/module/${m.id}`}>
                                            <Image className="" src={'/images/module/' + m.bild} alt="modul" fluid />
                                        </Link>
                                        <figcaption>Foto: Michael M. Schuff</figcaption>
                                    </figure>
                                </Col>
                            )
                    })}
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


    // return (
    //     <div>
    //         <div className="faqs">

    //             <div style={{}}>

    //                 <Link to={`/module/${modul.id}`}>
    //                     <Image className="" src={'/images/module/platzhalter.jpg'} alt="modul" fluid
    //                         style={{ height: '200px' }} />
    //                 </Link>
    //                 {modul.moduleName}

    //             </div>
    //         </div>
    //     </div>
    // );
}


export default Module;