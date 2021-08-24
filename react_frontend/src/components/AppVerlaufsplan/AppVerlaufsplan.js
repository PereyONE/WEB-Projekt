import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/dist/v4";
import { ButtonGroup, Button } from 'react-bootstrap'
// import FAQ from '../AppFAQ/FAQ';
import './Verlaufsplan.css'
import CheckBox from "./CheckBox";


const itemsFromBackend = [
    { id: uuid(), content: "Mathe 1", color: "pflicht", semester: 1, semesterZ: 1, ects: 10, art: 'modul', verfuegbarkeit: 'ws' },
    { id: uuid(), content: "Photo 1", color: "pflicht", semester: 1, semesterZ: 3, ects: 5, art: 'modul' },
    { id: uuid(), content: "Info 1", color: "pflicht", semester: 1, semesterZ: 3, ects: 6, art: 'modul' },
    { id: uuid(), content: "Elektronik", color: "red", semester: 1, semesterZ: 1, ects: 5, art: 'modul' },
    { id: uuid(), content: "SMM", color: "red", semester: 1, semesterZ: 1, ects: 1, art: 'modul' },
    { id: uuid(), content: "AVW", color: "red", semester: 1, semesterZ: 1, ects: 3, art: 'modul' },

    { id: uuid(), content: "Mathe 1", color: "pflicht", semester: 1, semesterZ: 1, ects: 10, art: 'ulp', verfuegbarkeit: 'ws' },
    { id: uuid(), content: "Photo 1", color: "red", semester: 1, semesterZ: 3, ects: 5, art: 'ulp' },
    { id: uuid(), content: "Info 1", color: "red", semester: 1, semesterZ: 3, ects: 6, art: 'ulp' },
    { id: uuid(), content: "Elektronik", color: "red", semester: 1, semesterZ: 1, ects: 5, art: 'ulp' },
    { id: uuid(), content: "SMM", color: "red", semester: 1, semesterZ: 1, ects: 1, art: 'ulp' },
    { id: uuid(), content: "AVW", color: "red", semester: 1, semesterZ: 1, ects: 3, art: 'ulp' },

    { id: uuid(), content: "Mathe 1", color: "pflicht", semester: 1, semesterZ: 1, ects: 10, art: 'pf' },
    { id: uuid(), content: "Photo 1", color: "", semester: 1, semesterZ: 3, ects: 5, art: 'pf' },
    { id: uuid(), content: "Info 1", color: "red", semester: 1, semesterZ: 3, ects: 6, art: 'pf' },
    { id: uuid(), content: "Elektronik", color: "red", semester: 1, semesterZ: 1, ects: 5, art: 'pf' },
    { id: uuid(), content: "SMM", color: "red", semester: 1, semesterZ: 1, ects: 1, art: 'pf' },
    { id: uuid(), content: "AVW", color: "red", semester: 1, semesterZ: 1, ects: 3, art: 'pf' },

    { id: uuid(), content: "Mathe 2", color: "pflicht", semester: 2, semesterZ: 2, art: 'modul', verfuegbarkeit: 'ss' },
    { id: uuid(), content: "Photo 2", color: "red", semester: 2, semesterZ: 4, art: 'modul' },
    { id: uuid(), content: "Info 2", color: "red", semester: 2, semesterZ: 4, art: 'modul' },
    { id: uuid(), content: "EM 1", color: "red", semester: 2, semesterZ: 2, art: 'modul' },
    { id: uuid(), content: "GMG 1", color: "red", semester: 2, semesterZ: 4, art: 'modul' },

    { id: uuid(), content: "Siga", color: "red", semester: 3, semesterZ: 3, art: 'modul' },
    { id: uuid(), content: "Photo 3", color: "red", semester: 3, semesterZ: 5, art: 'modul' },
    { id: uuid(), content: "Info 3", color: "red", semester: 3, semesterZ: 5, art: 'modul' },
    { id: uuid(), content: "EM 2", color: "red", semester: 3, semesterZ: 3, art: 'modul' },
    { id: uuid(), content: "GMG 2", color: "red", semester: 3, semesterZ: 5, art: 'modul' },

    { id: uuid(), content: "VPA 1", color: "orange", semester: 4, semesterZ: 6, art: 'modul' },
    { id: uuid(), content: "VPB 1", color: "orange", semester: 4, semesterZ: 8, art: 'modul' },
    { id: uuid(), content: "VPC 1", color: "orange", semester: 4, semesterZ: 8, art: 'modul' },
    { id: uuid(), content: "VPD 1", color: "orange", semester: 4, semesterZ: 6, art: 'modul' },
    { id: uuid(), content: "WPB 1", color: "violet", semester: 4, semesterZ: 10, art: 'modul' },

    { id: uuid(), content: "VPA 2", color: "orange", semester: 5, semesterZ: 7, art: 'modul' },
    { id: uuid(), content: "VPB 2", color: "orange", semester: 5, semesterZ: 9, art: 'modul' },
    { id: uuid(), content: "VPC 2", color: "orange", semester: 5, semesterZ: 9, art: 'modul' },
    { id: uuid(), content: "VPD 2", color: "orange", semester: 5, semesterZ: 7, art: 'modul' },
    { id: uuid(), content: "WPB 2", color: "violet", semester: 5, semesterZ: 11, art: 'modul' },
    { id: uuid(), content: "BWR", color: "red", semester: 5, semesterZ: 7, art: 'modul' },
    { id: uuid(), content: "REC", color: "red", semester: 5, semesterZ: 9, art: 'modul' },

    { id: uuid(), content: "VPA 3", color: "orange", semester: 6, semesterZ: 8, art: 'modul' },
    { id: uuid(), content: "VPB 3", color: "orange", semester: 6, semesterZ: 10, art: 'modul' },
    { id: uuid(), content: "VPC 3", color: "orange", semester: 6, semesterZ: 10, art: 'modul' },
    { id: uuid(), content: "VPD 3", color: "orange", semester: 6, semesterZ: 8, art: 'modul' },

    { id: uuid(), content: "Praktikum", color: "gold", semester: 7, semesterZ: 12, art: 'modul' },
    { id: uuid(), content: "Bachelorarbeit", color: "gold", semester: 7, semesterZ: 11, art: 'modul' },
    { id: uuid(), content: "Kolloquium", color: "gold", semester: 7, semesterZ: 12, art: 'modul' },

];

