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

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(path = "/api")
@AllArgsConstructor
@CrossOrigin
public class AuthenticationController {

    private final AuthenticationManager authenticationManager;
    private final StudentService studentService;
    private final JwtUtil jwtTokenUtil;

    @PostMapping(consumes = "application/json", path = "/authenticate")
    public Jwt createAuthenticationToken(@RequestBody Student student, HttpServletResponse response) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(student.getUsername(), student.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
        return new Jwt(jwtTokenUtil.generateToken(student));
    }

    @GetMapping(path = "/authenticate/admin")
    public boolean adminAuthentication(HttpServletRequest request){return studentService.isUserAdmin(request);}
}
