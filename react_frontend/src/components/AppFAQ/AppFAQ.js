import React, { useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import FAQ from './FAQ';
import axios from 'axios';



function AppFAQ() {
  
  const [faqs, setfaqs] = useState([]);

  const config = {     
    headers: 
    { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJpdXNAcGVyZXkubmV0IiwiZXhwIjoxNjI2ODYxOTgwLCJpYXQiOjE2MjY4NTgzODB9.22FdYj5kdCBsUivFheRqZlsjJOpStMIeB3TeE_R55Wo', 
      'Access-Control-Allow-Origin':'*'
    }
  }
  useEffect(()=> {
    axios.get('http://localhost:8080/api/faqs', config)
    .then(res => {
      console.log(res)
      setfaqs(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

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
    <div >


      <Container>
        <h1>FAQ</h1>
        <div className="faqs">
          {faqs.map((faq, i) => (
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} color="rot" />
          ))}
        </div>
      </Container>


    </div>

  );
}

export default AppFAQ;

