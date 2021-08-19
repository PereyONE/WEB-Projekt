package com.web.organicer.lehrende;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping(path = "/api/lehrende")
@AllArgsConstructor
public class LehrendeController {

    private final LehrendeService lehrendeService;


    @GetMapping // gibt alle Lehrende zurück
    public List<Lehrende> getLehrende(){
        return lehrendeService.getLehrende();
    }

    @GetMapping (path = "/{id}")// gibt Lehrenden mit entsprechener ID zurück
    public Map<String,Object> getLehrendeById(@PathVariable("id") Long id){

        return lehrendeService.getLehrendeById(id);
    }

    @PostMapping
    public String postLehrende(@RequestBody Lehrende lehrende){
        return lehrendeService.postLehrende(lehrende);
    }

    @DeleteMapping
    public String deleteLehrende(@RequestBody Lehrende lehrende){
        return lehrendeService.deleteLehrende(lehrende);
    }
}

