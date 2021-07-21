package com.web.organicer.semester;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;

@Data
@Entity
@NoArgsConstructor
public class Semester {

    @Id
    @SequenceGenerator(
            name = "semester_sequence",
            sequenceName = "semester_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "semester_sequence"
    )
    private Long id;
    private int semester;
    private ArrayList<Long> svpModul;
}