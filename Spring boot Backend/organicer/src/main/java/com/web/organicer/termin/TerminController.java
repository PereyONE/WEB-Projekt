package com.web.organicer.termin;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/termine")
@AllArgsConstructor
public class TerminController {

    private final TerminService terminService;

    @GetMapping
    public List<Termin> getTermin(){
        return terminService.getTermin();
    }

    @PostMapping
    public String registerTermin(@RequestBody Termin termin){
        return terminService.postTermin(termin);
    }

    @DeleteMapping
    public String deleteTermin(@RequestBody Termin termin){
        return terminService.deleteTermin(termin);
    }

}
