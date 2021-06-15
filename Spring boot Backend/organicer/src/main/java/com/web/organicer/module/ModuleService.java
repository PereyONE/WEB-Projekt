package com.web.organicer.module;

import com.web.organicer.faq.Faq;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ModuleService {

    private final ModuleRepository moduleRepository;

    public List<Module> getModules(){
        return moduleRepository.findAll();
    }

    public String postModule(Module module){
        if (module.getId()==null){
            if (!moduleRepository.findByModuleName(module.getModuleName()).isEmpty()){
                return "Module already exists";
            }
            return addNewModule(module);
        }
        return updateModule(module);
    }

    public String addNewModule(Module module){
        moduleRepository.save(module);
        return "Module created";
    }

    public String updateModule(Module module){
        moduleRepository.save(module);
        return "Module updated";
    }

    public String deleteModule(Module module){
        if (module.getId()==null){
            return "No Module Id";
        }
        moduleRepository.delete(module);
        return "Module has been deleted";
    }

}
