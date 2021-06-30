package com.web.organicer.termin;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TerminService {
    public final TerminRepository terminRepository;

    public List<Termin> getTermin(){
        return terminRepository.findAll();
    }

    public String postTermin(Termin termin){
        if(termin.getId()==null){
            return addNewTermin(termin);
        }
        return updateTermin(termin);
    }

    public String addNewTermin(Termin termin){
        terminRepository.save(termin);
        return "Neuen Termin erstellt";
    }

    public String updateTermin(Termin termin){
        terminRepository.save(termin);
        return "Termin wurde aktualisiert";
    }

    public String deleteTermin(Termin termin){
        if (termin.getId()==null){
            return "Keine Termin Id";
        }
        terminRepository.delete(termin);
        return "Termin wurde gelöscht";
    }
}
