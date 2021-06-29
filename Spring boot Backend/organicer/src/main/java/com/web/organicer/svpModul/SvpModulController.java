package com.web.organicer.svpModul;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/svpModul")
@AllArgsConstructor
public class SvpModulController {

    private final SvpModulService svpModulService;

    @GetMapping
    public List<SvpModul> getSvpModul(){
        return svpModulService.getSvpModul();
    }

    @PostMapping
    public String postSvpModul(@RequestBody SvpModul svpModul){
        return svpModulService.postSvpModul(svpModul);
    }

    @DeleteMapping
    public String deleteSvpModulq(@RequestBody SvpModul svpModul){
        return svpModulService.deleteSvpModul(svpModul);
    }
}


