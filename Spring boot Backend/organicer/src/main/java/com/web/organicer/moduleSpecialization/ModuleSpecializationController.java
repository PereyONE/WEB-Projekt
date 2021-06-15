package com.web.organicer.moduleSpecialization;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "api/modulespecialization")
@AllArgsConstructor
public class ModuleSpecializationController {

    private final ModuleSpecializationService moduleSpecializationService;

    @GetMapping
    public List<ModuleSpecialization> getModulesSpecialization(){
        return moduleSpecializationService.getModuleSpecialization();
    }

    @PostMapping
    public String postModuleSpecialization (@RequestBody ModuleSpecialization moduleSpecialization){
        return moduleSpecializationService.postModuleSpecialization(moduleSpecialization);
    }

    @DeleteMapping
    public String deleteModuleSpecialzation(@RequestBody ModuleSpecialization moduleSpecialization){
        return moduleSpecializationService.deleteModuleSpecialization(moduleSpecialization);
    }

}
