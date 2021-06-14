package com.web.organicer.module;

import com.web.organicer.instructor.Instructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;

@Data
@Entity
public class Module {

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

