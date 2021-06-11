package com.web.organicer.faq;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FaqService {

    public List<Faq> getFaq() {

        return List.of(
            new Faq(1L,"Was ist eine ULP","Ja ist schon wichtig")
        );

    }
}




