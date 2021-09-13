import React, { useState, useEffect } from 'react';
import './AppAdmin.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom'



function AdminFAQ({auth}) {

    const defaultFaq= { antwort:'', frage:'' };

    const [authAdmin, setAuthAdmin] = useState(true)
    const [faqs, setFaqs] = useState([])
    const [faqUpdate, setFaqUpdate]=useState(defaultFaq)

    useEffect(() => {
        axios.get('/api/authenticate/admin')
            .then(res => {
                setAuthAdmin(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios.get('/api/faqs')
            .then(res => {
                setFaqs(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    

    

    const postFAQ = () =>{
        axios.post('api/faqs', faqUpdate)
        .then(res=>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

        //Bild Upload

        // window.location.reload()
    }

    const deleteFAQ = () => {
        axios.delete('/api/faqs',  faqUpdate)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


  

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
        <div className="container">
            
            
         
            <h2>
                FAQ
            </h2>
            <br></br>
            <div class="row">
                <div class="col-auto mr-auto">Zu bearbeitende Frage auswählen</div>
                <div class="col-auto ">
                    <button type="button" class="btn-small btn btn-danger" onClick={deleteFAQ}>Frage löschen</button>
                </div>

            </div>
            <br>
            </br>
            <div class="row">
                <div class="col" >
                    <div class="Scroll">
                        <div class="list-group" >
                        <button key='x' onClick={() => setFaqUpdate(defaultFaq)} type="button" class="list-group-item list-group-item-action" > neue Frage erstellen </button>
                            {faqs.map((faq) => (
                                <button type="button" class="list-group-item list-group-item-action" onClick={()=> {setFaqUpdate(faq); console.log(faqUpdate)}}>{faq.frage} </button>
                            ))}
                        </div>
                    </div>
                 
                    <div>
                        <br></br>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Frage:</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={faqUpdate.frage} onChange={e=>{setFaqUpdate({...faqUpdate, frage:e.target.value})}}></textarea>
                        </div>
                    </div>
                    <div>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Antwort:</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={faqUpdate.antwort} onChange={e=>{setFaqUpdate({...faqUpdate, antwort: e.target.value})}}></textarea>
                        </div>
                    </div>
                </div>
                <div class="col ">
                    <button type="button" class="btn btn-info btn-lg btn-block" onClick={postFAQ}>Alle Änderungen speichern!</button>
                </div>

            </div>




        </div>
    );
}
export default AdminFAQ;