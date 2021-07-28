import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/dist/v4";
import { Container, Col, Row, ButtonGroup, Button } from 'react-bootstrap'
import FAQ from '../AppFAQ/FAQ';
import './Verlaufsplan.css'


const itemsFromBackend = [
    { id: uuid(), content: "Mathe 1", color: "red", semester: 1, semesterZ: 1 },
    { id: uuid(), content: "Photo 1", color: "red", semester: 1, semesterZ: 3 },
    { id: uuid(), content: "Info 1", color: "red", semester: 1, semesterZ: 3 },
    { id: uuid(), content: "Elektronik", color: "red", semester: 1, semesterZ: 1 },
    { id: uuid(), content: "SMM", color: "red", semester: 1, semesterZ: 1 },
    { id: uuid(), content: "AVW", color: "red", semester: 1, semesterZ: 1 },

    { id: uuid(), content: "Mathe 2", color: "red", semester: 2, semesterZ: 2 },
    { id: uuid(), content: "Photo 2", color: "red", semester: 2, semesterZ: 4 },
    { id: uuid(), content: "Info 2", color: "red", semester: 2, semesterZ: 4 },
    { id: uuid(), content: "EM 1", color: "red", semester: 2, semesterZ: 2 },
    { id: uuid(), content: "GMG 1", color: "red", semester: 2, semesterZ: 4 },

    { id: uuid(), content: "Siga", color: "red", semester: 3, semesterZ: 3 },
    { id: uuid(), content: "Photo 3", color: "red", semester: 3, semesterZ: 5 },
    { id: uuid(), content: "Info 3", color: "red", semester: 3, semesterZ: 5 },
    { id: uuid(), content: "EM 2", color: "red", semester: 3, semesterZ: 3 },
    { id: uuid(), content: "GMG 2", color: "red", semester: 3, semesterZ: 5 },

    { id: uuid(), content: "VPA 1", color: "orange", semester: 4, semesterZ: 6 },
    { id: uuid(), content: "VPB 1", color: "orange", semester: 4, semesterZ: 8 },
    { id: uuid(), content: "VPC 1", color: "orange", semester: 4, semesterZ: 8 },
    { id: uuid(), content: "VPD 1", color: "orange", semester: 4, semesterZ: 6 },
    { id: uuid(), content: "WPB 1", color: "violet", semester: 4, semesterZ: 10 },

    { id: uuid(), content: "VPA 2", color: "orange", semester: 5, semesterZ: 7 },
    { id: uuid(), content: "VPB 2", color: "orange", semester: 5, semesterZ: 9 },
    { id: uuid(), content: "VPC 2", color: "orange", semester: 5, semesterZ: 9 },
    { id: uuid(), content: "VPD 2", color: "orange", semester: 5, semesterZ: 7 },
    { id: uuid(), content: "WPB 2", color: "violet", semester: 5, semesterZ: 11 },
    { id: uuid(), content: "BWR", color: "red", semester: 5, semesterZ: 7 },
    { id: uuid(), content: "REC", color: "red", semester: 5, semesterZ: 9 },

    { id: uuid(), content: "VPA 3", color: "orange", semester: 6, semesterZ: 8 },
    { id: uuid(), content: "VPB 3", color: "orange", semester: 6, semesterZ: 10 },
    { id: uuid(), content: "VPC 3", color: "orange", semester: 6, semesterZ: 10 },
    { id: uuid(), content: "VPD 3", color: "orange", semester: 6, semesterZ: 8 },

    { id: uuid(), content: "Praktikum", color: "gold", semester: 7, semesterZ: 12 },
    { id: uuid(), content: "Bachelorarbeit", color: "gold", semester: 7, semesterZ: 11 },
    { id: uuid(), content: "Kolloquium", color: "gold", semester: 7, semesterZ: 12 },

];

const semesterZahl = 1;


const moduleSemester1 = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semester === 1) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester1Z = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === 1) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}


const moduleSemester2 = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semester === 2) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester2Z = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === 2) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester3 = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semester === 3) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester3Z = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === 3) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester4 = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semester === 4) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester4Z = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === 4) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester5 = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semester === 5) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester5Z = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === 5) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester6 = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semester === 6) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester6Z = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === 6) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester7 = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semester === 7) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester7Z = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === 7) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester8Z = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === 8) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester9Z = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === 9) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester10Z = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === 10) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester11Z = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === 11) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}

const moduleSemester12Z = () => {
    const module = []
    for (let index = 0; index < itemsFromBackend.length; index++) {
        if (itemsFromBackend[index].semesterZ === 12) {
            console.log(itemsFromBackend[index].content)
            module.push(itemsFromBackend[index])
        }
    }
    return module;
}




