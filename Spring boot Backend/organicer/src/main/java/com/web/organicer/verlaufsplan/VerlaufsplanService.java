package com.web.organicer.verlaufsplan;

import com.web.organicer.student.Student;
import com.web.organicer.student.StudentService;
import com.web.organicer.svpModul.SvpModul;
import com.web.organicer.svpModul.SvpModulService;
import lombok.AllArgsConstructor;
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

        Long id= studentService.getStudentIdFromRequest(request);

        return verlaufsplanRepository.findByStudentId(id);
    }

    public String updateVerlaufsplan(ArrayList<Verlaufsplan> verlaufsplan, HttpServletRequest request){

        Student student = studentService.getStudentFromRequest(request);

        for(Verlaufsplan modul : verlaufsplan){
            modul.setStudent(student);
            verlaufsplanRepository.save(modul);
        }
        return "Module wurde aktualisiert";
    }

    public String deleteVerlaufsplan(Verlaufsplan verlaufsplan){
        if (verlaufsplan.getId()==null){
            return "Kein Verlaufsplan gefunden";
        }
        verlaufsplanRepository.delete(verlaufsplan);
        return "Verlaufsplan wurde gelöscht";
    }

    public int getSvpSemesterByStudent(HttpServletRequest request){
        return studentService.getStudentFromRequest(request).getSvpSemester();
    }

    public ArrayList<Verlaufsplan> getVerlaufplanWithoutKlausur(HttpServletRequest request){
        return verlaufsplanRepository.findByStudentIdAndArt(studentService.getStudentIdFromRequest(request),"Modul");
    }

    public String addVertiefungenToVerlaufsplan(ArrayList<Integer> vertiefung, HttpServletRequest request) {

        ArrayList<Verlaufsplan> verlaufsplan = getVerlaufsplanById(request);

        for(int vertiefungid : vertiefung){

        }
        return "Läuft";
    }

    private ArrayList<Verlaufsplan> getPlatzhalter(Long id) {
        return verlaufsplanRepository.findPlatzhalterById(id);
    }

    private ArrayList<SvpModul> getSvpModuleByVertiefungspaket(HttpServletRequest request, int vertiefungspaket) {

        Long id = studentService.getStudentIdFromRequest(request);
        ArrayList<SvpModul> vertiefungen = new ArrayList<>(verlaufsplanRepository.findByStudentIdAndVertiefungspaket(id,vertiefungspaket));

        return vertiefungen;
    }
}
