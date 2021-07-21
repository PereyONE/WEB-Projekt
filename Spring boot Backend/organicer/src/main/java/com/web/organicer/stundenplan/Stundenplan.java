package com.web.organicer.stundenplan;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;

@Data
@Entity
public class Stundenplan {



    @Id
    @SequenceGenerator(
            name = "stundenplan_sequence",
            sequenceName = "stundenplan_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "stundenplan_sequence"
    )

    private Long id;
    private ArrayList<Long> terminId;
    private Long studentId;
}
