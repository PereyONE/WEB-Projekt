import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { row, col, Button, Form } from 'react-bootstrap';
import './AppEinstellungen.css';
import axios from 'axios'

function AppEinstellungen({ prof, course, profWahl, wahlCourse }) {

  const [user, setUser] = useState()

  const [courses, setCourses] = useState([]);

  const defaultVertiefung = { module: [] }
  const [vertiefungUpdate, setVertiefungUpdate] = useState(defaultVertiefung)

  const [courseAdd, setCourseAdd] = useState({ id: null })
  const [courseRemove, setCourseRemove] = useState({ id: null })

  const defaultCourse = { id: null, name: '' };
  const [coursesUpdate, setCourseUpdate] = useState(defaultCourse)


  // const [wahlCourses, setWahlCourses] = useState([
  //   { id: 0, Vertiefungsname: 'null' },
  //   { id: 1, Vertiefungsname: 'Kameratechnik' },
  //   { id: 2, Vertiefungsname: 'Produktion audiovisueller Medien' },
  //   { id: 3, Vertiefungsname: 'Web-Engineering' },
  //   { id: 4, Vertiefungsname: 'Interaktive Systeme' },
  //   { id: 5, Vertiefungsname: 'Mediendesign' },
  //   { id: 6, Vertiefungsname: 'Mediendistribution' },
  //   { id: 7, Vertiefungsname: 'Bildverarbeitung' },
  // ])

  const [wahlCourseAdd, setWahlCourseAdd] = useState({ id: null })
  const [wahlCourseRemove, setWahlCourseRemove] = useState({ id: null })
  //Default wird erstellt
  const defaultWahlCourse = { id: null, name: '' };
  const [wahlCoursesUpdate, setWahlCourseUpdate] = useState(defaultWahlCourse)

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


  useEffect(() => {
    axios.get('/api/vertiefung')
      .then(res => {
        setCourses(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])




  const [wahlCourses, setWahlCourses] = useState([]);
  const [wahlHelper, setWahlHelper] = useState([])
  useEffect(() => {
    axios.get('api/modules')
      .then(res => {
        setWahlHelper(res.data)
      })
      .then(
        

      )
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    console.log(wahlHelper)
    wahlHelper.map((wahls) => {
      if (!(wahls.moduleTyp === "Pflichtmodule")) {
        setWahlCourses([...wahlCourses, wahls])
      }
    }
    )

  }, [])








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
    if ((!(vertiefungUpdate.id === 0)) && (!(courseAdd.id === null)) && (!(courseAdd.id === 0))) {
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
    console.log(wahlCourses)

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
    if ((!(wahlUpdate.id === 0)) && (!(wahlCourseAdd.id === null)) && (!(wahlCourseAdd.id === 0))) {
      evt.preventDefault();
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


  function saveModule() {
    const update = { 'vertiefungen': vertiefungUpdate.module, 'wahlId': [] }
    console.log(update)
    axios.post('api/student', update)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
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
                      <option value={0} > Vertiefungen hinzufügen  </option>
                      {courses.map((modul) => {
                        if (!(vertiefungUpdate.module.includes(modul.id))) {
                          if (vertiefungUpdate.module.length < 2) {
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

        <div class="input-group input-group-sm mb-3 top">
          <div class="input-group-prepend">
            <span class="input-group-text lenge" id="inputGroup-sizing-sm">Vertiefungen</span>
          </div>
          <input type="text" class="form-control" disabled aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={e => onTodoChangeModule(e.target.value)}></input>
        </div>



        <hr class="linie"></hr>
        <div class="row">
          <div class="col" >
            <div class=" ">
              <form onSubmit={addWahlModul}>
                <label>
                  Bitte 2 Wahlfächer hinzufügen
                  <div class="width ">
                    <select class="custom-select" id="inputGroupSelect04" value={wahlCourseAdd} onChange={e => setWahlCourseAdd(e.target.value)}>
                      <option value={0} > Vertiefungen hinzufügen  </option>
                      {courses.map((wahl) => {
                        if (!(wahlUpdate.wahlen.includes(wahl.id))) {
                          return (
                            <option value={wahl.id} >{wahl.name}</option>
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
            <form onSubmit={removeWahlModul}>
              <label>
                Wahlfach entfernen
                <div class="">
                  <div class="width ">
                    <select class="custom-select d-flex " id="inputGroupSelect04" value={wahlCourseRemove} onChange={e => setWahlCourseRemove(e.target.value)}>
                      {wahlUpdate.wahlen.map((modulID) => {
                        var m
                        courses.map((wahlCourse) => {
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


          <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text lenge" id="inputGroup-sizing-sm">Vertiefungen</span>
            </div>
            <input type="text" class="form-control" disabled aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={wahlUpdate.wahlen} ></input>
          </div>
        </div>
      </div>
      <button type="submit" className="top bottom btn btn-primary btn-block buttonstyle text-center" onClick={saveModule} >
        Submit
      </button>

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









