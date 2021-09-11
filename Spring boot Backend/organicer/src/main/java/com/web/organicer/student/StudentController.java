package com.web.organicer.student;

import com.web.organicer.verlaufsplan.VerlaufsplanService;
import com.web.organicer.vertiefung.VertiefungService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@RestController
@RequestMapping(path = "/api/student")
@AllArgsConstructor
@CrossOrigin
public class StudentController {

    private final StudentService studentService;
    private final VerlaufsplanService verlaufsplanService;

    @GetMapping
    public Student getStudent(HttpServletRequest request){return studentService.getStudentFromRequest(request);}

    @PostMapping("/addVertiefungen")
    public String addVertiefungsModule(@RequestBody ArrayList<Integer> vertiefungen, HttpServletRequest request){
        return verlaufsplanService.addVertiefungsModuleToStudent(vertiefungen, request);
    }

    @PostMapping("/addWahlmodule")
    public String addWahlModule(@RequestBody ArrayList<Integer> wahlmodule, HttpServletRequest request){
        return verlaufsplanService.addWahlModuleToStudent(wahlmodule, request);
    }

    @PostMapping("/updateSemester")
    public String updateSemester(@RequestBody Student student, HttpServletRequest request){ return studentService.updateSemester(student, request); }

}
