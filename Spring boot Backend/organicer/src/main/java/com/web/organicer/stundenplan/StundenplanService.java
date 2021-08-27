package com.web.organicer.stundenplan;


import com.web.organicer.security.jwt.JwtUtil;
import com.web.organicer.student.Student;
import com.web.organicer.student.StudentService;
import com.web.organicer.termin.Termin;
import com.web.organicer.termin.TerminRepository;
import com.web.organicer.termin.TerminService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;


@Service
@AllArgsConstructor
public class StundenplanService {

    private final StundenplanRepository stundenplanRepository;
    private final TerminRepository terminrepository;
    private final StudentService studentService;
    private final JwtUtil jwtUtil;

    public ArrayList<Termin> getStundenplanById(Long id){

        ArrayList<Termin> termine = new ArrayList<>();
        ArrayList<Long> terminId = new ArrayList<>();

        Stundenplan stundenplan = stundenplanRepository.findById(id).orElseThrow(() -> new UsernameNotFoundException("Stundenplan not found"));
        terminId = stundenplan.getTerminId();

        for(Long ids:terminId){
            termine.add(terminrepository.findById(ids).orElseThrow(() -> new UsernameNotFoundException("Termin not found")));
        }
        return termine;
    }

    public String postStundenplan(Stundenplan stundenplan, HttpServletRequest request){

        String token = request.getHeader("Authorization").substring(7);
        String email = jwtUtil.extractUsername(token);
        Student student = studentService.loadUserByEmail(email);

        if (stundenplan.getId()==null){

            //String back = addNewStundenplan(stundenplan);
            //Long stundenplanId = student.getStundenplanId();
            //Stundenplan stundenplanTmp = stundenplanRepository.findById(stundenplanId).orElseThrow(() -> new UsernameNotFoundException("Stundenplan not found"));;

            //return back;
            }
        return updateStundenplan(stundenplan);
    }

    public Stundenplan addNewStundenplan (Stundenplan stundenplan){
        return stundenplanRepository.save(stundenplan);

        //return "Stundenplan wurde hinzugefügt";
    }

    public String updateStundenplan (Stundenplan stundenplan){
        stundenplanRepository.save(stundenplan);
        return "Stundenplan wurde aktualisiert";
    }

    public String deleteStundenplan (Stundenplan stundenplan){
        if (stundenplan.getId() == null) {
            return "Keine Stundenplan id";
        }
        stundenplanRepository.delete(stundenplan);
        return "Stundenplan wurde gelöscht";
    }
}


