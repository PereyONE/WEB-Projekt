import React from 'react';
import './Verlaufsplan.css'



function DragObject({modul, color}) {
 
  return (
    
    <div className="Drag" id={color}> 

        <h4 >{modul.name}</h4>
     
    </div>
    
    
  );
}

export default DragObject;