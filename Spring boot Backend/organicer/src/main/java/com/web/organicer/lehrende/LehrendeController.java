package com.web.organicer.lehrende;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping(path = "/api/lehrende")
@AllArgsConstructor
@CrossOrigin
public class LehrendeController {

    private final LehrendeService lehrendeService;


    @GetMapping // gibt alle Lehrende zurück
    public List<Lehrende> getLehrende(){
        return lehrendeService.getLehrende();
    }

    @GetMapping (path = "/{id}")// gibt Lehrenden mit entsprechener ID zurück
    public Lehrende getLehrendeById(@PathVariable("id") Long id){

        return lehrendeService.getLehrendeById(id);
    }

    @PostMapping
    public String postLehrende(@RequestBody Lehrende lehrende){
        return lehrendeService.postLehrende(lehrende);
    }


    @DeleteMapping("{id}")
    public String deleteLehrende(@PathVariable Long id){
        return lehrendeService.deleteLehrende(id);
    }
}

