
import React, { useState, useEffect } from 'react';
import './AppAdmin.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'



function AppAdmin({ prof, course }) {

    const [auth, setAuth] = useState(true)

    useEffect(() => {
        axios.get('/api/authenticate/admin')
            .then(res => {
                setAuth(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='container' style={{}}>
            <h1>Was möchten Sie bearbeiten?</h1>
            <div >
                <a style={{color:'black', fontSize:'30px', margin:'50px'}}href='/admin/lehrende'>Lehrende</a>
                <a style={{color:'black', fontSize:'30px', margin:'50px'}}href='/admin/module'>Module</a>
                <a style={{color:'black', fontSize:'30px', margin:'50px'}}href='/admin/vertiefungen'>Vertiefungen</a>
                <a style={{color:'black', fontSize:'30px', margin:'50px'}}href='admin/faqs'>FAQs</a>
            </div>
        </div>
    )
}
export default AppAdmin;