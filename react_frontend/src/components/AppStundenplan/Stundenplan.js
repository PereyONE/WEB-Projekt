import React, { useState, useEffect } from 'react';
import './AppStundenplan.css';
import { Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Ereignis from './Ereignis';
import axios from 'axios';

function Stundenplan(semester) {
    const [eintraege, seteintraege] = useState([]);


    useEffect(() => {
        axios.get('/api/termine')
            .then(res => {
                seteintraege(res.data)
                console.log(eintraege)
            })
            .catch(function (error) {

                if (error.response.status === 403) {
                    localStorage.clear()
                    window.location.reload()
                }
            })
    }, [])
    
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 700;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    if (width > breakpoint) {
        return (
            <Row className="justify-content-md-center" sm={5}>
                <div className="tag1">
                    Montag<br></br>
                    {eintraege.map((eintrag, i) => {

                        if ((eintrag.wochentag === "Montag") && (eintrag.semester === semester.semester)) {
                            return (<Ereignis eintrag={eintrag} index={i} semester={semester} />)
                        }
                    })}
                </div>
                <div className="tag2">
                    Dienstag<br></br>
                    {eintraege.map((eintrag, i) => {
                        if (eintrag.wochentag == "Dienstag" && eintrag.semester == semester.semester) {
                            return (<Ereignis eintrag={eintrag} index={i} semester={semester} />)
                        }
                    })}
                </div>
                <div className="tag2">
                    Mittwoch<br></br>
                    {eintraege.map((eintrag, i) => {
                        if (eintrag.wochentag == "Mittwoch" && eintrag.semester == semester.semester) {
                            return (<Ereignis eintrag={eintrag} index={i} semester={semester} />)
                        }
                    })}
                </div>
                <div className="tag2">
                    Donnerstag<br></br>
                    {eintraege.map((eintrag, i) => {
                        if (eintrag.wochentag == "Donnerstag" && eintrag.semester == semester.semester) {
                            return (<Ereignis eintrag={eintrag} index={i} semester={semester} />)
                        }
                    })}
                </div>
                <div className="tag3">
                    Freitag<br></br>
                    {eintraege.map((eintrag, i) => {
                        if (eintrag.wochentag == "Freitag" && eintrag.semester == semester.semester) {
                            return (<Ereignis eintrag={eintrag} index={i} semester={semester} />)
                        }
                    })}
                </div>
            </Row>
        );
    }
    return (
        <Carousel>
            <Carousel.Item>
                <div className="tag4">
                    Montag<br></br>
                    {eintraege.map((eintrag, i) => {
                        if (eintrag.wochentag == "Montag" && eintrag.semester == semester.semester) {
                            return (<Ereignis eintrag={eintrag} index={i} semester={semester} />)
                        }
                    })}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="tag4">
                    Dienstag<br></br>
                    {eintraege.map((eintrag, i) => {
                        if (eintrag.wochentag == "Dienstag" && eintrag.semester == semester.semester) {
                            return (<Ereignis eintrag={eintrag} index={i} semester={semester} />)
                        }
                    })}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="tag4">
                    Mittwoch<br></br>
                    {eintraege.map((eintrag, i) => {
                        if (eintrag.wochentag == "Mittwoch" && eintrag.semester == semester.semester) {
                            return (<Ereignis eintrag={eintrag} index={i} semester={semester} />)
                        }
                    })}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="tag4">
                    Donnerstag<br></br>
                    {eintraege.map((eintrag, i) => {
                        if (eintrag.wochentag == "Donnerstag" && eintrag.semester == semester.semester) {
                            return (<Ereignis eintrag={eintrag} index={i} semester={semester} />)
                        }
                    })}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="tag4">
                    Freitag<br></br>
                    {eintraege.map((eintrag, i) => {
                        if (eintrag.wochentag == "Freitag" && eintrag.semester == semester.semester) {
                            return (<Ereignis eintrag={eintrag} index={i} semester={semester} />)
                        }
                    })}
                </div>
            </Carousel.Item>
        </Carousel>

    );
}
export default Stundenplan;