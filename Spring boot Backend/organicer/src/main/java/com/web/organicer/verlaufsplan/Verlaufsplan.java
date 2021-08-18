package com.web.organicer.verlaufsplan;

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
    private Long studentId;
    private ArrayList<Long> semesterId;
}



