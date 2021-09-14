package com.web.organicer.lehrende;


import com.web.organicer.module.Module;
import com.web.organicer.module.ModuleRepository;
import com.web.organicer.module.ModuleService;
import com.web.organicer.student.Student;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
@AllArgsConstructor
public class LehrendeService {


    private final ModuleRepository moduleRepository;
    private final LehrendeRepository lehrendeRepository;

    public List<Lehrende> getLehrende(){
        return lehrendeRepository.findAll();
    }

    public Lehrende getOnlyLehrendeById(Long lehrendeId){
        return lehrendeRepository.findById(lehrendeId).get();
    }

    public Lehrende getLehrendeById(Long lehrendeId) {

        return getOnlyLehrendeById(lehrendeId);
    }

    public ArrayList<Module> getModuleByLehrendeId(Long lehrendeId){
        return new ArrayList<>(lehrendeRepository.getById(lehrendeId).getModules());
    }

    public String postLehrende(Lehrende lehrende){

        if(lehrende.getId()==null){
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

    public String addNewLehrende(Lehrende lehrende){
        lehrendeRepository.save(lehrende);
        return "Mitarbeiter " + lehrende.getVorname()+ " " + lehrende.getNachname() + " hinzugefügt";
    }

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

    public String deleteLehrende(Long id){
        if(id==null){
            return "Keine Mitarbeiter Id";
        }
        Lehrende lehrende = lehrendeRepository.findById(id).get();
        lehrendeRepository.delete(lehrende);
        return "Mitarbeiter " + lehrende.getVorname()+ " " + lehrende.getNachname() + " wurde gelöscht";
    }
}

