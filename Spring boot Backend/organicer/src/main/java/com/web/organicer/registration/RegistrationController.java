package com.web.organicer.registration;

import com.web.organicer.student.Student;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/registration")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping(consumes = "application/json")
    public String register(@RequestBody Student student){
        System.out.println("MOINSEN:-- "+student.getEmail());
        return registrationService.register(student);
    }

    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token){
        return registrationService.confirmToken(token);
    }
}
