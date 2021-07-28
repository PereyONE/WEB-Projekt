import React, { useState } from 'react'
import LehrendeProfil from './LehrendeProfil';
import FAQ from '../AppFAQ/FAQ'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';



function AppLehrendeProfil() {

    const prof =
    {
        picture: '/images//lehrende/platzhalter.jpg',
        name: "Prof. Dr. Dietmar Kunz",
        email: "dietmar.kunz@th-koeln.de",
        zeit: "Mo-Di 17:30 ZN-7-12",
        telefon: "0221 123 456",
        module: [
            {
                name: "Mathematik 2"
            },
            {
                name: "Bildverarbeitung 1"
            },
            {
                name: "Auditive und visuelle Wahrnehmung"
            }
        ]

    };

    const [faqs, setfaqs] = useState([
        {
            question: 'Module',
            answer: 
                <ul>
                    {prof.module.map((modul, i) => (
                        <div>
                            <Link className="ModulDrop" to="/module/modul.name">{modul.name}</Link>
                        </div>

                    ))}
                </ul>
            ,
            open: false
        },
        {
            question: 'Lebenslauf',
            answer: <div class="table">
            <table border="0">
                <tbody>
                                                                            <tr>
                        <th scope="row">
                            1973 - 1980                                </th>
                        <td>
                                                                Studium der Mathematik<br/>
                                                                Universität  Mainz                                                                    </td>
                    </tr>
                                                                                                            <tr>
                        <th scope="row">
                            1983                                </th>
                        <td>
                                                                Promotion<br/>
                                                                Universität Mainz, Mathematik,
bei Prof. v. Seelen, Institut für Zoologie                                                                    </td>
                    </tr>
                                                                                                            <tr>
                        <th scope="row">
                            1983-1998                                </th>
                        <td>
                                                                wiss. Mitarbeiter bei den Philips Forschungslaboratorien<br/>
                                                                Tätigkeit in Hamburg (bis 1990) und Aachen. Dabei Arbeit im Bereich der Kernspintomographie und Spektroskopie (1983-88), der Planung von Mobilfunknetzen (1988-94) und der digitalen Verarbeitung von Röntgenbildern und Röntgenbildfolgen (1994-98).                                                                    </td>
                    </tr>
                                                                                                            <tr>
                        <th scope="row">
                            seit 1.9.1998                                </th>
                        <td>
                                                                Professor an der FH Köln<br/>
                                                                zunächst am Fachbereich Photoingenieurwesen und Medientechnik, heute Institut für Medien- und Phototechnik, Lehrgebiet "Mathematik und Algorithmen der Bildverarbeitung"                                                                    </td>
                    </tr>
                                                                            </tbody>
            </table>
        </div>,
            open: false
        }
    ]);

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



    return (
        
            <Container>
                <div >
                    <LehrendeProfil prof={prof} />
                </div>

                <div className="faqs">
                    {faqs.map((faq, i) => (
                        <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} color="lila" />
                    ))}
                </div>
            </Container>


        

    )
}



export default AppLehrendeProfil