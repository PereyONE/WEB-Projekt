package com.web.organicer.instructor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;


@Getter
@Setter
@NoArgsConstructor
@Entity
public class Instructor {

    @Id
    @SequenceGenerator(
            name = "instructor_sequence",
            sequenceName = "instructor_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "instructor_sequence"
    )
    private long id;
    private String title;
    private String forename;
    private String surname;
    private String email;
    private String phoneNumber;
    private String room;
    private String consultationDay;
    private String consultationStart;
    private String consultationEnd;
    private String consultationDescription;
    private String picture;
    private ArrayList modules;
}
