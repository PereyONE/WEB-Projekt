package com.web.organicer.faq;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FaqService {


    public final FaqRepository faqRepository;
    public List<Faq> getFaq() {

        return List.of(
            new Faq(1L,"Was ist eine ULP","Ja ist schon wichtig")
        );

    }

    public Faq addNewFaq(FaqRequest request){
        Faq faq = new Faq();
        faq.setQuestion(request.getFrage());
        faq.setAnswer(request.getAntwort());
        faqRepository.save(faq);
        return faq;

    }
}




