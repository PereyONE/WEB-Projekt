package com.web.organicer.verlaufsplan;

import com.web.organicer.student.Student;
import com.web.organicer.student.StudentService;
import com.web.organicer.svpModul.SvpModul;
import com.web.organicer.svpModul.SvpModulService;
import com.web.organicer.vertiefung.Vertiefung;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Array;
import java.util.ArrayList;


@Service
@AllArgsConstructor
public class VerlaufsplanService {

    private final VerlaufsplanRepository verlaufsplanRepository;
    private final StudentService studentService;
    private final SvpModulService svpModulService;

    public ArrayList<Verlaufsplan> getVerlaufsplanById(HttpServletRequest request) {

        Long id = studentService.getStudentIdFromRequest(request);

        return verlaufsplanRepository.findByStudentId(id);
    }

    public String updateVerlaufsplan(ArrayList<Verlaufsplan> verlaufsplan, HttpServletRequest request) {

        Student student = studentService.getStudentFromRequest(request);

        for (Verlaufsplan modul : verlaufsplan) {
            modul.setStudent(student);
            verlaufsplanRepository.save(modul);
        }
        return "Module wurde aktualisiert";
    }

    public String deleteVerlaufsplan(Verlaufsplan verlaufsplan) {
        if (verlaufsplan.getId() == null) {
            return "Kein Verlaufsplan gefunden";
        }
        verlaufsplanRepository.delete(verlaufsplan);
        return "Verlaufsplan wurde gelöscht";
    }

    public int getSvpSemesterByStudent(HttpServletRequest request) {
        return studentService.getStudentFromRequest(request).getSvpSemester();
    }

    public ArrayList<Verlaufsplan> getVerlaufplanWithoutKlausur(HttpServletRequest request) {
        return verlaufsplanRepository.findByStudentIdAndArt(studentService.getStudentIdFromRequest(request));
    }

    public String addVertiefungenToVerlaufsplan(ArrayList<Integer> vertiefung, HttpServletRequest request) {

        ArrayList<Verlaufsplan> verlaufsplan = getVerlaufsplanById(request);

        for (int vertiefungid : vertiefung) {

        }
        return "Läuft";
    }

    public String addVertiefungsModuleToStudent(ArrayList<Integer> vertiefungen, HttpServletRequest request) {

        Student realStudent = studentService.getStudentFromRequest(request);

        //alte Vertiefungen entfernen
        ArrayList<Verlaufsplan> alteVertiefungen = getVertiefungenInVerlaufsplan(realStudent.getId());
        for (Verlaufsplan plan : alteVertiefungen) {
            verlaufsplanRepository.delete(plan);
        }

        //neue Vertiefungen hinzufügen
        for (int vertiefungsnummer : vertiefungen) {
            for (SvpModul modul : svpModulService.getSvpModulByVertiefungspaket(vertiefungsnummer)) {
                Verlaufsplan plan = new Verlaufsplan(realStudent, modul, 0);
                verlaufsplanRepository.save(plan);
            }
        }

        //Platzhalter hinzufügen falls nicht 4 Vertiefungen gewählt wurden
        for (int i = vertiefungen.size(); i < 5; i++) {
            for (SvpModul modul : svpModulService.getSvpModulByVertiefungspaket(i + 8)) {
                Verlaufsplan plan = new Verlaufsplan(realStudent, modul, 0);
                verlaufsplanRepository.save(plan);
            }
        }

        return "Vertiefung/en hinzugefügt";
    }

    public String addWahlModuleToStudent(ArrayList<Integer> wahlmodule, HttpServletRequest request) {

        Student realStudent = studentService.getStudentFromRequest(request);


        //alte Wahlmodule entfernen
        ArrayList<Verlaufsplan> alteWahlmodule = getWahlmodulInVerlaufsplan(realStudent.getId());
        for (Verlaufsplan plan : alteWahlmodule) {
            verlaufsplanRepository.delete(plan);
        }

        //neue Vertiefungen hinzufügen
        for (int vertiefungsnummer : wahlmodule) {
            for (SvpModul modul : svpModulService.getSvpModulByWahlmodul(vertiefungsnummer)) {
                Verlaufsplan plan = new Verlaufsplan(realStudent, modul, 0);
                verlaufsplanRepository.save(plan);
            }
        }

        //Platzhalter hinzufügen falls nicht 4 Vertiefungen gewählt wurden
        for (int i = wahlmodule.size()+1; i < 3; i++) {
            for (SvpModul modul : svpModulService.getSvpModulByWahlmodul(i)) {
                Verlaufsplan plan = new Verlaufsplan(realStudent, modul, 0);
                verlaufsplanRepository.save(plan);
            }
        }

        return "Wahlmodule hinzugefügt";
    }

    public ArrayList<Verlaufsplan> getVertiefungenInVerlaufsplan(Long id) {
        return verlaufsplanRepository.findVertiefungenInVerlaufsplan(id);
    }

    public ArrayList<Verlaufsplan> getWahlmodulInVerlaufsplan(Long id) {
        return verlaufsplanRepository.findWahlmodulInVerlaufsplan(id);
    }
}
