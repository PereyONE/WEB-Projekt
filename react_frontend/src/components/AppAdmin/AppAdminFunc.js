import React, { useState } from 'react';
import AppAdmin from './AppAdminX'
import { Container} from 'react-bootstrap';

function AppAdminFunction({prof}) {
    {/*const [profs] = useState([
        {id:1, vorname: 'Gregor', nachname: "Fischer", eMail: 'xyz@gmail.com', Telefonnummer: '11111111', Raumnummer:'ZW- 08', VonZeit:'10:00Uhr', BisZeit: '14Uhr', Verfügbarkeit:true,},
        {id:2, vorname: 'Helge', nachname: "Wischer", eMail: 'xyzss@gmail.com', Telefonnummer: '111111131', Raumnummer:'ZW- 08', VonZeit:'10:02Uhr', BisZeit: '14Uhr', Verfügbarkeit:true,},
        {id:3, vorname: 'Greg', nachname: "Krischer", eMail: 'xyzaa@gmail.com', Telefonnummer: '11622111111', Raumnummer:'ZW- 08', VonZeit:'10:03Uhr', BisZeit: '14Uhr', Verfügbarkeit:true,},
        {id:4, vorname: 'Wegl', nachname: "Zischer", eMail: 'xyzqq@gmail.com', Telefonnummer: '1111131121', Raumnummer:'ZW- 08', VonZeit:'10:04Uhr', BisZeit: '14:05Uhr', Verfügbarkeit:true,},
        {id:5, vorname: 'Hector', nachname: "Bitcher", eMail: 'xyyyz@gmail.com', Telefonnummer: '1112211111', Raumnummer:'ZW- 08', VonZeit:'10:05Uhr', BisZeit: '14Uhr', Verfügbarkeit:true,},
        ]);*/}

return(
    <div className="">
        {prof.Ansprech}
    </div>
        );
}

export default AppAdminFunction;
