package com.web.organicer.student;

import com.web.organicer.registration.token.ConfirmationToken;
import com.web.organicer.registration.token.ConfirmationTokenService;
import com.web.organicer.security.jwt.JwtUtil;
import com.web.organicer.svpModul.SvpModul;
import com.web.organicer.svpModul.SvpModulService;
import com.web.organicer.verlaufsplan.Verlaufsplan;
import com.web.organicer.verlaufsplan.VerlaufsplanService;
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
    private final SvpModulService svpModulService;
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

        if(student.getPassword()== null){return "Kein Passwort";}
        String encodedPassword = bCryptPasswordEncoder.encode(student.getPassword());

        student.setPassword(encodedPassword);

        student.setSvpSemester(7);

        Student realStudent = studentRepository.save(student);
        svpModulService.connectSvpModules(realStudent.getId());

        String token = UUID.randomUUID().toString();
        ConfirmationToken conformationToken = new ConfirmationToken(token, student);

        conformationTokenService.saveConformationToken(conformationToken);

        return "Erfolgreich registriert hier freischalten: http://139.6.101.196:8080/api/registration/confirm?"+token;
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


    public String updateSemester(Student studentSemester, HttpServletRequest request) {

        Student student = getStudentFromRequest(request);

        if(student.getSvpSemester() != studentSemester.getSvpSemester()){
            student.setSvpSemester(studentSemester.getSvpSemester());
            studentRepository.save(student);
            return "Semester wurden upgedatet";
        }
        return "Semester bleibt gleich";
    }

    public boolean isUserAdmin(HttpServletRequest request) {
        return getStudentFromRequest(request).getStudentRole().equals(StudentRole.ADMIN);
    }

    public String updatePasswort(Student student, HttpServletRequest request) {

        if(student.getPassword().length()>7) {
            //Student Laden
            Student realStudent = getStudentFromRequest(request);
            //Neues Passwort setzten
            realStudent.setPassword(bCryptPasswordEncoder.encode(student.getPassword()));
            //Upgedateten Studenten speichern
            studentRepository.save(realStudent);

            return "Passwort upgedated";
        }
        return "Passwort zu kurz";
    }
}
