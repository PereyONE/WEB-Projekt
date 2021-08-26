package com.web.organicer.termin;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;


@RestController
@RequestMapping(path = "/api/termine")
@AllArgsConstructor
public class TerminController {

    private final TerminService terminService;

    @GetMapping
    public ArrayList<Termin> getTermineById(HttpServletRequest request){
        return terminService.getTermineById(request);
    }

    @PostMapping
    public String postTermin(@RequestBody Termin termin,HttpServletRequest request){
        return terminService.postTermin(termin,request);
    }

    @DeleteMapping
    public String deleteTermin(@RequestBody Termin termin,HttpServletRequest request){
        return terminService.deleteTermin(termin,request);
    }
}
