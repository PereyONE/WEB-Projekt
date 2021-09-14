import React, { useState, useEffect } from 'react';
import './AppAdmin.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'



function AppAdmin({ auth }) {

    const [authAdmin, setAuthAdmin] = useState(true)

    useEffect(() => {
        axios.get('/api/authenticate/admin')
            .then(res => {
                setAuthAdmin(res.data)
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 403) {
                    localStorage.clear()
                    window.location.reload()
                }
            })
    }, [])

    if (!(auth)) {
        return (
            <Redirect to='/login' />

        )
    }
    if (!(authAdmin)) {
        return (
            <Redirect to='/' />

        )
    }

    return (
        <div className='container' style={{}}>
            <h1>Was möchten Sie bearbeiten?</h1>
            <div >
                <a style={{ color: 'black', fontSize: '30px', margin: '50px' }} href='/adminLehrende'>Lehrende</a>
                <a style={{ color: 'black', fontSize: '30px', margin: '50px' }} href='/adminModule'>Module</a>
                <a style={{ color: 'black', fontSize: '30px', margin: '50px' }} href='/adminTermine'>Termine</a>
                <a style={{ color: 'black', fontSize: '30px', margin: '50px' }} href='/adminFaqs'>FAQs</a>
            </div>
        </div>
    )
}
export default AppAdmin;