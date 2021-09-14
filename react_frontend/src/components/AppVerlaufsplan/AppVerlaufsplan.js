import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/dist/v4";
import { ButtonGroup, Button } from 'react-bootstrap'
import './Verlaufsplan.css'
import CheckBox from "./CheckBox";
import { Redirect } from "react-router";
import axios from 'axios';



function AppVerlaufsplan({ auth }) {


    //State für Anzahl erstellter
    const [semesterZahl, setSemesterZahl] = useState()

    //State zur Verwaltung der verschiedenen Fächer
    const [itemsFromBackend, setItemsFromBackend] = useState([]);

    //Datenfetching und Zuweisung
    useEffect(() => {
        axios.get('/api/verlaufsplan')
            .then(res => {
                var module = res.data.Verlaufsplan
                module.map((modul) => {
                    setItemsFromBackend(lol => [
                        ...lol,
                        {
                            id: uuid(),
                            realId: modul.id,
                            svpId: modul.svpModul.id,
                            position: modul.position,
                            name: modul.svpModul.name,
                            typ: modul.svpModul.typ,
                            semester7: modul.svpModul.semester7,
                            semester12: modul.svpModul.semester12,
                            ects: modul.svpModul.ects,
                            art: modul.svpModul.art,
                            verfuegbarkeit: modul.svpModul.verfuegbarkeit
                        }]);
                })

                setSemesterZahl(res.data.SvpSemester)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])






    const itemsFromBackend2 = [
        { id: uuid(), name: "Mathe 1", typ: "pflicht", semester7: 1, semester12: 1, ects: 10, art: 'modul', verfuegbarkeit: 'ws', position: 0 },
        { id: uuid(), name: "Photo 1", typ: "pflicht", semester7: 1, semester12: 3, ects: 5, art: 'modul', verfuegbarkeit: 'ws', position: 0 },
        { id: uuid(), name: "Info 1", typ: "pflicht", semester7: 1, semester12: 3, ects: 6, art: 'modul', verfuegbarkeit: 'ws', position: 0 },
        { id: uuid(), name: "Elektronik", typ: "pflicht", semester7: 1, semester12: 1, ects: 5, art: 'modul', verfuegbarkeit: 'ws', position: 0 },
        { id: uuid(), name: "SMM", typ: "pflicht", semester7: 1, semester12: 1, ects: 1, art: 'modul', verfuegbarkeit: 'ws', position: 0 },
        { id: uuid(), name: "AVW", typ: "pflicht", semester7: 1, semester12: 1, ects: 3, art: 'modul', verfuegbarkeit: 'ws', position: 0 },

        { id: uuid(), name: "Mathe 1", typ: "pflicht", semester7: 1, semester12: 1, ects: 10, art: 'ulp', verfuegbarkeit: 'ws', position: 0 },
        { id: uuid(), name: "Photo 1", typ: "pflicht", semester7: 1, semester12: 3, ects: 5, art: 'ulp', verfuegbarkeit: 'ws', position: 0 },
        { id: uuid(), name: "Info 1", typ: "pflicht", semester7: 1, semester12: 3, ects: 6, art: 'ulp', verfuegbarkeit: 'ws', position: 0 },
        { id: uuid(), name: "Elektronik", typ: "pflicht", semester7: 1, semester12: 1, ects: 5, art: 'ulp', verfuegbarkeit: 'ws', position: 0 },
        { id: uuid(), name: "SMM", typ: "pflicht", semester7: 1, semester12: 1, ects: 1, art: 'ulp', verfuegbarkeit: 'ws', position: 0 },
        { id: uuid(), name: "AVW", typ: "pflicht", semester7: 1, semester12: 1, ects: 3, art: 'ulp', verfuegbarkeit: 'ws', position: 0 },

        { id: uuid(), name: "Mathe 1", typ: "pflicht", semester7: 1, semester12: 1, ects: 10, art: 'pf', position: 0 },
        { id: uuid(), name: "Photo 1", typ: "pflicht", semester7: 1, semester12: 3, ects: 5, art: 'pf', position: 0 },
        { id: uuid(), name: "Info 1", typ: "pflicht", semester7: 1, semester12: 3, ects: 6, art: 'pf', position: 0 },
        { id: uuid(), name: "Elektronik", typ: "pflicht", semester7: 1, semester12: 1, ects: 5, art: 'pf', position: 0 },
        { id: uuid(), name: "SMM", typ: "pflicht", semester7: 1, semester12: 1, ects: 1, art: 'pf', position: 0 },
        { id: uuid(), name: "AVW", typ: "pflicht", semester7: 1, semester12: 1, ects: 3, art: 'pf', position: 0 },

        { id: uuid(), name: "Mathe 2", typ: "pflicht", semester7: 2, semester12: 2, art: 'modul', verfuegbarkeit: 'ss', position: 0 },
        { id: uuid(), name: "Photo 2", typ: "pflicht", semester7: 2, semester12: 4, art: 'modul', position: 0 },
        { id: uuid(), name: "Info 2", typ: "pflicht", semester7: 2, semester12: 4, art: 'modul', position: 0 },
        { id: uuid(), name: "EM 1", typ: "pflicht", semester7: 2, semester12: 2, art: 'modul', position: 0 },
        { id: uuid(), name: "GMG 1", typ: "pflicht", semester7: 2, semester12: 4, art: 'modul', position: 0 },

        { id: uuid(), name: "Siga", typ: "pflicht", semester7: 3, semester12: 3, art: 'modul', position: 0 },
        { id: uuid(), name: "Photo 3", typ: "pflicht", semester7: 3, semester12: 5, art: 'modul', position: 0 },
        { id: uuid(), name: "Info 3", typ: "pflicht", semester7: 3, semester12: 5, art: 'modul', position: 0 },
        { id: uuid(), name: "EM 2", typ: "pflicht", semester7: 3, semester12: 3, art: 'modul', position: 0 },
        { id: uuid(), name: "GMG 2", typ: "pflicht", semester7: 3, semester12: 5, art: 'modul', position: 0 },

        { id: uuid(), name: "VPA 1", typ: "vertiefung", semester7: 4, semester12: 6, art: 'modul', position: 0 },
        { id: uuid(), name: "VPB 1", typ: "vertiefung", semester7: 4, semester12: 8, art: 'modul', position: 0 },
        { id: uuid(), name: "VPC 1", typ: "vertiefung", semester7: 4, semester12: 8, art: 'modul', position: 0 },
        { id: uuid(), name: "VPD 1", typ: "vertiefung", semester7: 4, semester12: 6, art: 'modul', position: 0 },
        { id: uuid(), name: "WPB 1", typ: "wahl", semester7: 4, semester12: 10, art: 'modul', position: 0 },

        { id: uuid(), name: "VPA 2", typ: "vertiefung", semester7: 5, semester12: 7, art: 'modul', position: 0 },
        { id: uuid(), name: "VPB 2", typ: "vertiefung", semester7: 5, semester12: 9, art: 'modul', position: 0 },
        { id: uuid(), name: "VPC 2", typ: "vertiefung", semester7: 5, semester12: 9, art: 'modul', position: 0 },
        { id: uuid(), name: "VPD 2", typ: "vertiefung", semester7: 5, semester12: 7, art: 'modul', position: 0 },
        { id: uuid(), name: "WPB 2", typ: "wahl", semester7: 5, semester12: 11, art: 'modul', position: 0 },
        { id: uuid(), name: "BWR", typ: "pflicht", semester7: 5, semester12: 7, art: 'modul', position: 0 },
        { id: uuid(), name: "REC", typ: "pflicht", semester7: 5, semester12: 9, art: 'modul', position: 0 },

        { id: uuid(), name: "VPA 3", typ: "vertiefung", semester7: 6, semester12: 8, art: 'modul', position: 0 },
        { id: uuid(), name: "VPB 3", typ: "vertiefung", semester7: 6, semester12: 10, art: 'modul', position: 0 },
        { id: uuid(), name: "VPC 3", typ: "vertiefung", semester7: 6, semester12: 10, art: 'modul', position: 0 },
        { id: uuid(), name: "VPD 3", typ: "vertiefung", semester7: 6, semester12: 8, art: 'modul', position: 0 },

        { id: uuid(), name: "Praktikum", typ: "gold", semester7: 7, semester12: 12, art: 'modul', position: 0 },
        { id: uuid(), name: "Bachelorarbeit", typ: "gold", semester7: 7, semester12: 11, art: 'modul', position: 0 },
        { id: uuid(), name: "Kolloquium", typ: "gold", semester7: 7, semester12: 12, art: 'modul', position: 0 },


    ];



    //Funktion um alle Module für das jeweils angegebene Semester anhand ihrer Position 
    const modulePosition = (position) => {
        const module = []
        for (let index = 0; index < itemsFromBackend.length; index++) {
            if (itemsFromBackend[index].position === position) {
                module.push(itemsFromBackend[index])
            }
        }
        if (position === 0) {
            module.sort(function (a, b) {
                return b.semester7 - a.semester7;
            })
        }
        
        return module;
    }

    //Funktion um Spalten korrekt zu befüllen
    const columnsFromBackend = () => {
        var columns = {
            0: {
                name: "Semester 0",
                items: modulePosition(0)
            },
            1: {
                name: "Semester 1",
                items: modulePosition(1)
            },
            2: {
                name: "Semester 2",
                items: modulePosition(2)
            },
            3: {
                name: "Semester 3",
                items: modulePosition(3)
            },
            4: {
                name: "Semester 4",
                items: modulePosition(4)
            },
            5: {
                name: "Semester 5",
                items: modulePosition(5)
            },
            6: {
                name: "Semester 6",
                items: modulePosition(6)
            },
            7: {
                name: "Semester 7",
                items: modulePosition(7)
            }
        }

        if (semesterZahl > 7) {
            for (let index = 8; index <= semesterZahl; index++) {
                columns = {
                    ...columns,
                    [index]: {
                        name: "Semester " + index,
                        items: modulePosition(index)
                    }

                }

            }

        }
        return columns;
    }

    //State für erstellte Semester, essenziell für Drag&Drop
    const [columns, setColumns] = useState(columnsFromBackend());

    //State für Tabauswahl (Modul, ULP, Prüfung)
    const [anzeige, setAnzeige] = useState(0)

    //States für Checkbox-Button Auswahl
    const [checkedP, setCheckedP] = useState(true);
    const [checkedV, setCheckedV] = useState(true);
    const [checkedW, setCheckedW] = useState(true);



    //Funktion um alle Module für das jeweils angegebene Semester zu sammeln (Regelstudienzeit 7 Semester)
    const moduleSemester = (semester) => {
        const module = []
        for (let index = 0; index < itemsFromBackend.length; index++) {
            if (itemsFromBackend[index].semester7 === semester && itemsFromBackend[index].art === 'modul') {
                module.push(itemsFromBackend[index])
            }
        }
        setSemesterZahl(7);
        module.sort(function (a, b) {
            return b.ects - a.ects;
        })
        return module;
    }

    //Funktion um alle Module für das jeweils angegebene Semester zu sammeln (Regelstudienzeit 12 Semester)
    const moduleSemesterZ = (semester) => {
        const module = []
        for (let index = 0; index < itemsFromBackend.length; index++) {
            if (itemsFromBackend[index].semester12 === semester && itemsFromBackend[index].art === 'modul') {
                module.push(itemsFromBackend[index])
            }
        }
        setSemesterZahl(12)
        module.sort(function (a, b) {
            return b.ects - a.ects;
        })
        return module;
    }


    const moduleULPPF = () => {
        const module = []
        for (let index = 0; index < itemsFromBackend.length; index++) {
            if (itemsFromBackend[index].art !== 'modul') {
                module.push(itemsFromBackend[index])
            }
        }
        module.sort(function (a, b) {
            return b.ects - a.ects;
        })

        return module;
    }





    //Zusatzfunktion für Logikabfrage
    function isOdd(num) { return num % 2; }




    //Hauptfunktion für Drag&Drop-Logik
    const onDragEnd = (result, columns, setColumns) => {

        //Falls Drag-Objekt nicht auf eine Fläche außerhalb des Drag&Drop-Systems gezogen wird
        if (!result.destination) {

            alert("Module können nur in die grauen Semesterspalten gezogen werden");

            return;
        }

        //Falls Drag-Objekt auf eine gültige Fläche gezogen wird
        const { source, destination } = result;
        //Abfrage ob Drag-Objekt nicht auf seine ursprüngliche Fläche gezogen wurde
        if (source.droppableId !== destination.droppableId) {

            //Falls Drag-Objekt auf Mülleimer gezogen wird
            if (result.destination.droppableId === 'delete') {
                if (source.droppableId == 0) { return }
                const sourceColumn = columns[source.droppableId];
                const destColumn = columns[0];

                //Um das gezogene Objekt herauszufinden(nötig für folgende Logikabfrage)
                var dragItem
                {
                    sourceColumn.items.map((item, index) => {
                        if (item.id === result.draggableId) {
                            dragItem = item;
                        }
                    })
                }

                //Das verschobene Modul soll sich seine neue position merken
                dragItem.position = 0

                const sourceItems = [...sourceColumn.items];
                const destItems = [...destColumn.items];
                const [removed] = sourceItems.splice(source.index, 1);
                destItems.splice(destination.index, 0, removed);
                setColumns({
                    ...columns,
                    [source.droppableId]: {
                        ...sourceColumn,
                        items: sourceItems
                    },
                    0: {
                        ...destColumn,
                        items: destItems
                    }
                });
            }

            //Falls Drag-Objekt auf neue Spalte gezogen wird
            else {
                const sourceColumn = columns[source.droppableId];
                const destColumn = columns[destination.droppableId];

                //Um das gezogene Objekt herauszufinden(nötig für folgende Logikabfrage)
                var dragItem
                {
                    sourceColumn.items.map((item, index) => {
                        if (item.id === result.draggableId) {
                            dragItem = item;
                        }
                    })
                }



                //Logikabfrage ob dieses Modul in dem jeweiligen Semester angeboten wird
                if (!(destination.droppableId == 0)) {
                    if ((isOdd(destination.droppableId) && dragItem.verfuegbarkeit === 'ss') || (!isOdd(destination.droppableId) && dragItem.verfuegbarkeit === 'ws')) {
                        alert(dragItem.name + " wird nur im " + dragItem.verfuegbarkeit + " angeboten. Ziehe es in eine andere Semesterspalte.");
                        return
                    }
                }

                //Logikabfrage ob die ULP(falls vorhanden) vor dem jeweiligen Modul absolviert wird
                if (dragItem.art === 'ulp') {
                    for (var i = parseInt(destination.droppableId) - 1; i > 0; i--) {
                        for (var j = 0; j < columns[i].items.length; j++)
                            if ((columns[i].items[j].name === dragItem.name) && (!(columns[i].items[j] === dragItem))) {
                                alert('Eine ULP muss VOR einer Prüfung absolviert werden. Kontrolliere deinen Plan. Gefunden bei Semester ' + i)
                                return;
                            }

                    }
                }

                if (!(dragItem.art === 'ulp')) {
                    for (var i = parseInt(destination.droppableId) + 1; i < semesterZahl + 1; i++) {
                        for (var j = 0; j < columns[i].items.length; j++)
                            if ((columns[i].items[j].name === dragItem.name) && (!(columns[i].items[j] === dragItem)) && ((!destination.droppableId === 0))) {
                                alert('Eine Prüfung darf nur NACH bestandener ULP absolviert werden. Kontrolliere deinen Plan. Gefunden bei Semester ' + i)
                                return;
                            }

                    }
                }




                //Das verschobene Modul soll sich seine neue position merken

                dragItem.position = parseInt(destination.droppableId)

                const sourceItems = [...sourceColumn.items];
                const destItems = [...destColumn.items];
                const [removed] = sourceItems.splice(source.index, 1);
                destItems.splice(destination.index, 0, removed);
                setColumns({
                    ...columns,
                    [source.droppableId]: {
                        ...sourceColumn,
                        items: sourceItems
                    },
                    [destination.droppableId]: {
                        ...destColumn,
                        items: destItems
                    }
                });
            }
        }

        //Falls Drag-Objekt innerhalb seiner ursprünglichen Spalte verschoben wurde
        else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };



    //Funktionen für Checkbox-Button Auswahl
    const handleChangeP = () => {
        setCheckedP(!checkedP);
    };

    const handleChangeV = () => {
        setCheckedV(!checkedV);
    };

    const handleChangeW = () => {
        setCheckedW(!checkedW);
    };



    //Funktion für Tabauswahl
    const setModul = e => {
        e.preventDefault();
        setAnzeige(0)
        return;
    }
    //Funktion für Tabauswahl
    const setULP = e => {
        e.preventDefault();
        setAnzeige(1)
        return;
    }
    //Funktion für Tabauswahl
    const setPF = e => {
        e.preventDefault();
        setAnzeige(2)
        return;

    }

    //Funktion um eine zusätzliche Semesterspalte zu erstellen
    const addSemester = e => {
        e.preventDefault();
        setColumns({
            ...columns,
            [Object.entries(columns).length]:
            {
                name: "Semester " + Object.entries(columns).length,
                items: []
            }
        });
        setSemesterZahl(semesterZahl + 1)
        return;

    }

    //Funktion um eine erstellte Semesterspalte zu löschen
    const deleteSemester = e => {

        if (Object.entries(columns).length > 8) {
            const tmp = columns;
            const index = Object.entries(columns).length - 1;
            const destColumn = tmp[0];
            const sourceItems = [...tmp[index].items];
            const destItems = [...tmp[0].items];
            const removed = sourceItems.splice(0, 34);
            delete tmp[index];

            for (let i = 0; i < removed.length; i++) {
                destItems.splice(destItems.length, 0, removed[i]);

            }

            setColumns({
                ...tmp,
                0: {
                    ...destColumn,
                    items: destItems
                }
            });
            setSemesterZahl(semesterZahl - 1)
            return;
        }
    }

    //Funktion um Semester spalten auf letzten gespeicherten Stand zurück zu setzen
    const resetSemester = e => {
        e.preventDefault();
        if (window.confirm("Bist du dir sicher, dass du deinen Studienverlaufsplan zurücksetzen möchtest?")) {
            itemsFromBackend.map((item, index) => {
                item.position = 0;

            })
            setSemesterZahl(7)
            setColumns(columnsFromBackend());
        } else {

        }

    }

    const saveSemester = e => {
        e.preventDefault();
        if (window.confirm("Bist du dir sicher, dass du deinen Studienverlaufsplan speichern möchtest?")) {
            var newItems = []
            itemsFromBackend.map((item) => {
                var newItem = {
                    id: item.realId, position: item.position, svpModul: {
                        id: item.svpId,
                        name: item.name,
                        typ: item.typ,
                        semester7: item.semester7,
                        semester12: item.semester12,
                        ects: item.ects,
                        art: item.art,
                        verfuegbarkeit: item.verfuegbarkeit
                    }

                }
                newItems.push(newItem)

            })

            var payload = { SvpSemester: 7, Verlaufsplan: newItems }

            axios.post('/api/verlaufsplan', newItems)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })

            var semesterObject = { svpSemester: semesterZahl }

            axios.post('api/student/updateSemester', semesterObject)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
            console.log('abgebrochen')
        }


    }



    //Funktion um SVP nach 7 Semester Regelstudienzeit zu befüllen
    const siebenSemester = e => {
        if (window.confirm("Bist du dir sicher, dass du deinen Studienverlaufsplan verwerfen und den Standardverlaufsplan für 7 Semester einstellen möchtest?")) {

            itemsFromBackend.map((item, index) => {
                if (item.art === 'modul') {
                    item.position = item.semester7;
                }

            })

            setSemesterZahl(7)

            const newColumns = {
                0: {
                    name: "Semester 0",
                    items: moduleULPPF(5)
                },
                1: {
                    name: "Semester 1",
                    items: moduleSemester(1)
                },
                2: {
                    name: "Semester 2",
                    items: moduleSemester(2)
                },
                3: {
                    name: "Semester 3",
                    items: moduleSemester(3)
                },
                4: {
                    name: "Semester 4",
                    items: moduleSemester(4)
                },
                5: {
                    name: "Semester 5",
                    items: moduleSemester(5)
                },
                6: {
                    name: "Semester 6",
                    items: moduleSemester(6)
                },
                7: {
                    name: "Semester 7",
                    items: moduleSemester(7)
                },
            }

            setColumns(newColumns);
        }
        else {
            console.log('abgebrochen')
        }




    }

    //Funktion um SVP nach 12 Semester Regelstudienzeit zu befüllen
    const zwoelfSemester = e => {

        if (window.confirm("Bist du dir sicher, dass du deinen Studienverlaufsplan verwerfen und den Standardverlaufsplan für 12 Semester einstellen möchtest?")) {
            itemsFromBackend.map((item, index) => {
                itemsFromBackend.map((item, index) => {
                    if (item.art === 'modul') {
                        item.position = item.semester12;
                    }

                })

            })

            const newColumns = {
                0: {
                    name: "Semester 0",
                    items: moduleULPPF(1)
                },
                1: {
                    name: "Semester 1",
                    items: moduleSemesterZ(1)
                },
                2: {
                    name: "Semester 2",
                    items: moduleSemesterZ(2)
                },
                3: {
                    name: "Semester 3",
                    items: moduleSemesterZ(3)
                },
                4: {
                    name: "Semester 4",
                    items: moduleSemesterZ(4)
                },
                5: {
                    name: "Semester 5",
                    items: moduleSemesterZ(5)
                },
                6: {
                    name: "Semester 6",
                    items: moduleSemesterZ(6)
                },
                7: {
                    name: "Semester 7",
                    items: moduleSemesterZ(7)
                },
                8: {
                    name: "Semester 8",
                    items: moduleSemesterZ(8)
                },
                9: {
                    name: "Semester 9",
                    items: moduleSemesterZ(9)
                },
                10: {
                    name: "Semester 10",
                    items: moduleSemesterZ(10)
                },
                11: {
                    name: "Semester 11",
                    items: moduleSemesterZ(11)
                },
                12: {
                    name: "Semester 12",
                    items: moduleSemesterZ(12)
                },
            }

            setColumns(newColumns);
        }
        else {
            console.log('abgrebrochen')
        }

    }


    if (!auth) {
        return <Redirect to="/login" />
    }


    return (
        <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}>


            <div style={{ display: 'flex', width: '100ve', justifyContent: 'space-between' }}>

                <h1 style={{ alignSelf: 'flex-start' }}>Studienverlaufsplan</h1>


                <div style={{ alignSelf: 'flex-end', display: 'flex', justifyContent: 'space-around' }}>
                    <Button variant="outline-dark" className="Loeschen" onClick={e => { setColumns(columnsFromBackend()); console.log(columns) }} ><i class="fas fa-play"></i></Button>

                    <Droppable droppableId="delete" key="delete">
                        {(provided, snapshot) => {
                            return (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    <Button variant="outline-dark" className="Loeschen" onClick={resetSemester} > <i class="fas fa-trash-alt"></i></Button>

                                </div>
                            );
                        }}

                    </Droppable>
                    <Button variant="outline-dark" className="Loeschen" onClick={saveSemester} ><i class="far fa-save"></i></Button>
                    <Button variant="outline-dark" className="Loeschen" onClick={siebenSemester}>7</Button>
                    <Button variant="outline-dark" className="Loeschen" onClick={zwoelfSemester}>12</Button>


                </div>
            </div>


            <div className="Dropzone" style={{ display: "flex", height: "100%" }}>




                {Object.entries(columns).map(([columnId, column], index) => {
                    if (index === 0) {
                        return (
                            <div
                                style={{
                                    background: "white",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    position: "sticky",
                                    left: "0px",

                                }}
                                key={columnId}
                            >
                                <h2>Module</h2>
                                <div style={{ margin: 8 }}>

                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="outline-secondary" onClick={setModul}>Modul</Button>
                                        <Button variant="outline-secondary" onClick={setULP} >ULP</Button>
                                        <Button variant="outline-secondary" onClick={setPF}>Klausur</Button>
                                    </ButtonGroup>
                                    <div style={{ display: 'flex' }}>
                                        <CheckBox label="Pflicht" value={checkedP} onChange={handleChangeP} />
                                        <CheckBox label="Vertiefung" value={checkedV} onChange={handleChangeV} />
                                        <CheckBox label="Wahl" value={checkedW} onChange={handleChangeW} />
                                    </div>

                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => {
                                            return (

                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        background: snapshot.isDraggingOver
                                                            ? "lightblue"
                                                            : "white",
                                                        padding: 4,
                                                        width: 250,
                                                        minHeight: 470,
                                                        maxHeight: 470,
                                                        overflowY: 'scroll',
                                                        overflowX: 'hidden'

                                                    }}>

                                                    {column.items.map((item, index) => {
                                                        if (anzeige === 0 && item.art === 'modul' && (checkedP && (item.typ === 'pflicht' || item.typ === 'gold') || checkedV && item.typ === 'vertiefung' || checkedW && item.typ === 'wahl')) {

                                                            return (
                                                                <Draggable
                                                                    key={item.id}
                                                                    draggableId={item.id}
                                                                    index={index}
                                                                >
                                                                    {(provided, snapshot) => {
                                                                        return (
                                                                            <div
                                                                                className="Drag"
                                                                                id={item.typ}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}



                                                                            >
                                                                                <div>{item.name}</div><div>{item.ects} ECTS</div>

                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Draggable>
                                                            );
                                                        }
                                                        else if (anzeige === 1 && item.art === 'ulp' && (checkedP && (item.typ === 'pflicht' || item.typ === 'gold') || checkedV && item.typ === 'vertiefung' || checkedW && item.typ === 'wahl')) {

                                                            return (
                                                                <Draggable
                                                                    key={item.id}
                                                                    draggableId={item.id}
                                                                    index={index}
                                                                >
                                                                    {(provided, snapshot) => {
                                                                        return (
                                                                            <div
                                                                                className="Drag"
                                                                                id={item.typ}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}



                                                                            >
                                                                                <div>{item.name}</div><div>ULP</div>

                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Draggable>
                                                            );
                                                        }
                                                        else if (anzeige === 2 && item.art === 'pf' && (checkedP && (item.typ === 'pflicht' || item.typ === 'gold') || checkedV && item.typ === 'vertiefung' || checkedW && item.typ === 'wahl')) {

                                                            return (
                                                                <Draggable
                                                                    key={item.id}
                                                                    draggableId={item.id}
                                                                    index={index}
                                                                >
                                                                    {(provided, snapshot) => {
                                                                        return (
                                                                            <div
                                                                                className="Drag"
                                                                                id={item.typ}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}



                                                                            >
                                                                                <div>{item.name}</div><div>PF</div>

                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Draggable>
                                                            );
                                                        }



                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                            );
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                        );

                    }
                    else {
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                                key={columnId}
                            >

                                <h2>{column.name}</h2>

                                <div style={{ margin: 8 }}>
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        background: snapshot.isDraggingOver
                                                            ? "lightblue"
                                                            : "#f4f4f4",
                                                        padding: 4,
                                                        width: 250,
                                                        minHeight: 500
                                                    }}
                                                >
                                                    {column.items.map((item, index) => {
                                                        if (item.art === 'modul') {

                                                            return (
                                                                <Draggable
                                                                    key={item.id}
                                                                    draggableId={item.id}
                                                                    index={index}
                                                                >
                                                                    {(provided, snapshot) => {
                                                                        return (
                                                                            <div
                                                                                className="Drag"
                                                                                id={item.typ}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}



                                                                            >
                                                                                <div>{item.name}</div><div>{item.ects} ECTS</div>

                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Draggable>
                                                            );
                                                        }
                                                        else if (item.art === 'ulp') {

                                                            return (
                                                                <Draggable
                                                                    key={item.id}
                                                                    draggableId={item.id}
                                                                    index={index}
                                                                >
                                                                    {(provided, snapshot) => {
                                                                        return (
                                                                            <div
                                                                                className="Drag"
                                                                                id={item.typ}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}



                                                                            >
                                                                                <div>{item.name}</div><div>ULP</div>

                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Draggable>
                                                            );
                                                        }
                                                        else if (item.art === 'pf') {

                                                            return (
                                                                <Draggable
                                                                    key={item.id}
                                                                    draggableId={item.id}
                                                                    index={index}
                                                                >
                                                                    {(provided, snapshot) => {
                                                                        return (
                                                                            <div
                                                                                className="Drag"
                                                                                id={item.typ}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                            >
                                                                                <div>{item.name}</div><div>PF</div>

                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Draggable>
                                                            );
                                                        }
                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                            );
                                        }}
                                    </Droppable>
                                </div>
                            </div>


                        );//Ende return
                    }//Ende der else

                })}  {/* Ende Columns Map */}



                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <h2 style={{ color: 'white' }}>Semester</h2>
                    <div style={{ margin: 8 }}>
                        <div
                            style={{
                                background: "#f4f4f4",
                                padding: 4,
                                width: 250,
                                minHeight: 500,
                                fontSize: 100,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around'
                            }}

                        >
                            <button onClick={addSemester}>
                                <i class="fas fa-plus"></i>
                                <h4>Semester hinzufügen</h4>
                            </button>
                            <button onClick={deleteSemester}>
                                <i class="fas fa-minus"></i>
                                <h4>Semester entfernen</h4>
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </DragDropContext>


    );
}

export default AppVerlaufsplan;
