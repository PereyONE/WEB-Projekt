import React, { useState, useEffect } from 'react';
import LehrendeProfil from './LehrendeProfil';
import FAQ from '../AppFAQ/FAQ'
import { Link, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router';
import axios from 'axios';


function AppLehrendeProfil({ auth }) {
    const { id } = useParams();
    const [prof, setprof] = useState({ modules: [] });

    useEffect(() => {
        axios.get(`api/lehrende/${id}`)
            .then(res => {
                setprof(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 403) {
                    localStorage.clear()
                    window.location.reload()
                }
            })
    }, [])



    if (!auth) {
        return <Redirect to="/login" />
    }



    return (

        <Container>
            <div style={{ marginTop: '50px' }}>
                <LehrendeProfil prof={prof} />
            </div>

        </Container>




    )
}



export default AppLehrendeProfil