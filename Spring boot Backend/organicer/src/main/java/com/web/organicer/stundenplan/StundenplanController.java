package com.web.organicer.stundenplan;

import com.web.organicer.termin.Termin;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;


@RestController
@RequestMapping(path = "/api/stundenplan")
@AllArgsConstructor
@CrossOrigin
public class StundenplanController {


    private final StundenplanService stundenplanService;

    @GetMapping
    public ArrayList<Termin> getStundenplanById(@PathVariable Long studentId){
            return stundenplanService.getStundenplanById(studentId);
    }


    @PostMapping public String postStundenplan(@RequestBody Stundenplan stundenplan, HttpServletRequest request){
            return stundenplanService.postStundenplan(stundenplan,request);
    }

    @DeleteMapping
        public String deleteStundenplan(@RequestBody Stundenplan stundenplan){
            return stundenplanService.deleteStundenplan(stundenplan);
    }


}
