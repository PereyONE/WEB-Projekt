package com.web.organicer.stundenplan;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/stundenplan")
@AllArgsConstructor
public class StundenplanController {
    /*
    private final StundenplanService stundenplanService;

    @GetMapping
    public List<Stundenplan> getStundenplan(){
            return stundenplanService.getStundenplan();
    }
    @PostMapping public String postStundenplan(@RequestBody Stundenplan stundenplan){
            return stundenplanService.postStundenplan(stundenplan);
    }

    @DeleteMapping
        public String deleteStundenplan(@RequestBody Stundenplan stundenplan){
            return stundenplanService.deleteStundenplan(stundenplan);
    }

     */
}
