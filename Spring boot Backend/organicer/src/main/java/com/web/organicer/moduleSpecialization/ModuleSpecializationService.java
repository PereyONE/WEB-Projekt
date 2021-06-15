package com.web.organicer.moduleSpecialization;

import com.web.organicer.module.Module;
import com.web.organicer.module.ModuleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ModuleSpecializationService {

    private final ModuleSpecializationRepository moduleSpecializationRepository;

    public List<ModuleSpecialization> getModuleSpecialization(){

        return moduleSpecializationRepository.findAll();
    }

    public String postModuleSpecialization(ModuleSpecialization moduleSpecialization){
        if(moduleSpecialization.getId()==null){
            if(!moduleSpecializationRepository.findByName(moduleSpecialization.getName()).isEmpty()){
                return "Specialization already exists";
            }
            return addNewModuleSpecialization(moduleSpecialization);
        }
        return updateModuleSpecialization(moduleSpecialization);
    }

    public String addNewModuleSpecialization(ModuleSpecialization moduleSpecialization){
        moduleSpecializationRepository.save(moduleSpecialization);
        return "Specialization created";
    }

    public String updateModuleSpecialization(ModuleSpecialization moduleSpecialization){
        moduleSpecializationRepository.save(moduleSpecialization);
            return "Specialization updated";

    }

    public String deleteModuleSpecialization(ModuleSpecialization moduleSpecialization) {
        if (moduleSpecialization.getId() == null) {
            return "No Modulespecialization Id";
        }
        moduleSpecializationRepository.delete(moduleSpecialization);
        return "Specialization has been deleted";
    }

}


