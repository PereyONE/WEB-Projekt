package com.web.organicer.lehrende;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

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

    // gibt Lehrenden mit entsprechener ID zurück
    @GetMapping (path = "/{id}")
    public Lehrende getLehrendeById(@PathVariable("id") Long id){

        return lehrendeService.getLehrendeById(id);
    }
    //Lehrenden anlegen oder aktualisieren
    @PostMapping
    public String postLehrende(@RequestBody Lehrende lehrende){
        return lehrendeService.postLehrende(lehrende);
    }

    //Lehrenden löschen
    @DeleteMapping("{id}")
    public String deleteLehrende(@PathVariable Long id){
        return lehrendeService.deleteLehrende(id);
    }
}

