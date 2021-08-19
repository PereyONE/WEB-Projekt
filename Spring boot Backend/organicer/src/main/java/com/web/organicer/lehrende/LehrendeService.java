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
        return lehrendeRepository.findById(lehrendeId).orElseThrow(() -> new UsernameNotFoundException("Lehrende nor found"));
    }

    public Map<String,Object> getLehrendeById(Long lehrendeId) {

        Map<String,Object> map = new HashMap<>();

        Lehrende lehrende = lehrendeRepository.findById(lehrendeId).orElseThrow(() -> new UsernameNotFoundException("Lehrende nor found"));
        ArrayList<Module> module= getModuleByLehrendeId(lehrendeId);

        map.put("Lehrende",lehrende);
        if(module!=null) {
            map.put("Module", module);
        }
        return map;
    }

    public ArrayList<Module> getModuleByLehrendeId(Long lehrendeId){
        Lehrende lehrende = lehrendeRepository.findById(lehrendeId).orElseThrow(() -> new UsernameNotFoundException("Lehrende not found"));
        ArrayList<Long> id = lehrende.getModuleId();

        if(id==null){
            return null;
        }
                ArrayList<Module> module = new ArrayList<>();
                for(Long tmp : id){
                    Module modul = moduleRepository.findById(tmp).orElseThrow(() -> new UsernameNotFoundException("Modul not found"));
                    if(modul != null){
                        module.add(modul);
            }
        }
        return module;
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

    public String updateLehrende(Lehrende lehrende){
        lehrendeRepository.save(lehrende);
        return "Mitarbeiter " + lehrende.getVorname()+ " " + lehrende.getNachname() + " aktualisiert";
    }

    public String deleteLehrende(Lehrende lehrende){
        if(lehrende.getId()==null){
            return "Keine Mitarbeiter Id";
        }
        lehrendeRepository.delete(lehrende);
        return "Mitarbeiter " + lehrende.getVorname()+ " " + lehrende.getNachname() + " wurde gelöscht";
    }
}

