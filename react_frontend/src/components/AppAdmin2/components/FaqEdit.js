import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'

const FaqEdit = (props) => {
    return (
       <Edit title='Edit Faq' {...props}>
           <SimpleForm>
               <TextInput disabled source = 'id' />
               <TextInput multiline source = 'question' />
               <TextInput multiline source= 'answer' />
           </SimpleForm>
       </Edit>
    )
}

export default FaqEdit