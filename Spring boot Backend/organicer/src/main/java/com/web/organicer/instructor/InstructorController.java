package com.web.organicer.instructor;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/instructor")
@AllArgsConstructor
public class InstructorController {

    private final InstructorService instructorService;

    @GetMapping
    public List<Instructor> getInstructors(){
        return instructorService.getInstructors();
    }

    @PostMapping
    public String postInstructor(@RequestBody Instructor instructor){
        return instructorService.postInstructor(instructor);
    }

    @DeleteMapping
    public String deleteInstructor(@RequestBody Instructor instructor){
        return instructorService.deleteInstructor(instructor);
    }
}

