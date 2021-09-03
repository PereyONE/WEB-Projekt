import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const FaqCreate = (props) => {
    return (
       <Create title='Create a Post' {...props}>
           <SimpleForm>
               <TextInput multiline source = 'question' />
               <TextInput multiline source= 'answer' />
           </SimpleForm>
       </Create>
    )
}

export default FaqCreate