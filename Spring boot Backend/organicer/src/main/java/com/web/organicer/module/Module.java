package com.web.organicer.module;

import com.web.organicer.instructor.Instructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;

@Data
@NoArgsConstructor
@Entity
public class Module {

    public Module(String moduleName, String moduleabbreviation, int ects, int moduleType, String specialization, String examDescription, String description, String availability, int normalPeriodseven, int normalPeriodtwelve, String courseDay, String courseStart, String courseEnd, ArrayList<Instructor> instructors, String picture) {
        this.moduleName = moduleName;
        this.moduleabbreviation = moduleabbreviation;
        this.ects = ects;
        this.moduleType = moduleType;
        this.specialization = specialization;
        this.examDescription = examDescription;
        this.description = description;
        this.availability = availability;
        this.normalPeriodseven = normalPeriodseven;
        this.normalPeriodtwelve = normalPeriodtwelve;
        this.courseDay = courseDay;
        this.courseStart = courseStart;
        this.courseEnd = courseEnd;
        this.instructors = instructors;
        this.picture = picture;
    }

    @Id
    @SequenceGenerator(
            name = "module_sequence",
            sequenceName = "module_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "module_sequence"
    )
    private Long id;
    private String moduleName;
    private String moduleabbreviation;
    private int ects;
    private int moduleType;
    private String specialization;
    private String examDescription;
    private String description;
    private String availability;
    private int normalPeriodseven;
    private int normalPeriodtwelve;
    private String courseDay;
    private String courseStart;
    private String courseEnd;
    private ArrayList<Instructor> instructors;
    private String picture;
}

