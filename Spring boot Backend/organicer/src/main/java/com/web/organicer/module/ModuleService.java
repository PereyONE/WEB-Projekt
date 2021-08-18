package com.web.organicer.module;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ModuleService {

    private final ModuleRepository moduleRepository;

    public List<Module> getModules(){
        return moduleRepository.findAll();
    }

    public Module getModulById(Long modulId) {
        return moduleRepository.findById(modulId).orElseThrow(() -> new UsernameNotFoundException("Modul nor found"));
    }


    public String postModule(Module module){
        if (module.getId()==null){
            if (!moduleRepository.findByModuleName(module.getModuleName()).isEmpty()){
                return "Module" + module.getModuleName() +"existiert bereits";
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
