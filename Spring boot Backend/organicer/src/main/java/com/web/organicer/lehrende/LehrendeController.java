package com.web.organicer.lehrende;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/lehrende")
@AllArgsConstructor
public class LehrendeController {

    private final LehrendeService lehrendeService;

    @GetMapping // gibt alle Lehrende zurück
    public List<Lehrende> getLehrende(){
        return lehrendeService.getLehrende();
    }

    /*
    @GetMapping(path = "/{funktion") // gibt alle Mitarbeiter mit der gleichen Funktion zurück
    public List<Lehrende> getLehrendeByFunktion(@PathVariable String funktion) {return lehrendeService.getLehrendeByFunktion(funktion);}
    */

    @GetMapping(path = "/{modul}")
    public List<Lehrende> getLehrendeByModul(@PathVariable String modul){return lehrendeService.getLehrendeByModul(modul);}

    @PostMapping
    public String postInstructor(@RequestBody Lehrende lehrende){
        return lehrendeService.postLehrende(lehrende);
    }

    @DeleteMapping
    public String deleteInstructor(@RequestBody Lehrende lehrende){
        return lehrendeService.deleteLehrende(lehrende);
    }
}

