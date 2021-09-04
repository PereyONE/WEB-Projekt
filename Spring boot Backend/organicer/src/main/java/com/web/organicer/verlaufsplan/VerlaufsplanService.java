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
        return verlaufsplanRepository.findByStudentIdAndArt(studentService.getStudentIdFromRequest(request),"ULP");
    }

    /*public String addVertiefungsModulToVerlaufsplan(int vertiefung, HttpServletRequest request) {

        if(vertiefung!=0) {
            ArrayList<SvpModul> module = new ArrayList<>();
            Student student = studentService.getStudentFromRequest(request);
            if (!student.getVertiefungen().contains(vertiefung)) {
                student.setVertiefungen(vertiefung);
                svpModulService.getSvpModulByVertiefungspaket(vertiefung);

                switch (student.getVertiefungen().size()){
                    case 0:
                        verlaufsplanService.getSvpModuleByVertiefungspaket(request,vertiefung);
                        break;
                }

                return "Vertiefung wurde hinzugefügt";
            }
            return "Vertiefung schon drin";
        }
        return "Vertiefung ist null";
    }*/

    /*private ArrayList<SvpModul> getSvpModuleByVertiefungspaket(HttpServletRequest request, int vertiefungspaket) {

        Long id = studentService.getStudentIdFromRequest(request);
        //ArrayList<SvpModul> vertiefungen = new ArrayList<>(verlaufsplanRepository.findByStudentIdAndVertiefungspaket(id,vertiefungspaket));

        return vertiefungen;
    }*/
}
