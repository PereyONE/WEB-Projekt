import React from 'react'
import {List, 
        Datagrid, 
        TextField, 
        EditButton, 
        DeleteButton} 
        from 'react-admin'


        const FaqList = (props) => {
        return <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField multiline source='question' />
                <TextField multiline source='answer' />
                <EditButton basePath='/faq' />
                <DeleteButton basePath='/faq' />
            </Datagrid>
        </List>
}

export default FaqList