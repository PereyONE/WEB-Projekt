import React, { useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import FAQ from './FAQ';
import axios from 'axios';
import { Redirect } from 'react-router';



function AppFAQ({auth}) {
  
  const [faqs, setfaqs] = useState([]);


  useEffect(()=> {
    axios.get('/api/faqs')
    .then(res => {
      setfaqs(res.data)
    })
    .catch(function (error) {
      console.log(error)
      if (error.response.status===403) {
        localStorage.clear()
        window.location.reload()
      }
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

  if (!auth) {
    return <Redirect to="/login" />
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

