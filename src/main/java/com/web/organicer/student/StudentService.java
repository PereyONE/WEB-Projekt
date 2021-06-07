package com.web.organicer.student;

import com.web.organicer.registration.token.ConfirmationToken;
import com.web.organicer.registration.token.ConfirmationTokenService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@AllArgsConstructor
public class StudentService implements UserDetailsService {

    private final StudentRepository studentRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService conformationTokenService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return studentRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("User nor found"));
    }

    public String signUpStudent(Student student) {
        boolean studentExists = studentRepository.findByEmail(student.getEmail()).isPresent();

        if (studentExists) {
            throw new IllegalStateException("email already taken!");
        }

        String encodedPassword = bCryptPasswordEncoder.encode(student.getPassword());

        student.setPassword(encodedPassword);

        studentRepository.save(student);

        String token = UUID.randomUUID().toString();
        ConfirmationToken conformationToken = new ConfirmationToken(
                token,
                student
        );

        conformationTokenService.saveConformationToken(conformationToken);

        return token;
    }

    public int enableStudent(String email){
        return studentRepository.enableStudent(email);
    }
}