const semesterZahl = 7;


//Funktion um alle Module für das jeweils angegebene Semester zu sammeln (Regelstudienzeit 7 Semester)
const moduleSemester = (semester) => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semester === semester && itemsFromBackend[index].art === 'modul') {
            module.push(itemsFromBackend[index])
        }
    }
    module.sort(function (a, b) {
        return b.ects - a.ects;
    })
    return module;
}

//Funktion um alle Module für das jeweils angegebene Semester zu sammeln (Regelstudienzeit 12 Semester)
const moduleSemesterZ = (semester) => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === semester && itemsFromBackend[index].art === 'modul') {
            module.push(itemsFromBackend[index])
        }
    }
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



const columnsFromBackend = () => {
    var columns = {
        0: {
            name: "Semester 0",
            items: itemsFromBackend
        },
        1: {
            name: "Semester 1",
            items: []
        },
        2: {
            name: "Semester 2",
            items: []
        },
        3: {
            name: "Semester 3",
            items: []
        },
        4: {
            name: "Semester 4",
            items: []
        },
        5: {
            name: "Semester 5",
            items: []
        },
        6: {
            name: "Semester 6",
            items: []
        },
        7: {
            name: "Semester 7",
            items: []
        }
    }

    if (semesterZahl > 7) {
        for (let index = 8; index <= semesterZahl; index++) {
            columns = {
                ...columns,
                [index]: {
                    name: "Semester " + index,
                    items: []
                }

            }

        }

    }
    return columns;
}


