package com.web.organicer.student;

import com.web.organicer.registration.token.ConfirmationToken;
import com.web.organicer.registration.token.ConfirmationTokenService;
import com.web.organicer.security.jwt.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.UUID;

@Service
@AllArgsConstructor
public class StudentService implements UserDetailsService {

    private final StudentRepository studentRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService conformationTokenService;
    private final JwtUtil jwtUtil;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return studentRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User nor found"));
    }

    public Student loadUserByEmail(String email) throws UsernameNotFoundException {
        return studentRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User nor found"));
    }

    public String signUpStudent(Student student) {
        boolean studentExists = studentRepository.findByEmail(student.getEmail()).isPresent();

        if (studentExists) {
            throw new IllegalStateException("email already taken");
        }

        String encodedPassword = bCryptPasswordEncoder.encode(student.getPassword());

        student.setPassword(encodedPassword);

        student.setSvpSemester(7);

        studentRepository.save(student);

        String token = UUID.randomUUID().toString();
        ConfirmationToken conformationToken = new ConfirmationToken(token, student);

        conformationTokenService.saveConformationToken(conformationToken);

        return token;
    }

    public void saveStudent(Student student){ studentRepository.save(student);}

    public int enableStudent(String email){
        return studentRepository.enableStudent(email);
    }

    public Student getStudentFromRequest(HttpServletRequest request){

        String jwt = request.getHeader("Authorization").substring(7);
        String email = jwtUtil.extractUsername(jwt);

        return loadUserByEmail(email);
    }

    public Long getStudentIdFromRequest(HttpServletRequest request){ return getStudentFromRequest(request).getId(); }

    public String addVertiefungsModuleToStuden(ArrayList<Integer> vertiefungen, HttpServletRequest request) {

        Student student = getStudentFromRequest(request);

        for(int vertiefung: vertiefungen){

        }

        return "yo";
    }
}
