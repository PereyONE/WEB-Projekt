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
            if (!faqRepository.findByFrage(faq.getFrage()).isEmpty()){
                return "Question already exists";
            }
            return addNewFaq(faq);
        }
        return updateFaq(faq);
    }

    public String addNewFaq(Faq faq){
        faqRepository.save(faq);
        return "Faq created";
    }

    public String updateFaq(Faq faq){
        faqRepository.save(faq);
        return "Faq updated";
    }

    public String deleteFaq(Faq faq){
        if (faq.getId()==null){
            return "No Fq Id";
            }
        faqRepository.delete(faq);
        return "Faq has been deleted";
    }
}




