import React, { useState } from 'react';
import FAQ from './FAQ';


function AppFAQ() {
  const [faqs, setfaqs] = useState([
    {
      question: 'How many programmers does it take to screw in a lightbulb?',
      answer: 'None. We don\'t address hardware issues.',
      open: false
    },
    {
      question: 'Who is the most awesome person?',
      answer: 'You. The Viewer.',
      open: false
    },
    {
      question: 'How many questions does it take to make a successful FAQ Page?',
      answer: 'This many.',
      open: false
    },
    {
      question: 'Who is the most awesome person?',
      answer: 'You. The Viewer.',
      open: false
    },
    {
      question: 'Who is the most awesome person?',
      answer: 'You. The Viewer.',
      open: false
    },
    {
      question: 'Who is the most awesome person?',
      answer: 'You. The Viewer.',
      open: false
    },
    {
      question: 'Who is the most awesome person?',
      answer: 'You. The Viewer.',
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
    <div >
      
      
      
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      
      
    </div>
    
  );
}

export default AppFAQ;

