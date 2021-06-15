package com.web.organicer.instructor;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class InstructorService {

    private final InstructorRepository instructorRepository;

    public List<Instructor> getInstructors(){
        return instructorRepository.findAll();
    }

    public String postInstructor(Instructor instructor){
        if(instructor.getId()==null){
            if(!instructorRepository.findByInstructorName(instructor.getSurname()).isEmpty()){
                return "Instuctor already exists";
            }
            return addNewInstructor(instructor);
        }
        return updateInstructor(instructor);
    }

    public String addNewInstructor(Instructor instructor){
        instructorRepository.save(instructor);
        return "Instructor created";
    }

    public String updateInstructor(Instructor instructor){
        instructorRepository.save(instructor);
        return "Instructor updated";
    }

    public String deleteInstructor(Instructor instructor){
        if(instructor.getId()==null){
            return "No Instructor Id";
        }
        instructorRepository.delete(instructor);
        return "Instructor has been deleted";
    }
}