//Hauptfunktion für Drag&Drop-Logik
const onDragEnd = (result, columns, setColumns) => {

    //Falls Drag-Objekt nicht auf eine Fläche außerhalb des Drag&Drop-Systems gezogen wird
    if (!result.destination) return;

    //Falls Drag-Objekt auf eine gültige Fläche gezogen wird
    const { source, destination } = result;
    //Abfrage ob Drag-Objekt nicht auf seine ursprüngliche Fläche gezogen wurde
    if (source.droppableId !== destination.droppableId) {

        //Falls Drag-Objekt auf Mülleimer gezogen wird
        if (result.destination.droppableId === 'delete') {
            if (source.droppableId == 0) { return }
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[0];
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
                if ((isOdd(destination.droppableId) && dragItem.verfuegbarkeit === 'ss') || (!isOdd(destination.droppableId) && dragItem.verfuegbarkeit === 'ws')) { return }
            }
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

//Zusatzfunktion für Logikabfrage
function isOdd(num) { return num % 2; }


//Exportierter React-Component
function AppVerlaufsplan() {

    //State für erstellte Semester, essenziell für Drag&Drop
    const [columns, setColumns] = useState(columnsFromBackend());

    //State für Tabauswahl (Modul, ULP, Prüfung)
    const [anzeige, setAnzeige] = useState(0)

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
        return;

    }

    //Funktion um eine erstellte Semesterspalte zu löschen
    const deleteSemester = e => {

        if (Object.entries(columns).length > 8 && Object.entries(columns).length > semesterZahl + 1) {
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
            return;
        }
    }

    //Funktion um Semester spalten auf letzten gespeicherten Stand zurück zu setzen
    const resetSemester = e => {
        e.preventDefault();
        setColumns(columnsFromBackend());
    }


    //Funktion um SVP nach 7 Semester Regelstudienzeit zu befüllen
    const siebenSemester = e => {

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

    //Funktion um SVP nach 12 Semester Regelstudienzeit zu befüllen
    const zwoelfSemester = e => {

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


    //States für Checkbox-Button Auswahl
    const [checkedP, setCheckedP] = useState(true);
    const [checkedV, setCheckedV] = useState(true);
    const [checkedW, setCheckedW] = useState(true);

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


    return (
        <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}>



            <div style={{ display: 'flex', width: '100ve', justifyContent: 'space-between' }}>

                <h1 style={{ alignSelf: 'flex-start' }}>Studienverlaufsplan</h1>


                <div style={{ alignSelf: 'flex-end', display: 'flex', justifyContent: 'space-around' }}>
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

                    <Button variant="outline-dark" className="Loeschen" ><i class="far fa-save"></i></Button>
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

                                                    }}
                                                >



                                                    {/* <div className="faqs">
                                                        {faqs.map((faq, i) => (
                                                            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} color={faq.color} />
                                                        ))}
                                                    </div> */}



                                                    {column.items.map((item, index) => {
                                                        if (anzeige === 0 && item.art === 'modul' && (checkedP && (item.color === 'pflicht' || item.color === 'gold') || checkedV && item.color === 'orange' || checkedW && item.color === 'violet')) {

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
                                                                                id={item.color}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}



                                                                            >
                                                                                <div>{item.content}</div><div>{item.ects} ECTS</div>

                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Draggable>
                                                            );
                                                        }
                                                        else if (anzeige === 1 && item.art === 'ulp' && (checkedP && (item.color === 'pflicht' || item.color === 'gold') || checkedV && item.color === 'orange' || checkedW && item.color === 'violet')) {

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
                                                                                id={item.color}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}



                                                                            >
                                                                                <div>{item.content}</div><div>ULP</div>

                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Draggable>
                                                            );
                                                        }
                                                        else if (anzeige === 2 && item.art === 'pf' && (checkedP && (item.color === 'pflicht' || item.color === 'gold') || checkedV && item.color === 'orange' || checkedW && item.color === 'violet')) {

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
                                                                                id={item.color}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}



                                                                            >
                                                                                <div>{item.content}</div><div>PF</div>

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
                                                                                id={item.color}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}



                                                                            >
                                                                                <div>{item.content}</div><div>{item.ects} ECTS</div>

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
                                                                                id={item.color}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}



                                                                            >
                                                                                <div>{item.content}</div><div>ULP</div>

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
                                                                                id={item.color}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}



                                                                            >
                                                                                <div>{item.content}</div><div>PF</div>

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
