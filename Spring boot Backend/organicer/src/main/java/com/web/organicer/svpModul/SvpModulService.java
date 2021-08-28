package com.web.organicer.svpModul;

import com.web.organicer.student.Student;
import com.web.organicer.student.StudentRepository;
import com.web.organicer.verlaufsplan.Verlaufsplan;
import com.web.organicer.verlaufsplan.VerlaufsplanRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class SvpModulService {

    public final SvpModulRepository svpModulRepository;
    public final StudentRepository studentRepository;
    public final VerlaufsplanRepository verlaufsplanRepository;

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

    public String connectSvpModules(Long studentId){

        ArrayList<SvpModul> module = new ArrayList<>(svpModulRepository.findByCustom(0));
        Student student = studentRepository.getById(studentId);

        for(SvpModul modul : module){
            Verlaufsplan verlaufsplan = new Verlaufsplan(student, modul, 0);
            verlaufsplanRepository.save(verlaufsplan);
        }

        return "Studienverlaufsplanmodule wurden verbunden";
    }

    public SvpModul findByName(String name){return svpModulRepository.findByName(name);}

    public SvpModul getSvpModulByVertiefungspaket(int Vertiefungspaket) {
        return svpModulRepository.findByVertiefungspaket(Vertiefungspaket);
    }
}





