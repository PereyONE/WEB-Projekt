package com.web.organicer.verlaufsplan;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;


@RestController
@RequestMapping(path = "/api/verlaufsplan")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class VerlaufsplanController {

    private final VerlaufsplanService verlaufsplanService;

    // gibt Verlaufsplan mit entsprechener ID zurück
    @GetMapping
    public ArrayList<Verlaufsplan> getVerlaufsplanById(HttpServletRequest request){
        return verlaufsplanService.getVerlaufsplanById(request);
    }

    @PostMapping
    public String updateVerlaufsplan(@RequestBody Verlaufsplan verlaufsplan){
        return verlaufsplanService.updateVerlaufsplan(verlaufsplan);
    }

    @DeleteMapping
    public String deleteVerlaufsplan(@RequestBody Verlaufsplan verlaufsplan){
        return verlaufsplanService.deleteVerlaufsplan(verlaufsplan);
    }
}



