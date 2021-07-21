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

    @PostMapping
    public String postInstructor(@RequestBody Lehrende lehrende){
        return lehrendeService.postLehrende(lehrende);
    }

    @DeleteMapping
    public String deleteInstructor(@RequestBody Lehrende lehrende){
        return lehrendeService.deleteLehrende(lehrende);
    }
}

