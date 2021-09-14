package com.web.organicer.faq;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@AllArgsConstructor
public class FaqService {

    public final FaqRepository faqRepository;

    //gibt alle FAQ's aus der Datenbank zurück
    public List<Faq> getFaq() {
        return faqRepository.findAll();
    }

    //gibt alle FAQ's einer Kategorie aus der Datenbank zurück
    public List<Faq> getFaqByKategorie(String kategorie){
        return faqRepository.findByKategorie(kategorie);
    }

    //FAQ anlegen oder updaten
    public String postFaq(Faq faq){
        if (faq.getId()==null){
            //überprüfen ob es die Frage bereits gibt
            if (!faqRepository.findByFrage(faq.getFrage()).isEmpty()){
                return "Frage existiert bereits";
            }
            return addNewFaq(faq);
        }
        return updateFaq(faq);
    }

    //FAQ neu anlegen
    public String addNewFaq(Faq faq){
        faqRepository.save(faq);
        return "Faq erstellt";
    }

    //FAQ aktualisieren
    public String updateFaq(Faq faq){
        faqRepository.save(faq);
        return "Faq aktualisiert";
    }

    public String deleteFaq(Long id){
        if (id==null){
            return "Keine Faq Id";
            }
        Faq faq = faqRepository.findById(id).get();
        faqRepository.delete(faq);
        return "Faq wurde gelöscht";
    }
}




