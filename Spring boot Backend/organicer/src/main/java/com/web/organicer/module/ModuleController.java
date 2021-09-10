package com.web.organicer.module;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "api/modules")
@AllArgsConstructor
@CrossOrigin
public class ModuleController {

    private final ModuleService moduleService;

    @GetMapping
    public List<Module> getModules(){
        return moduleService.getModules();
    }

    @GetMapping (path = "/{id}")// gibt Modul mit entsprechener ID zurück
    public Map<String,Object> getModulById(@PathVariable("id") Long id){

        return moduleService.getModulById(id);
    }

    @PostMapping
    public String postModule(@RequestBody Module module){
        return moduleService.postModule(module);
    }

    @DeleteMapping
    public String deleteModule(@RequestBody Module module){
        return moduleService.deleteModule(module);
    }

}