const columnsFromBackend = () => {
    var columns={
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

    if(semesterZahl>7){
        for (let index = 8; index <=semesterZahl; index++) {
            columns={
                ...columns,
                [index]:{
                    name: "Semester "+index, 
                    items:[]
                }
    
            }
            
        }
        
    }
    return columns;
}




const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    console.log("element soll von " + source.droppableId + " nach " + destination.droppableId + " verschoben werden");



    if (source.droppableId !== destination.droppableId) {



        if (result.destination.droppableId === 'delete') {
            console.log('hurra')

            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[0];
            console.log(destColumn.name)
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            console.log("element wird von " + sourceColumn + " nach " + destColumn + " verschoben werden");
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [0]: {
                    ...destColumn,
                    items: destItems
                }
            });
        }
        else {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
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
    } else {
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

function App() {
    const [columns, setColumns] = useState(columnsFromBackend());

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

    const deleteSemester = e => {

        setColumns(columnsFromBackend());
    }


    const siebenSemester = e => {

        const newColumns = {
            0: {
                name: "Semester 0",
                items: []
            },
            1: {
                name: "Semester 1",
                items: moduleSemester1()
            },
            2: {
                name: "Semester 2",
                items: moduleSemester2()
            },
            3: {
                name: "Semester 3",
                items: moduleSemester3()
            },
            4: {
                name: "Semester 4",
                items: moduleSemester4()
            },
            5: {
                name: "Semester 5",
                items: moduleSemester5()
            },
            6: {
                name: "Semester 6",
                items: moduleSemester6()
            },
            7: {
                name: "Semester 7",
                items: moduleSemester7()
            },
        }

        setColumns(newColumns);
    }

    const zwoelfSemester = e => {

        const newColumns = {
            0: {
                name: "Semester 0",
                items: []
            },
            1: {
                name: "Semester 1",
                items: moduleSemester1Z()
            },
            2: {
                name: "Semester 2",
                items: moduleSemester2Z()
            },
            3: {
                name: "Semester 3",
                items: moduleSemester3Z()
            },
            4: {
                name: "Semester 4",
                items: moduleSemester4Z()
            },
            5: {
                name: "Semester 5",
                items: moduleSemester5Z()
            },
            6: {
                name: "Semester 6",
                items: moduleSemester6Z()
            },
            7: {
                name: "Semester 7",
                items: moduleSemester7Z()
            },
            8: {
                name: "Semester 8",
                items: moduleSemester8Z()
            },
            9: {
                name: "Semester 9",
                items: moduleSemester9Z()
            },
            10: {
                name: "Semester 10",
                items: moduleSemester10Z()
            },
            11: {
                name: "Semester 11",
                items: moduleSemester11Z()
            },
            12: {
                name: "Semester 12",
                items: moduleSemester12Z()
            },
        }

        setColumns(newColumns);
    }

    const [pflichtmodule, updatePflichtmodule] = useState([
        {
            name: 'Mathe 1'
        },
        {
            name: 'Mathe 2'
        },
        {
            name: 'Siga'
        }
    ])

    function getModule() {
        <div>
            {Object.entries(columns).map(([columnID, column], index) => {
                if (index === 0) {
                    Object.entries(column.items).map(([itemID, item], index) => {
                        if (item.vType === 'pflicht') {



                        }
                        else {

                        }

                    })
                }
                else {

                }

                return (
                    <h1>Dönercontent</h1>
                )


            })}
        </div>


    }

    const [faqs, setfaqs] = useState([
        {
            question: 'Pflichtmodule',
            answer:
                Object.entries(columns).map(([columnID, column], index) => {
                    if (index === 0) {
                        return (
                            Object.entries(column.items).map(([itemID, item], index) => {
                                if (item.vType === 'pflicht') {
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
                                                        {item.content}
                                                    </div>
                                                );
                                            }}
                                        </Draggable>
                                    )
                                }

                            }))

                    }
                }),
            open: false,
            color: 'rot'
        },
        {
            question: 'Vertiefungsmodule',
            answer:
                <div>

                </div>,
            open: false,
            color: 'orange'
        },
        {
            question: 'Wahlmodule',
            answer:
                <div>


                </div>,
            open: false,
            color: 'lila'
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }

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
                                    <Button variant="outline-dark" className="Loeschen" onClick={deleteSemester} > <i class="fas fa-trash-alt"></i></Button>

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
                                <h2>Modulauswahl</h2>
                                <div style={{ margin: 8 }}>

                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="outline-secondary">Modul</Button>
                                        <Button variant="outline-secondary">ULP</Button>
                                        <Button variant="outline-secondary">Klausur</Button>
                                    </ButtonGroup>

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
                                                        minHeight: 500,
                                                        maxHeight: 500,
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
                                                                            {item.content}
                                                                        </div>
                                                                    );
                                                                }}
                                                            </Draggable>
                                                        );

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
                                                                            {item.content}
                                                                        </div>
                                                                    );
                                                                }}
                                                            </Draggable>
                                                        );
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
                        <button
                            style={{
                                background: "#f4f4f4",
                                padding: 4,
                                width: 250,
                                minHeight: 500,
                                fontSize: 100,
                            }}
                            onClick={addSemester}
                        >

                            <i class="fas fa-plus"></i>
                            <h4>Semester hinzufügen</h4>


                        </button>



                    </div>
                </div>


            </div>
        </DragDropContext>


    );
}

export default App;
