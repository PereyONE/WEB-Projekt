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

    public Faq addNewFaq(Faq faq){
        faqRepository.save(faq);
        return faq;
    }
}




