import React, {useEffect, useState} from 'react';
import { Admin, Resource } from 'react-admin';
import axios from 'axios';

import FaqList from './components/FaqList'
import FaqCreate from './components/FaqCreate'
import FaqEdit from './components/FaqEdit'
import dataProvider from './dataProvider';



    //simpleRestProvider('http://localhost:3000/api/faq');
    
function AppAdmin(){


  const [faqs, setfaqs] = useState([]);

  useEffect(()=> {
    axios.get('localhost:8080/api/faqs')
    .then(res => {
      setfaqs(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  
  return(
<Admin dataProvider= {dataProvider}>
    <Resource
        name="faq" 
        list={FaqList} 
        create={FaqCreate} 
        edit={FaqEdit} 
      /> 
  </Admin>
  )
}

export default AppAdmin;