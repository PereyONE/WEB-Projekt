import React, { useState, useEffect } from 'react';
import {  Form } from 'react-bootstrap';
import './AppEinstellungen.css';
import axios from 'axios'
import { Redirect } from 'react-router';

function AppEinstellungen({ auth }) {

  const [user, setUser] = useState()

  const defaultVertiefung = { module: [] }
  const [vertiefungUpdate, setVertiefungUpdate] = useState(defaultVertiefung)

  const [courseAdd, setCourseAdd] = useState({ id: null })
  const [courseRemove, setCourseRemove] = useState({ id: null })

  const defaultCourse = { id: null, name: '' };
  const [coursesUpdate, setCourseUpdate] = useState(defaultCourse)


  const [courses, setCourses] = useState([
    { id: 1, name: 'Bildverarbeitung' },
    { id: 2, name: 'Web-Engineering' },
    { id: 3, name: 'Interaktive Computergrafik' },
    { id: 4, name: 'Mediendesign' },
    { id: 5, name: 'Kameratechnik' },
    { id: 6, name: 'Mediendistribution und -wiedergabe' },
    { id: 7, name: 'Produktionstechnik audiovisueller Medien' },
  ])

  const [wahlCourses, setWahlCourses] = useState([
    { id: 3, name: 'Postproduction' },
    { id: 4, name: 'Stereoskopie' },
    { id: 5, name: 'CGI Workshop' },
    { id: 6, name: 'Film und Postproduction' },
    { id: 7, name: 'Themen der Computergrafik' },
  ])

  const [wahlCourseAdd, setWahlCourseAdd] = useState({ id: null })
  const [wahlCourseRemove, setWahlCourseRemove] = useState({ id: null })
  //Default wird erstellt
  const defaultWahlCourse = { id: null, name: '' };
  const [wahlCoursesUpdate, setWahlCourseUpdate] = useState(defaultWahlCourse)

  const [passwort, setPasswort]=useState()
  const [passwort2, setPasswort2]=useState()

  useEffect(() => {
    axios.get('/api/student')
      .then(res => {
        setUser(res.data)
        if (!(res.data.vertiefungen === null)) {
          setVertiefungUpdate({ ...vertiefungUpdate, module: res.data.vertiefungen })
        }

        console.log(res.data)

      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  // Vertiefunspakete/namen
  // Hier GET- Request von der API und und Vertiefungen abrufen.


  function handleClick(prof) {
    //preventDefault();
    setVertiefungUpdate(prof)
    console.log(prof);
    console.log(vertiefungUpdate)
  }

  // Für jeden Bereich wird eine onTodoChange- Funktion angelegt, 
  // damit sich die Eingabedaten nicht gegenseitig überschreiben.
  function onTodoChangeModule(value) {
    setVertiefungUpdate({
      ...vertiefungUpdate,
      [module]: value,
    });
  }


  // const [courses, setCourses] = useState([
  //   { id: 1, Vertiefungsname: 'Kameratechnik' },
  //   { id: 2, Vertiefungsname: 'Produktion audiovisueller Medien' },
  //   { id: 3, Vertiefungsname: 'Web-Engineering' },
  //   { id: 4, Vertiefungsname: 'Interaktive Systeme' },
  //   { id: 5, Vertiefungsname: 'Mediendesign' },
  //   { id: 6, Vertiefungsname: 'Mediendistribution' },
  //   { id: 7, Vertiefungsname: 'Bildverarbeitung' },
  // ])



  const addModul = (evt) => {
    evt.preventDefault();
    if ((!(vertiefungUpdate.id === 0)) && (!(courseAdd.id === null)) && (!(parseInt(courseAdd) === 0))) {

      var tmp = vertiefungUpdate.module
      tmp.push(parseInt(courseAdd))
      setVertiefungUpdate(
        {
          ...vertiefungUpdate,
          module: tmp
        }
      )
      console.log(vertiefungUpdate)
      setCourseAdd({ id: null })

    }

  }


  const removeModul = (evt) => {
    evt.preventDefault()
    if ((!(vertiefungUpdate.id === 0)) && (!(courseRemove.id === null)) && (!(parseInt(courseRemove) === 0))) {
      var tmp = vertiefungUpdate.module
      var pos
      for (var i = 0; i < tmp.length; i++) {
        if (tmp[i] === parseInt(courseRemove)) {
          pos = i
        }
      }
      console.log(pos)
      tmp.splice(pos, 1)
      setVertiefungUpdate(
        {
          ...vertiefungUpdate,
          module: tmp
        }
      )
      console.log(vertiefungUpdate)
      setCourseRemove({ id: null })

    }
  }



  const defaultWahl = { wahlen: [] }

  const [wahlUpdate, setWahlUpdate] = useState(defaultWahl)
  function handleClick(profWahl) {
    //preventDefault();
    setWahlUpdate(profWahl)
    console.log(profWahl);
    console.log(wahlUpdate)
  }

  // Für jeden Bereich wird eine onTodoChange- Funktion angelegt, 
  // damit sich die Eingabedaten nicht gegenseitig überschreiben.
  // function onTodoChangeWahle(value) {
  //   setWahlUpdate({
  //     ...wahlUpdate,
  //     [wahlen]: value,
  //   });
  // }
  //Vertiefunspakete/namen


  const addWahlModul = (evt) => {
    evt.preventDefault();
    if ((!(wahlUpdate.id === 0)) && (!(wahlCourseAdd.id === null)) && (!(parseInt(wahlCourseAdd) === 0))) {

      var tmp = wahlUpdate.wahlen
      tmp.push(parseInt(wahlCourseAdd))
      setWahlUpdate(
        {
          ...wahlUpdate,
          wahlen: tmp
        }
      )
      console.log(wahlUpdate)
      setWahlCourseAdd({ id: null })
    }
  }

  const removeWahlModul = (evt) => {
    evt.preventDefault()
    if ((!(wahlUpdate.id === 0)) && (!(wahlCourseRemove.id === null)) && (!(parseInt(wahlCourseRemove) === 0))) {
      var tmp = wahlUpdate.wahlen
      var pos
      for (var i = 0; i < tmp.length; i++) {
        if (tmp[i] === parseInt(wahlCourseRemove)) {
          pos = i
        }
      }
      console.log(pos)
      tmp.splice(pos, 1)
      setWahlUpdate(
        {
          ...wahlUpdate,
          wahlen: tmp
        }
      )
      console.log(wahlUpdate)
      setWahlCourseRemove({ id: null })
    }
  }


  function saveVertiefung() {
    console.log(vertiefungUpdate.module)
    axios.post('api/student/addVertiefungen', vertiefungUpdate.module)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  function saveWahl() {
    console.log(wahlUpdate.wahlen)
    axios.post('api/student/addWahlmodule', wahlUpdate.wahlen)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const changePasswort= (e) => {
    e.preventDefault()
    if(passwort===passwort2 && passwort.length>7){
      console.log('success')
      axios.post('api/student/updatePasswort', passwort)
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    
  }

  if (!(auth)) {
    return (
      <Redirect to='/login' />
    )
  }


  return (
    <div className="container">
      <h1>
        Einstellungen
      </h1>
      <br></br>
      <div class="row">

      </div>
      <br>
      </br>
      <div class="">


        {/* ---------------------------------------------- */}
        <div class="row">
          <div class="col" >
            <div class=" ">
              <form onSubmit={addModul}>
                <label>
                  Bitte 4 Vertiefungen hinzufügen
                  <div class="width ">
                    <select class="custom-select" id="inputGroupSelect04" value={courseAdd} onChange={e => setCourseAdd(e.target.value)}>
                      <option value='0' > Vertiefungen hinzufügen  </option>
                      {courses.map((modul) => {
                        if (!(vertiefungUpdate.module.includes(modul.id))) {
                          if (vertiefungUpdate.module.length < 4) {
                            return (
                              <option value={modul.id} >{modul.name}</option>
                            )
                          }
                          else {
                            return (
                              <option disabled value={modul.id} >{modul.name}</option>
                            )
                          }
                        }
                      })}
                    </select>
                  </div>
                </label>
                <div class="row container">
                  <div class="width">
                    <button class="btn btn-outline-success width" type="submit button" value="hinzufügen"> Hinzufügen</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
          {/* Liste der Lehrenden */}

          {/* Inputfeld Titel */}

          <div class="col">
            <form onSubmit={removeModul}>
              <label>
                Vertiefung entfernen
                <div class="">
                  <div class="width ">
                    <select class="custom-select d-flex " id="inputGroupSelect04" value={courseRemove} onChange={e => setCourseRemove(e.target.value)}>
                      <option value='0' >Vertiefung entfernen  </option>
                      {vertiefungUpdate.module.map((modulID) => {
                        var m
                        courses.map((course) => {
                          if (course.id === modulID) { m = course }
                        })
                        return (
                          <option value={m.id} >{m.name}</option>
                        )
                      }
                      )}
                    </select>
                  </div>
                </div>
              </label>
              <div class="row container ">
                <div class="">
                  <button class="btn btn-outline-danger width" type="button submit" value="enfernen"> Entfernen</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <button type="submit" className="top bottom btn btn-primary btn-block buttonstyle text-center" onClick={saveVertiefung} >
          Submit
        </button>





        <hr class="linie"></hr>
        <div class="row">
          <div class="col" >
            <div class=" ">
              <form onSubmit={addWahlModul}>
                <label>
                  Bitte 2 Wahlfächer hinzufügen
                  <div class="width ">
                    <select class="custom-select" id="inputGroupSelect04" value={wahlCourseAdd} onChange={e => setWahlCourseAdd(e.target.value)}>
                      <option value='0' > Wahlmodul hinzufügen  </option>
                      {wahlCourses.map((wahl) => {
                        if (!(wahlUpdate.wahlen.includes(wahl.id))) {
                          if (wahlUpdate.wahlen.length < 2) {
                            return (<option value={wahl.id}>{wahl.name} </option>
                            )
                          }
                          else {
                            return (
                              <option disabled value={wahl.id} >{wahl.name}</option>
                            )
                          }
                        }
                      })}
                    </select>
                  </div>
                </label>
                <div class="row container">
                  <div class="width">
                    <button class="btn btn-outline-success width" type="submit button" value="hinzufügen"> Hinzufügen</button>
                  </div>
                </div>

              </form>
            </div>
          </div>
          {/* Liste der Lehrenden */}

          {/* Inputfeld Titel */}

          <div class="col">
            <form onSubmit={removeWahlModul}>
              <label>
                Wahlfach entfernen
                <div class="">
                  <div class="width ">
                    <select class="custom-select d-flex " id="inputGroupSelect04" value={wahlCourseRemove} onChange={e => setWahlCourseRemove(e.target.value)}>
                      <option value='0' >Wahlmodul entfernen  </option>
                      {wahlUpdate.wahlen.map((modulID) => {
                        var m
                        wahlCourses.map((wahlCourse) => {
                          if (wahlCourse.id === modulID) { m = wahlCourse }
                        })
                        return (
                          <option value={m.id} >{m.name}</option>
                        )

                      }
                      )}
                    </select>
                  </div>
                </div>
              </label>
              <div class="row container ">
                <div class="">
                  <button class="btn btn-outline-danger width" type="button submit" value="enfernen"> Entfernen</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col top">
        <div class="row">



        </div>
      </div>
      <button type="submit" className="top bottom btn btn-primary btn-block buttonstyle text-center" onClick={saveWahl} >
        Submit
      </button>

      <hr class="linie"></hr>
      <div >
        <h3>
          Password ändern
        </h3>
        <Form onSubmit={changePasswort} >
          {/* <div className="formGroup">
            <label>
              Old Password
            </label>
            <input type="password" className="form-control" placeholder="Password"
            />
          </div> */}
          <div className="formGroup">
            <label>
              Neues Passwort (mind. 8 Zeichen lang)
            </label>
            <input type="password" className="form-control" value={passwort} placeholder="New Password" onChange={e =>{setPasswort(e.target.value)}}/>
          </div>
          <div className="formGroup">
            <label>
              Neues Passwort bestätigen
            </label>
            <input type="password" className="form-control" value={passwort2} placeholder="New Password confirm" onChange={e =>{setPasswort2(e.target.value)}}/>
          </div>
          <button  type='submit' className="top bottom btn btn-primary btn-block buttonstyle text-center" >
            Submit
          </button>
        </Form>
      </div>
    </div>

  );
}
export default AppEinstellungen;









