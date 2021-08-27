package com.web.organicer.termin;

import com.web.organicer.security.jwt.JwtUtil;
import com.web.organicer.student.Student;
import com.web.organicer.student.StudentService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;


@Service
@AllArgsConstructor
public class TerminService {
    public final TerminRepository terminRepository;
    private final StudentService studentService;
    private final JwtUtil jwtUtil;

    public ArrayList<Termin> getTermineById(HttpServletRequest request){

        String token = request.getHeader("Authorization").substring(7);
        String email = jwtUtil.extractUsername(token);
        Student student = studentService.loadUserByEmail(email);


        ArrayList<Termin> termine = terminRepository.findByStudentId(student.getId());

        return termine;
    }

    // erstellen eines neuen Termins eines Studenten
    public String postTermin(Termin termin,HttpServletRequest request){

        //Studenten über den Token herausfinden
        String token = request.getHeader("Authorization").substring(7);
        String email = jwtUtil.extractUsername(token);
        Student student = studentService.loadUserByEmail(email);

        termin.setStudent(student);

        terminRepository.save(termin);
        /*if(termin.getId()==null){
            Termin tmp = addNewTermin(termin);
            return "Neuen Termin erstellt";
        }
        Termin tmp = updateTermin(termin);
        if(tmp != null) {
            return "Termin aktualisiert";
        }
        else return null;*/
        return "Yo läuft!";
    }

    //Termin in der Datenbank anlegen
    public Termin addNewTermin(Termin termin){

        return terminRepository.save(termin);
    }
    //Termin in der Datenbank aktualisieren
    public Termin updateTermin(Termin termin){

        return terminRepository.save(termin);
    }

    //Termin aus der Datenbank und der Terminliste eines Studenten löschen
    public String deleteTermin(Termin termin,HttpServletRequest request){

        //Den Studenten über den Token herausfinden
        String token = request.getHeader("Authorization").substring(7);
        String email = jwtUtil.extractUsername(token);
        Student student = studentService.loadUserByEmail(email);

        if (termin.getId()==null){
            return "Keine Termin Id";
        }
        //löschen eines Termines aus der Datenbank
        terminRepository.delete(termin);

        //löschen des Termines aus der Terminliste
        //student.getTerminId().remove(termin.getId());

        return "Termin wurde gelöscht";
    }
}
