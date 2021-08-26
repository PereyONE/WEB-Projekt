package com.web.organicer.vertiefung;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class VertiefungService {

    private final VertiefungRepository vertiefungRepository;

    //Alle Vertiefungsfächer werden aus der Datenbank abgefragt
    public List<Vertiefung> getVertiefung(){
        return vertiefungRepository.findAll();
    }

    //Anlegen oder Updaten eines neuen bzw. alten Vertiefungsfaches
    public String postVertiefung(Vertiefung vertiefung){
        if(vertiefung.getId()==null){
            if(!vertiefungRepository.findByName(vertiefung.getName()).isEmpty()){
                return "Vertiefungsrichtung " + vertiefung.getName()+ " existiert bereits";
            }
            return addVertiefung(vertiefung);
        }
        return updateVertiefung(vertiefung);
    }

    //Abspeichern eines neuen Vertiefungsfaches
    public String addVertiefung(Vertiefung vertiefung){
        vertiefungRepository.save(vertiefung);
        return "Vertiefungsrichtung " + vertiefung.getName()+ " wurde hinzugefügt";
    }

    //Aktualisieren eines bestehenden Vertiefungsfaches
    public String updateVertiefung(Vertiefung vertiefung){
        vertiefungRepository.save(vertiefung);
            return "Vertiefungsrichtung " + vertiefung.getName()+ " wurde aktualisiert";

    }

    //Löschen eines Vertiefungsfaches aus der Datenbank
    public String deleteVertiefung(Vertiefung vertiefung) {
        if (vertiefung.getId() == null) {
            return "Vertiefung konnte nicht gelöscht werden";
        }
        vertiefungRepository.delete(vertiefung);
        return "Vertiefungsrichtung " + vertiefung.getName()+ " wurde gelöscht";
    }
}


