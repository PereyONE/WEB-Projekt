package com.web.organicer.verlaufsplan;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping(path = "/api/verlaufsplan")
@AllArgsConstructor
@CrossOrigin
public class VerlaufsplanController {

    private final VerlaufsplanService verlaufsplanService;

    // gibt Verlaufsplan mit entsprechener ID zurück
    @GetMapping
    public Map<String, Object> getVerlaufsplanById(HttpServletRequest request){
        Map<String, Object> plan = new HashMap<>();
        plan.put("SvpSemester",verlaufsplanService.getSvpSemesterByStudent(request));
        plan.put("Verlaufsplan", verlaufsplanService.getVerlaufsplanById(request));
        return plan;
    }

    @GetMapping("/module/{module}")
    public Long getModuleIdBySvp(@PathVariable String module){return verlaufsplanService.getModuleByModuleAbkürzung(module);}

    @PostMapping
    public String updateVerlaufsplan(@RequestBody ArrayList<Verlaufsplan> verlaufsplan, HttpServletRequest request){
        return verlaufsplanService.updateVerlaufsplan(verlaufsplan, request);
    }

    @DeleteMapping
    public String deleteVerlaufsplan(@RequestBody Verlaufsplan verlaufsplan){
        return verlaufsplanService.deleteVerlaufsplan(verlaufsplan);
    }
}



