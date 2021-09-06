import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { row, col, Button, Form } from 'react-bootstrap';
import './AppEinstellungen.css';
import axios from 'axios';

function AppEinstellungen({ prof, course }) {

  const defaultVertiefung = { module: [] }
  const [vertiefungUpdate, setVertiefungUpdate] = useState(defaultVertiefung)
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

  //Vertiefunspakete/namen
  //Hier GET- Request von der API und und Vertiefungen abrufen.
  const [courses, setCourses] = useState([]);

  useEffect(()=> {
    axios.get('/api/vertiefung')
    .then(res => {
      setCourses(res.data)
      console.log(courses)
    })
    .catch(err => {
      console.log(err)
    })
  },[])
 

  // const [courses, setCourses] = useState([
  //   { id: 1, Vertiefungsname: 'Kameratechnik' },
  //   { id: 2, Vertiefungsname: 'Produktion audiovisueller Medien' },
  //   { id: 3, Vertiefungsname: 'Web-Engineering' },
  //   { id: 4, Vertiefungsname: 'Interaktive Systeme' },
  //   { id: 5, Vertiefungsname: 'Mediendesign' },
  //   { id: 6, Vertiefungsname: 'Mediendistribution' },
  //   { id: 7, Vertiefungsname: 'Bildverarbeitung' },
  // ])

  const [courseAdd, setCourseAdd] = useState({ id: null })
  const [courseRemove, setCourseRemove] = useState({ id: null })
  //Default wird erstellt
  const defaultCourse = { id: null, name: '' };
  const [coursesUpdate, setCourseUpdate] = useState(defaultCourse)

  const addModul = (evt) => {
    if ((!(vertiefungUpdate.id === 0)) && (!(courseAdd.id === null))&& (!(courseAdd.id===0))) {
      evt.preventDefault();
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


  //--------------------------------------------------

  // const defaultWahl = { module: [0] }
  // const [wahlUpdate, setWahlUpdate] = useState(defaultWahl)
  // function handleClick(prof) {
  //   //preventDefault();
  //   setWahlUpdate(prof)
  //   console.log(prof);
  //   console.log(wahlUpdate)
  // }

  // // Für jeden Bereich wird eine onTodoChange- Funktion angelegt, 
  // // damit sich die Eingabedaten nicht gegenseitig überschreiben.
  // function onTodoChangeModule(value) {
  //   setWahlUpdate({
  //     ...wahlUpdate,
  //     [module]: value,
  //   });
  // }
  // //Vertiefunspakete/namen
  // const [courses, setCourses] = useState([
  //   { id: 0, Vertiefungsname: 'null' },
  //   { id: 1, Vertiefungsname: 'Kameratechnik' },
  //   { id: 2, Vertiefungsname: 'Produktion audiovisueller Medien' },
  //   { id: 3, Vertiefungsname: 'Web-Engineering' },
  //   { id: 4, Vertiefungsname: 'Interaktive Systeme' },
  //   { id: 5, Vertiefungsname: 'Mediendesign' },
  //   { id: 6, Vertiefungsname: 'Mediendistribution' },
  //   { id: 7,  : 'Bildverarbeitung' },
  // ])

  // const [courseAdd, setCourseAdd] = useState({ id: null })
  // const [courseRemove, setCourseRemove] = useState({ id: null })
  // //Default wird erstellt
  // const defaultCourse = { id: null, Vertiefungsname: '' };
  // const [coursesUpdate, setCourseUpdate] = useState(defaultCourse)

  // const addModul = (evt) => {
  //   evt.preventDefault();
  //   var tmp = wahlUpdate.module
  //   tmp.push(parseInt(courseAdd))
  //   setWahlUpdate(
  //     {
  //       ...wahlUpdate,
  //       module: tmp
  //     }
  //   )
  //   console.log(wahlUpdate)
  //   setCourseAdd({ id: null })
  // }
  // const removeModul = (evt) => {
  //   evt.preventDefault()
  //   var tmp = wahlUpdate.module
  //   var pos
  //   for (var i = 0; i < tmp.length; i++) {
  //     if (tmp[i] === parseInt(courseRemove)) {
  //       pos = i
  //     }
  //   }
  //   console.log(pos)
  //   tmp.splice(pos, 1)
  //   setWahlUpdate(
  //     {
  //       ...wahlUpdate,
  //       module: tmp
  //     }
  //   )
  //   console.log(wahlUpdate)
  //   setCourseRemove({ id: null })
  // }


  return (
    <div className="container">
      <h1>
        Einstellungen
      </h1>
      <br></br>
      <div class="row">
        <div class="col-auto mr-auto">Bitte die Vertiefungsmodule auswählen!</div>
      </div>
      <br>
      </br>
      <div class="">
        <div class="row">
          <div class="col" >
            <div class=" ">
              <form onSubmit={addModul}>
                <label>
                  Bitte 4 Vertiefungen hinzfügen
                  <div class="width ">
                    <select class="custom-select" id="inputGroupSelect04" value={courseAdd} onChange={e => setCourseAdd(e.target.value)}>
                      <option value= {0} > Vertiefungen hinzufügen  </option> 
                      {courses.map((modul) => {
                        if (!(vertiefungUpdate.module.includes(modul.id))) {
                          return (
                            <option value={modul.id} >{modul.name}</option>
                          )
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
                Modul entfernen
                <div class="">
                  <div class="width ">
                    <select class="custom-select d-flex " id="inputGroupSelect04" value={courseRemove} onChange={e => setCourseRemove(e.target.value)}>
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
                <div class= "">
                <button class="btn btn-outline-danger width" type="button submit" value="enfernen"> Entfernen</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col top">
        <div class="row">


          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text lenge" id="inputGroup-sizing-sm">Vertiefungen</span>
            </div>
            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={vertiefungUpdate.module} onChange={e => onTodoChangeModule(e.target.value)}></input>
          </div>
        </div>
      </div>
      {/* <div class="row justify-content-center  ">
        <div class= "">
        <button type="button" class="btn btn-dark btn-lg btn-block">
          Bestätigen
        </button>
        </div>
       
      </div> */}

      {/* 
      <div class="row">
        <div class="col" >
          <div class="input-group ">
            <form onSubmit={addModul}>
              <label>
                Modul hinzufügen
                <select class="custom-select" id="inputGroupSelect04" value={courseAdd} onChange={e => setCourseAdd(e.target.value)}>
                  {courses.map((modul) => {
                    if (!(profUpdate.module.includes(modul.id))) {
                      return (
                        <option value={modul.id} >{modul.Vertiefungsname}</option>
                      )
                    }
                  })}
                </select>
              </label>
              <div class="row container justify-content-center">
                <button class= "btn btn-outline-success" type="submit button" value="hinzufügen"> Hinzufügen</button>
              </div>

            </form>
          </div>
        </div>
        {/* Liste der Lehrenden */}

      {/* Inputfeld Titel */}
      {/* 
        <div class="input-group col justify-content-end width ">
          <form onSubmit={removeModul}>
            <label>
              Modul entfernen
              <select class="custom-select "  id="inputGroupSelect04" value={courseRemove} onChange={e => setCourseRemove(e.target.value)}>

                {profUpdate.module.map((modulID) => {
                  var m
                  courses.map((course) => {
                    if (course.id === modulID) { m = course }
                  })
                  return (
                    <option value={m.id} >{m.Vertiefungsname}</option>
                  )
                }
                )}
              </select>
            </label>
            <div class="row container justify-content-center">
              <button class= "btn btn-outline-danger" type="button submit" value="enfernen"> Entfernen</button>
            </div>
          </form>
        </div>
      </div>
      <div className="col top">
        <div class="row">


          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text lenge" id="inputGroup-sizing-sm">Vertiefungen</span>
            </div>
            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={profUpdate.module} onChange={e => onTodoChangeModule(e.target.value)}></input>
          </div>
        </div>
      </div>
      <div class="row justify-content-center  ">
        <div class= "">
        <button type="button" class="btn btn-dark btn-lg btn-block">
          Bestätigen
        </button>
        </div>
       
      </div> */}

      {/* ------------------- */}
      <hr class="linie"></hr>
      <div >
        <h3>
          Password ändern
        </h3>
        <Form >
          <div className="formGroup">
            <label>
              Old Password
            </label>
            <input type="password" className="form-control" placeholder="Password"
            />
          </div>
          <div className="formGroup">
            <label>
              New Password
            </label>
            <input type="password" className="form-control" placeholder="New Password"
            />
          </div>
          <div className="formGroup">
            <label>
              New Password confirm
            </label>
            <input type="password" className="form-control" placeholder="New Password confirm"
            />
          </div>
          <button type="submit" className="top bottom btn btn-primary btn-block buttonstyle text-center" >
            Submit
          </button>
        </Form>
      </div>
    </div>

  );
}
export default AppEinstellungen;