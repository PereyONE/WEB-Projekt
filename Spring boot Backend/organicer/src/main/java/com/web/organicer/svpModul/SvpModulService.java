package com.web.organicer.svpModul;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class SvpModulService {

    public final SvpModulRepository svpModulRepository;

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

}





