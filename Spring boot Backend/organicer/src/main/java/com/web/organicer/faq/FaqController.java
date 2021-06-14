package com.web.organicer.faq;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/api/faq")
@AllArgsConstructor
public class FaqController {

    private final FaqService faqService;


    @GetMapping
    public List<Faq> getFaq(){
        return faqService.getFaq();

    }
    @PostMapping()
    public Faq registerNewFaq(@RequestBody Faq faq){
        return faqService.addNewFaq(faq);

    }
}
