import React, { useState } from 'react';
import { Container, Col, Row, ButtonGroup, Button, Table } from 'react-bootstrap'
import FAQ from '../AppFAQ/FAQ';
import DragObject from './DragObject';
import './Verlaufsplan.css'


function AppVerlaufsplan() {

  const testmodul={
    name:"Mathe 1"
  }

  const [pflichtmodule] = useState([
    {
      name: 'Mathe 1'
    },
    {
      name: 'Mathe 2'
    },
    {
      name: 'Siga'
    }
  ])

  const [vertiefungsmodule] = useState([
    {
      name: 'PAM'
    },
    {
      name: 'WEB'
    },
    {
      name: 'DIS'
    }
  ])

  const [wahlmodule] = useState([
    {
      name: 'FPO'
    },
    {
      name: 'KOAK'
    },
    {
      name: 'Spanisch'
    }
  ])

  const [faqs, setfaqs] = useState([
    {
      question: 'Pflichtmodule',
      answer:
        <div>
          {pflichtmodule.map((modul, i) => (

            <DragObject modul={modul} color='red' />

          ))}
        </div>,

      open: false,
      color: 'rot'
    },
    {
      question: 'Vertiefungsmodule',
      answer:
        <div>
          {vertiefungsmodule.map((modul, i) => (

            <DragObject modul={modul} color='orange' />

          ))}
        </div>,
      open: false,
      color: 'orange'
    },
    {
      question: 'Wahlmodule',
      answer:
        <div>
          {wahlmodule.map((modul, i) => (

            <DragObject modul={modul} color='violet' />

          ))}
        </div>,
      open: false,
      color: 'lila'
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

    <div>

      <Container fluid>
        <Row>
          <Col xl={3}>

            <h3>Modulauswahl</h3>

            <ButtonGroup aria-label="Basic example">
              <Button variant="outline-secondary">Modul</Button>
              <Button variant="outline-secondary">ULP</Button>
              <Button variant="outline-secondary">Klausur</Button>
            </ButtonGroup>

            <div className="faqs">
              {faqs.map((faq, i) => (
                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} color={faq.color} />
              ))}
            </div>

          </Col>


          <Col>
          <h3>Semesterauswahl</h3>
          <div className="SemesterButtons">
            

              <Button variant="outline-dark" className="btn-circle btn-xl"> löschen</Button>
              <Button variant="outline-dark">sieben</Button>
              <Button variant="outline-dark">zwölf</Button>

            
            </div>

            <Row >

              {/* <Col>

              <Table responsive="xl">
                <thead>
                  <tr>
                    <th>#</th>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <th key={index}>{index+1}. Semester</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    {Array.from({ length: 3}).map((_, index) => (
                      <td key={index}>Fach 1 Spalte {index+1}</td>
                    ))}
                  </tr>
                  <tr>
                    <td></td>
                    {Array.from({ length: 3}).map((_, index) => (
                      <td key={index}>Fach 4 Spalte {index+1}</td>
                    ))}
                  </tr>
                  <tr>
                    <td></td>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <td key={index}>Fach 3 Spalte {index+1}</td>
                    ))}
                  </tr>
                </tbody>
              </Table>
              </Col> */}

              

               <Col className="Semester">
                <h4>Semester 1</h4>
                <DragObject modul={testmodul} color='red' />
                <DragObject modul={testmodul} color='orange' />
                <DragObject modul={testmodul} color='violet' />
              </Col>
              <Col className="Semester">
              <h4>Semester 2</h4>
              </Col>
              <Col className="Semester">
              <h4>Semester 3</h4>
              </Col> 
              



            </Row>
          </Col>


        </Row>
      </Container>


    </div>



  );
}

export default AppVerlaufsplan;