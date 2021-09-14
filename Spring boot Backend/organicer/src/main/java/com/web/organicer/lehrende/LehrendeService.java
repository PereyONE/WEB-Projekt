package com.web.organicer.lehrende;

import com.web.organicer.module.Module;
import com.web.organicer.module.ModuleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class LehrendeService {

    private final LehrendeRepository lehrendeRepository;

    //gibt alle Lehrenden aus der Datenbank zurück
    public List<Lehrende> getLehrende(){
        return lehrendeRepository.findAll();
    }

    //gibt nur den gesuchten Lehrenden aus der Datenbank zurück
    public Lehrende getOnlyLehrendeById(Long lehrendeId){
        return lehrendeRepository.findById(lehrendeId).get();
    }

    public Lehrende getLehrendeById(Long lehrendeId) {
        return getOnlyLehrendeById(lehrendeId);
    }

    //gibt alle Module eines Lehrenden zurück
    public ArrayList<Module> getModuleByLehrendeId(Long lehrendeId){
        return new ArrayList<>(lehrendeRepository.getById(lehrendeId).getModules());
    }

    //neuen Lehrenden anlegen oder aktualisieren
    public String postLehrende(Lehrende lehrende){

        if(lehrende.getId()==null){
            //überprüfen ob es schon einen lehrenden mit dem vor-und nachnamen gibt
            if(lehrendeRepository.findByNachname(lehrende.getNachname())!=null) {
                ArrayList<Lehrende> tmp = lehrendeRepository.findByNachname(lehrende.getNachname());
                for(Lehrende l:tmp) {
                    if (l.getVorname().equals(lehrende.getVorname())) {
                        return "Mitarbeiter " + lehrende.getVorname() + " " + lehrende.getNachname() + " existiert bereits";
                    }
                }
            }
            return addNewLehrende(lehrende);
        }
        return updateLehrende(lehrende);
    }

    //Lehrenden in der Datenbank abspeichern
    public String addNewLehrende(Lehrende lehrende){
        lehrendeRepository.save(lehrende);
        return "Mitarbeiter " + lehrende.getVorname()+ " " + lehrende.getNachname() + " hinzugefügt";
    }

    //Lehrende in der Datenbank aktualisieren
    public String updateLehrende(Lehrende lehrender){
        if(lehrender.getModules()!=null){
            lehrender.setModules(lehrender.getModules());
            for(Module module: lehrender.getModules()){
                ArrayList<Lehrende> lehrende = new ArrayList<>(module.getLehrende());
                lehrende.add(lehrender);
                module.setLehrende(lehrende);
            }
            lehrendeRepository.save(lehrender);
            return "Mitarbeiter " + lehrender.getVorname()+ " " + lehrender.getNachname() + " aktualisiert";
        }
        lehrendeRepository.save(lehrender);
        return "Mitarbeiter " + lehrender.getVorname()+ " " + lehrender.getNachname() + " aktualisiert";
    }

    //Lehrenden aus der Datenbank löschen
    public String deleteLehrende(Long id){
        if(id==null){
            return "Keine Mitarbeiter Id";
        }
        Lehrende lehrende = lehrendeRepository.findById(id).get();
        lehrendeRepository.delete(lehrende);
        return "Mitarbeiter " + lehrende.getVorname()+ " " + lehrende.getNachname() + " wurde gelöscht";
    }
}

