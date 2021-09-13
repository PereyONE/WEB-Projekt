import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router';
import './AppInfo.css'



function AppInfo({ auth }) {

    if (!auth) {
        return <Redirect to="/login" />
    }

    return (
        <div>
            <Container>

                <h2>Informationen zum OrgaNicer</h2>
           
                <p>
                    <br />
                    Hallo und willkommen beim Organicer,
                    <br />
                    Der Organicer soll dir helfen deinen Studienverlauf besser zu planen und dir den Einstieg im Studiengang Ba. Medientechnologie erleichtern. Damit du unser Tool auch vollumfänglich nutzen kannst geben wir dir hier eine kleine Einführung die grundlegenden Funktionen des Organicers

                    <br />
                    <br />
                    <u> 1.     Registrierung und Anmeldung </u>
                    <br />
                    Um den Organicer zu nutzen, musst du via VPN verbunden sein. Eine Anleitung dazu findest du auf der Website der TH Köln. Nach der Registrierung und der Anmeldung landest du auf der Startseite, auf der du die Hauptfunktionen des Organicers findest.
                    <br />
                    <br />
                    <u> 2.     Studienverlaufsplan</u>
                    <br />
                    Unter dem Menüpunkt Studienverlaufsplaner kannst du dir deinen individuellen Studienverlaufsplan erstellen. So hast du immer einen guten Überblick welche Module dir noch fehlen und wie viele Semester du dafür noch benötigst.



                    In der linken Spalte unter Module findest du alle Module wieder die du im Bachelor belegen kannst. Diese kannst du nach Plicht-, Vertiefung- und Wahlmodulen filtern.  Du kannst dich auch entscheiden, ob du das ganze Modul, nur die ULP oder nur die Klausur in einem Semester belegen möchtest. Solltest du beispielsweise eine Klausur nicht bestehen aber bereits die ULP besitzen kannst du so anstelle des ganzen Modules die beiden Elemente ULP und Klausur im Studienverlaufsplan verwenden. Alle Elemente lassen sich durch Drag-and-Drop verschieben.

                    Mit dem Mülleimersymbol löscht und mit dem Diskettensymbol speicherst du deinen derzeitigen Verlaufsplan. Mit den beiden Buttons „7“ und „12“ kannst du dir Arbeit ersparen und die von der TH vorgefertigten Studienverlaufspläne mit 7 oder 12 Semestern aufrufen. Die Elemente werden dann automatisch richtig eingeplant. Diese kannst du dann wieder nach Belieben verändern durch Verschieben der Module in andere Semester oder in die Modulspalte. Standartmäßig bekommst du 7 Semester angezeigt, sollten dir diesen nicht reichen kannst du nach dem 7. Semester durch das + oder das – Symbol Semester hinzufügen oder entfernen. Module oder ULPs die im Wintersemester angeboten werden kannst du natürlich nicht in einem Sommersemester einplanen und umgekehrt.

                    Für Wahl- und Vertiefungsmodule werden solange Platzhalter im Verlaufsplan angezeigt bis du in deinen persönlichen Einstellungen Module angegeben hast.
                    <br />
                    <br />
                    <u>3. Stundenplan</u>
                    <br/>
                    Aufgrund deiner Modulauswahl im Verlaufsplan werden dir automatisch die richtigen Vorlesungstermine im Kalender angezeigt. Das jeweilige Semester kannst du über das Pull-down Menü Semester auswählen. Möchtest du deinen persönlichen Stundenplan um regelmäßige Termine wie zum Beispiel Tutorien, Übungen oder private Termine ergänzen, kannst du dies über die Schaltfläche „Ereignis erstellen“.
                    <br />
                    <br />
                    <u>  4.     Module / Lehrende / FAQ</u>
                    <br/>
                    Unter den Menüpunkten Module oder Lehrende findest du Informationen über alle Module und Lehrenden aus dem Studiengang Bachelor Medientechnologie. Im FAQ werden typische Fragen von Studienanfängern geklärt.
                    <br />
                    <br />
                    <u>  5.     Einstellungen</u>
                    <br/>
                    Hier kannst du deine vier Vertiefungsmodule und deine 2 Wahlmodule auswählen. Sobald du eine Auswahl getroffen hast, werden die Entsprechenden Platzhalter im Studienverlaufsplan dadurch ersetzt. Außerdem kannst du hier dein Passwort ändern.
                    <br/>
                    <br/>
                    Der Organicer ist im Rahmen unseres Webprojektes entstanden und hat uns viel Mühe und Arbeit gekostet. Er ist an die Studienordnung des Wintersemester 2020 angelehnt. Die Website erhebt keinen Anspruch auf Vollständigkeit oder Richtigkeit.
                    <br/>
                    Viel Spaß mit dem OrgaNicer!
                </p>
              
            </Container>
        </div>


    );
}

export default AppInfo;