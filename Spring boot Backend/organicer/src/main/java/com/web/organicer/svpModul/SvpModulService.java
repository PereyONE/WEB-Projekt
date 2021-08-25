package com.web.organicer.svpModul;

import com.web.organicer.student.Student;
import com.web.organicer.student.StudentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class SvpModulService {

    public final SvpModulRepository svpModulRepository;
    public final StudentRepository studentRepository;

    public List<SvpModul> getSvpModul() {
        return svpModulRepository.findAll();
    }

    public String postSvpModul(SvpModul svpModul){
        if (svpModul.getId()==null){

            return addNewSvpModul(svpModul);
        }
        return updateSvpModul(svpModul);
    }

    public String addNewSvpModul(SvpModul svpModul){
        svpModulRepository.save(svpModul);
        return "Studienverlaufsplanmodul erstellt";
    }

    public String updateSvpModul(SvpModul svpModul){
        svpModulRepository.save(svpModul);
        return "Studienverlaufsplanmodul aktualisiert";
    }

    public String deleteSvpModul(SvpModul svpModul){
        if (svpModul.getId()==null){
            return "Keine Studienverlaufsplanmodul Id";
        }
        svpModulRepository.delete(svpModul);
        return "Studienverlaufplanmodul wurde gelöscht";
    }

    public String createSvpModule(Long studentId){

        Long dummyId= studentRepository.findByEmail("dummy@svp.com").get().getId();

        ArrayList<SvpModul> Module= new ArrayList<>(svpModulRepository.findByStudentId(dummyId));

        Student student = studentRepository.getById(studentId);

        for(SvpModul svpMod : Module){
            SvpModul newMod = new SvpModul(student, svpMod.getName(), svpMod.getTyp(),svpMod.getEcts(),
                    svpMod.getPosition(),svpMod.getSemester7(),svpMod.getSemester12(),svpMod.getArt());
            svpModulRepository.save(newMod);
        }

        return "Studienverlaufsplanmodule wurden erstellt";
    }

    /*public ArrayList<SvpModul> svpModulArrayList(Long studentId){
        ArrayList<SvpModul> module = new ArrayList<>();
        SvpModul Mathe1 = SvpModul(studentId, "Mathe 1", );
        return module;
    }*/
}





