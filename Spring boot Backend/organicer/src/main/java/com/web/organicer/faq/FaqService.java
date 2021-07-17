package com.web.organicer.faq;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FaqService {

    public final FaqRepository faqRepository;

    public List<Faq> getFaq() {
        return faqRepository.findAll();
    }

    public String postFaq(Faq faq){
        if (faq.getId()==null){
            if (!faqRepository.findByQuestion(faq.getFrage()).isEmpty()){
                return "Frage existiert bereits";
            }
            return addNewFaq(faq);
        }
        return updateFaq(faq);
    }

    public String addNewFaq(Faq faq){
        faqRepository.save(faq);
        return "Faq erstellt";
    }

    public String updateFaq(Faq faq){
        faqRepository.save(faq);
        return "Faq aktualisiert";
    }

    public String deleteFaq(Faq faq){
        if (faq.getId()==null){
            return "Keine Faq Id";
            }
        faqRepository.delete(faq);
        return "Faq wurde gelöscht";
    }
}




