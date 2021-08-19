package com.web.organicer.stundenplan;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/stundenplan")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class StundenplanController {


    private final StundenplanService stundenplanService;

    @GetMapping (path = "/{studentId}")
    public Stundenplan getStundenplanById(@PathVariable Long studentId){
            return stundenplanService.getStundenplanById(studentId);
    }


    @PostMapping public String postStundenplan(@RequestBody Stundenplan stundenplan){
            return stundenplanService.postStundenplan(stundenplan);
    }

    @DeleteMapping
        public String deleteStundenplan(@RequestBody Stundenplan stundenplan){
            return stundenplanService.deleteStundenplan(stundenplan);
    }


}
