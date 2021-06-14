package com.web.organicer.module;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/modules")
@AllArgsConstructor
public class ModuleController {

    private final ModuleService moduleService;

    @GetMapping
    public List<Module> getModules(){
        return moduleService.getModules();
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
