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

    //Todo
    //get-/updateDummySvp, get-/updateSvpbyUser

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


