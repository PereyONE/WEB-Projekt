package com.web.organicer.termin;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@RestController
@RequestMapping(path = "/api/termine")
@CrossOrigin
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

    @PostMapping("/add")
    public String postCustomTermin(@RequestBody TerminRequest terminRequest){
        return terminService.postTermin(terminRequest.getSvpModul(),terminRequest.getTermin());
    }

    @DeleteMapping("{id}")
    public String deleteTermin(@PathVariable Long id,HttpServletRequest request){
        return terminService.deleteTermin(id,request);
    }
}
