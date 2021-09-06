package com.web.organicer.module;

import com.web.organicer.lehrende.Lehrende;
import com.web.organicer.lehrende.LehrendeController;
import com.web.organicer.lehrende.LehrendeRepository;
import com.web.organicer.lehrende.LehrendeService;
import com.web.organicer.svpModul.SvpModul;
import com.web.organicer.verlaufsplan.Verlaufsplan;
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
        Module modul = getOnlyModulById(modulId);
        ArrayList<Lehrende> lehrende = getLehrendeByModuleId(modulId);

        map.put("Modul",modul);
        if(lehrende!=null) {
            map.put("Lehrende", lehrende);
        }
        return map;
    }

    public ArrayList<Lehrende> getLehrendeByModuleId(Long modulId){

        ArrayList<Lehrende> lehrende = new ArrayList<>();
        lehrende = lehrendeRepository.findAll();
        ArrayList<Lehrende> rueckgabe = new ArrayList<>();

        for(Lehrende tmp:lehrende){
            ArrayList<Long> ids = tmp.getModuleId();
            for(Long id:ids){
                if(modulId.equals(id)){
                    rueckgabe.add(tmp);
                }
            }
        }
        return rueckgabe;
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

    public ArrayList<Module> getModuleBySvpModule(ArrayList<Verlaufsplan> verlaufsplan){
        ArrayList<Module> module = new ArrayList<>();

        for (Verlaufsplan plan: verlaufsplan){
            module.add(moduleRepository.getByModuleName(plan.getSvpModul().getName()));
        }
        return module;
    }

}
