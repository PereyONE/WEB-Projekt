package com.web.organicer.registration;

import com.web.organicer.security.jwt.JwtUtil;
import com.web.organicer.student.Student;
import com.web.organicer.student.StudentRepository;
import com.web.organicer.student.StudentService;
import com.web.organicer.svpModul.SvpModulService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(path = "api/registration")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {

    private final RegistrationService registrationService;
    private final SvpModulService svpModulService;
    private final StudentRepository studentRepository;
    private final JwtUtil jwtUtil;

    @PostMapping(consumes = "application/json")
    public String register(@RequestBody Student student){
        System.out.println("MOINSEN:-- "+student.getEmail());
        return registrationService.register(student);
    }

    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token, HttpServletRequest request){

        String username = registrationService.confirmToken(token);;
        Student student = studentRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));

        svpModulService.createSvpModule(student.getId());

        return "Deine Email-Addresse ist verifiziert, Du kannst dich jetzt einloggen";
    }
}
