import React from 'react'
import './Ereignis.css'

function Ereignis ({eintrag}){
    
        if(eintrag.typ=="Vorlesung"){
            return(
                <div className="ereignis Vorlesung">
                    <p className="abstand">{eintrag.von} - {eintrag.bis}</p>
                    <p className="abstand">{eintrag.name}</p>
                    <p className="abstand">{eintrag.typ}</p>
                    <p className="abstand">{eintrag.Raum}</p>
                </div>
            )
            
        }
        else if(eintrag.typ=="Übung"){
            return(
                <div className="ereignis Übung">
                    <p className="abstand">{eintrag.von} - {eintrag.bis}</p>
                    <p className="abstand">{eintrag.name}</p>
                    <p className="abstand">{eintrag.typ}</p>
                    <p className="abstand">{eintrag.Raum}</p>
                </div>
            )
        }
        else if(eintrag.typ=="Praktikum"){
            return(
                <div className="ereignis Praktikum">
                    <p className="abstand">{eintrag.von} - {eintrag.bis}</p>
                    <p className="abstand">{eintrag.name}</p>
                    <p className="abstand">{eintrag.typ}</p>
                    <p className="abstand">{eintrag.Raum}</p>
                </div>
            )
        }
        else{
            return(
                <div className="ereignis Tutorial">
                    <p className="abstand">{eintrag.von} - {eintrag.bis}</p>
                    <p className="abstand">{eintrag.name}</p>
                    <p className="abstand">{eintrag.typ}</p>
                    <p className="abstand">{eintrag.Raum}</p>
                </div>
            )
        }
        
    
}

export default Ereignis
