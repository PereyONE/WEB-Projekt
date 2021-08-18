package com.web.organicer.lehrende;


import com.web.organicer.module.Module;
import com.web.organicer.module.ModuleService;
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


    private final ModuleService moduleService;

    private final LehrendeRepository lehrendeRepository;

    public List<Lehrende> getLehrende(){
        return lehrendeRepository.findAll();
    }

    public Map<String,Object> getLehrendeById(Long lehrendeId) {

        Map<String,Object> map = new HashMap<>();

        Lehrende lehrende = lehrendeRepository.findById(lehrendeId).orElseThrow(() -> new UsernameNotFoundException("Lehrende nor found"));
        ArrayList<Module> module= getModuleByLehrendeId(lehrendeId);


        map.put("Lehrende",lehrende);
        map.put("Module", module);


        return map;
    }

    public ArrayList<Module> getModuleByLehrendeId(Long lehrendeId){
        Lehrende lehrende = lehrendeRepository.findById(lehrendeId).orElseThrow(() -> new UsernameNotFoundException("Lehrende nor found"));
        ArrayList<Long> id = lehrende.getModuleId();
        ArrayList<Module> module = new ArrayList<>();
        System.out.println("id = "+ id);
        for(Long tmp : id){

            Module modul = moduleService.getModulById(tmp);
            module.add(modul);

        }

        if(module == null){
            return null;
        }
        return module;
    }




    public String postLehrende(Lehrende lehrende){
        if(lehrende.getId()==null){
            if(lehrendeRepository.findByNachname(lehrende.getNachname()).isEmpty()){

                return "Mitarbeiter " + lehrende.getNachname() + " existiert bereits";

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

