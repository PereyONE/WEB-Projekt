package com.web.organicer.faq;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/api/faq")
public class FaqController {

    private final FaqService faqService;

    @Autowired
    public FaqController(FaqService faqService){
        this.faqService = faqService;
    }

    @GetMapping
    public List<Faq> getFaq(){
        return faqService.getFaq();

    }

}
