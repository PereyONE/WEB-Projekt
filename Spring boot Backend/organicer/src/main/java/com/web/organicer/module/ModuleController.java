package com.web.organicer.module;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "api/modules")
@AllArgsConstructor
@CrossOrigin
public class ModuleController {

    private final ModuleService moduleService;

    //
    @GetMapping
    public List<Module> getModules(){
        return moduleService.getModules();
    }

    @GetMapping(path = "/{id}")// gibt Modul mit entsprechener ID zurück
    public Module getModulById(@PathVariable("id") Long id){ return moduleService.getModulById(id);}

    @PostMapping
    public String postModule(@RequestBody Module module){ return moduleService.postModule(module); }

    @DeleteMapping(path = "/{id}")
    public String deleteModule(@PathVariable("id") Long id){ return moduleService.deleteModule(id); }

}
