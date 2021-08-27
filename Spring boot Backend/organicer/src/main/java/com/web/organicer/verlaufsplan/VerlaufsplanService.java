package com.web.organicer.verlaufsplan;

import com.web.organicer.security.jwt.JwtUtil;
import com.web.organicer.student.Student;
import com.web.organicer.student.StudentRepository;
import com.web.organicer.student.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;


@Service
@AllArgsConstructor
public class VerlaufsplanService {

    private final VerlaufsplanRepository verlaufsplanRepository;
    private final StudentService studentService;
    private final JwtUtil jwtUtil;


    public ArrayList<Verlaufsplan> getVerlaufsplanById(HttpServletRequest request) {

        String token = request.getHeader("Authorization").substring(7);
        String email = jwtUtil.extractUsername(token);
        Student student = studentService.loadUserByEmail(email);

        return verlaufsplanRepository.findByStudentId(student.getId());
    }

    public String updateVerlaufsplan(Verlaufsplan verlaufsplan){
        verlaufsplanRepository.save(verlaufsplan);
        return "Module wurde aktualisiert";
    }

    public String deleteVerlaufsplan(Verlaufsplan verlaufsplan){
        if (verlaufsplan.getId()==null){
            return "Kein Verlaufsplan gefunden";
        }
        verlaufsplanRepository.delete(verlaufsplan);
        return "Verlaufsplan wurde gelöscht";
    }

}
