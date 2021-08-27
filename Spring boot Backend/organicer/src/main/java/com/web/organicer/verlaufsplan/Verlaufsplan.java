package com.web.organicer.verlaufsplan;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.web.organicer.student.Student;
import com.web.organicer.svpModul.SvpModul;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;

@Data
@Entity
@NoArgsConstructor
public class Verlaufsplan {


    @Id
    @SequenceGenerator(
            name = "verlaufsplan_sequence",
            sequenceName = "verlaufsplan_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "verlaufsplan_sequence"
    )
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "svpmodul_id")
    private SvpModul svpModul;

    private int position;

    public Verlaufsplan(Student student, SvpModul svpModul, int position) {
        this.student = student;
        this.svpModul = svpModul;
        this.position = position;
    }
}



