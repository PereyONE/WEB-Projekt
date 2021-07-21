package com.web.organicer.security.jwt;

import com.web.organicer.student.Student;
import com.web.organicer.student.StudentService;
import lombok.AllArgsConstructor;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {

    private AuthenticationManager authenticationManager;
    private final StudentService studentService;
    private final JwtUtil jwtTokenMokenUtil;

    @PostMapping(consumes = "application/json", path = "/authenticate")
    public Jwt createAuthenticationToken(@RequestBody Student student) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(student.getUsername(), student.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or passwort", e);
        }
        return new Jwt(jwtTokenMokenUtil.generateToken(student));
    }
}