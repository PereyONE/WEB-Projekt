package com.web.organicer.stundenplan;

import com.web.organicer.termin.Termin;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@RestController
@RequestMapping(path = "/api/stundenplan")
@AllArgsConstructor
public class StundenplanController {


    private final StundenplanService stundenplanService;

    @GetMapping (path = "/{studentId}")
    public ArrayList<Termin> getStundenplanById(@PathVariable Long studentId){
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
