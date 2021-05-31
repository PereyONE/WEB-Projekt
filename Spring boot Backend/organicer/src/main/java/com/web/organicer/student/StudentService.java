package com.web.organicer.student;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    public List<Student> getStudent() {

        return List.of(
                new Student(1L, "Perey", "pw123", "marius@perey.net",
                        10, 1, 1, 1));
    }
}
