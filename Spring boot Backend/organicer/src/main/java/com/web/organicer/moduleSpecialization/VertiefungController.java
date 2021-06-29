package com.web.organicer.moduleSpecialization;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "api/vertiefung")
@AllArgsConstructor
public class VertiefungController {

    private final VertiefungService vertiefungService;

    @GetMapping
    public List<Vertiefung> getVertiefung(){
        return vertiefungService.getVertiefung();
    }

    @PostMapping
    public String postVertiefung (@RequestBody Vertiefung vertiefung){
        return vertiefungService.postVertiefung(vertiefung);
    }

    @DeleteMapping
    public String deleteVertiefung(@RequestBody Vertiefung vertiefung){
        return vertiefungService.deleteVertiefung(vertiefung);
    }

}
