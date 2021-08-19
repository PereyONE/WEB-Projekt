package com.web.organicer.verlaufsplan;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping(path = "/api/verlaufsplan")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class VerlaufsplanController {

    private final VerlaufsplanService verlaufsplanService;

    @GetMapping // gibt Verlaufsplan mit entsprechener ID zurück
    public Verlaufsplan getVerlaufsplanById(HttpServletRequest request){

        return verlaufsplanService.getVerlaufsplanById(request);
    }

    @PostMapping
    public String postVerlaufsplan(@RequestBody Verlaufsplan verlaufsplan){
        return verlaufsplanService.postVerlaufsplan(verlaufsplan);
    }

    @DeleteMapping
    public String deleteVerlaufsplan(@RequestBody Verlaufsplan verlaufsplan){
        return verlaufsplanService.deleteVerlaufsplan(verlaufsplan);
    }
}



