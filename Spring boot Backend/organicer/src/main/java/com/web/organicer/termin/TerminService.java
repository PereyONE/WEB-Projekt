package com.web.organicer.termin;

import com.web.organicer.module.Module;
import com.web.organicer.module.ModuleService;
import com.web.organicer.security.jwt.JwtUtil;
import com.web.organicer.student.Student;
import com.web.organicer.student.StudentService;
import com.web.organicer.svpModul.SvpModul;
import com.web.organicer.svpModul.SvpModulService;
import com.web.organicer.verlaufsplan.Verlaufsplan;
import com.web.organicer.verlaufsplan.VerlaufsplanService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.*;


@Service
@AllArgsConstructor
public class TerminService {
    public final TerminRepository terminRepository;
    public final VerlaufsplanService verlaufsplanService;
    private final StudentService studentService;
    private final SvpModulService svpModulService;
    private final ModuleService moduleService;

    private final JwtUtil jwtUtil;

    public ArrayList<Termin> getTermineById(HttpServletRequest request) {

        Student student = studentService.getStudentFromRequest(request);

        //Verlaufsplan mit Terminen der SvpModule
        ArrayList<Verlaufsplan> verlaufsplan = verlaufsplanService.getVerlaufplanWithoutKlausur(request);
        //Persöhnliche Termine
        ArrayList<Termin> termine = terminRepository.findByStudentId(student.getId());

        //Hier werden die Termine aus den SvpModulen in Abhängikeit des Semesters vom Studenten hinzugefügt
        for (Verlaufsplan modul : verlaufsplan) {
            if (modul.getSvpModul().getTermin() != null) {
                for (Termin termin : modul.getSvpModul().getTermin()) {
                    termin.setSemester(modul.getPosition());
                    termine.add(termin);
                }
            }
        }

        return termine;
    }

    // erstellen eines neuen Termins eines Studenten
    public String postTermin(Termin termin, HttpServletRequest request) {

        //Studenten über den Token herausfinden
        Student student = studentService.getStudentFromRequest(request);

        termin.setStudent(student);
        System.out.println(termin.getBeschreibung());

        //terminRepository.save(termin);
        //return "Neuer Termin wurde angelegt";

        if (termin.getId() == null) {
            System.out.println("1");
            Termin tmp = addNewTermin(termin);
            return "Neuen Termin erstellt";
        }
        Termin tmp = updateTermin(termin);
        if (tmp != null) {
            return "Termin aktualisiert";
        } else return null;
    }

    public String postTermin(SvpModul modul, Termin termin) {

        //add Modul to Termin
        SvpModul realModul = svpModulService.getSvpModulById(modul.getId());
        termin.setSvpModul(realModul);
        List<Termin> termine = realModul.getTermin();
        termine.add(terminRepository.save(termin));
        realModul.setTermin(termine);
        svpModulService.saveSvpModul(realModul);

        return "allet joot!";
    }

    //Termin in der Datenbank anlegen
    public Termin addNewTermin(Termin termin) {
        return terminRepository.save(termin);
    }

    //Termin in der Datenbank aktualisieren
    public Termin updateTermin(Termin termin) {
        return terminRepository.save(termin);
    }

    //Termin aus der Datenbank und der Terminliste eines Studenten löschen
    public String deleteTermin(Termin termin, HttpServletRequest request) {

        //Den Studenten über den Token herausfinden
        Student student = studentService.getStudentFromRequest(request);

        if (termin.getId() == null) {
            return "Keine Termin Id";
        }
        //löschen eines Termines aus der Datenbank
        terminRepository.delete(termin);

        //löschen des Termines aus der Terminliste
        //student.getTerminId().remove(termin.getId());

        return "Termin wurde gelöscht";
    }


}
