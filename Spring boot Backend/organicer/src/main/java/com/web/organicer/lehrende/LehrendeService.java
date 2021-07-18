package com.web.organicer.lehrende;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;

@Service
@AllArgsConstructor
public class LehrendeService {

    private final LehrendeRepository lehrendeRepository;

    public List<Lehrende> getLehrende(){
        return lehrendeRepository.findAll();
    }

    public List<Lehrende> getLehrendeByModul(String modul){

        ArrayList<Lehrende> temp = new ArrayList<>();
        temp = lehrendeRepository.findByModul(modul);
        return temp;
    }
    /*
    public List<Lehrende> getLehrendeByFunktion(String funktion){
        ArrayList<Lehrende> temp = new ArrayList<>();
        temp = lehrendeRepository.findByFunktion(funktion);
        return temp;
    }
    */
    public String postLehrende(Lehrende lehrende){
        if(lehrende.getId()==null){
            if(!lehrendeRepository.findByVorname(lehrende.getVorname()).isEmpty()){
                return "Mitarbeiter" + lehrende.getNachname() + "existiert bereits";
            }
            return addNewLehrende(lehrende);
        }
        return updateLehrende(lehrende);
    }


    public String addNewLehrende(Lehrende lehrende){
        lehrendeRepository.save(lehrende);
        return "Mitarbeiter " + lehrende.getNachname() + " hinzugefügt";
    }

    public String updateLehrende(Lehrende lehrende){
        lehrendeRepository.save(lehrende);
        return "Mitarbeiter " + lehrende.getNachname() + " aktualisiert";
    }

    public String deleteLehrende(Lehrende lehrende){
        if(lehrende.getId()==null){
            return "Keine Mitarbeiter Id";
        }
        lehrendeRepository.delete(lehrende);
        return "Mitarbeiter " + lehrende.getNachname() + " wurde gelöscht";
    }
}

