package com.web.organicer.module;

import com.web.organicer.lehrende.Lehrende;
import com.web.organicer.lehrende.LehrendeController;
import com.web.organicer.lehrende.LehrendeRepository;
import com.web.organicer.lehrende.LehrendeService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class ModuleService {

    private final ModuleRepository moduleRepository;
    private final LehrendeRepository lehrendeRepository;

    public List<Module> getModules(){
        return moduleRepository.findAll();
    }

    public Module getOnlyModulById(Long modulId){
        return moduleRepository.findById(modulId).orElseThrow(() -> new UsernameNotFoundException("Modul not found"));
    }
    public Map<String,Object> getModulById(Long modulId) {

        Map<String,Object> map = new HashMap<>();
        Module modul = moduleRepository.findById(modulId).orElseThrow(() -> new UsernameNotFoundException("Modul not found"));
        ArrayList<Lehrende> lehrende = getLehrendeByModuleId(modulId);

        map.put("Module",modul);
        if(lehrende!=null) {
            map.put("Lehrende", lehrende);
        }
        return map;
    }

    public ArrayList<Lehrende> getLehrendeByModuleId(Long modulId){

        Module modul = moduleRepository.findById(modulId).orElseThrow(() -> new UsernameNotFoundException("Modul nor found"));
        ArrayList<Long> id = modul.getLehrendeId();

        if(id==null){
            return null;
        }
        ArrayList<Lehrende> lehrende = new ArrayList<>();
        for(Long tmp : id){
            Lehrende lehrenden = lehrendeRepository.findById(tmp).orElseThrow(() -> new UsernameNotFoundException("Lehrende nor found"));
            lehrende.add(lehrenden);
        }
        return lehrende;
    }


    public String postModule(Module module){
        if (module.getId()==null){
            if (moduleRepository.findByModuleName(module.getModuleName()).isPresent()){
                return "Module " + module.getModuleName() +"existiert bereits";
            }
            return addNewModule(module);
        }
        return updateModule(module);
    }

    public String addNewModule(Module module){
        moduleRepository.save(module);
        return "Module " + module.getModuleName() +" wurde hinzugefügt";
    }

    public String updateModule(Module module){
        moduleRepository.save(module);
        return "Module " + module.getModuleName() +" wurde aktualisiert";
    }

    public String deleteModule(Module module){
        if (module.getId()==null){
            return "Keine Modul id";
        }
        moduleRepository.delete(module);
        return "Module " + module.getModuleName() +" wurde gelöscht";
    }

}
