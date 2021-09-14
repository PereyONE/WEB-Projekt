package com.web.organicer.faq;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping(path = "/api/faqs")
@AllArgsConstructor
@CrossOrigin
public class FaqController {

    private final FaqService faqService;

    //liefert alle FAQ's
    @GetMapping
    public List<Faq> getFaq(){
        return faqService.getFaq();
    }

    //liefert alle FAQ's einer Kategorie
    @GetMapping (path = "/{kategorie}")
    public List<Faq> getFaqByKategorie(@PathVariable String kategorie){ return faqService.getFaqByKategorie(kategorie);}

    //anlegen/updaten eines FAQ Elementes
    @PostMapping
    public String registerNewFaq(@RequestBody Faq faq){
        return faqService.postFaq(faq);
    }

    //löschen eines bestehenden FAQ Elementes
    @DeleteMapping("{id}")
    public String deleteFaq(@PathVariable Long id){
        return faqService.deleteFaq(id);
    }

}
