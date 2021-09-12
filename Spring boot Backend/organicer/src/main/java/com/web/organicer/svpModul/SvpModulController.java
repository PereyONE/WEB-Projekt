package com.web.organicer.svpModul;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/api/svpModul")
@AllArgsConstructor
@CrossOrigin
public class SvpModulController {

    private final SvpModulService svpModulService;

    @GetMapping
    public List<SvpModul> getSvpModul(){ return svpModulService.getSvpModul(); }

    @GetMapping("/wahlmodule")
    public List<SvpModul> getSvpWahlmodule(){ return  svpModulService.getWahlSvpModule();}

    @PostMapping
    public String postSvpModul(@RequestBody SvpModul svpModul){
        return svpModulService.postSvpModul(svpModul);
    }

    @DeleteMapping
    public String deleteSvpModulq(@RequestBody SvpModul svpModul){
        return svpModulService.deleteSvpModul(svpModul);
    }
}


