package com.web.organicer.moduleSpecialization;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class VertiefungService {

    private final VertiefungRepository vertiefungRepository;

    public List<Vertiefung> getVertiefung(){

        return vertiefungRepository.findAll();
    }

    public String postVertiefung(Vertiefung vertiefung){
        if(vertiefung.getId()==null){
            if(!vertiefungRepository.findByName(vertiefung.getName()).isEmpty()){
                return "Vertiefungsrichtung" + vertiefung.getName()+ " existiert bereits";
            }
            return addVertiefung(vertiefung);
        }
        return updateVertiefung(vertiefung);
    }

    public String addVertiefung(Vertiefung vertiefung){
        vertiefungRepository.save(vertiefung);
        return "Vertiefungsrichtung" + vertiefung.getName()+ " wurde hinzugefügt";
    }

    public String updateVertiefung(Vertiefung vertiefung){
        vertiefungRepository.save(vertiefung);
            return "Vertiefungsrichtung" + vertiefung.getName()+ " wurde aktualisiert";

    }

    public String deleteVertiefung(Vertiefung vertiefung) {
        if (vertiefung.getId() == null) {
            return "Keine Vertiefungs Id";
        }
        vertiefungRepository.delete(vertiefung);
        return "Vertiefungsrichtung" + vertiefung.getName()+ " wurde gelöscht";
    }

}


