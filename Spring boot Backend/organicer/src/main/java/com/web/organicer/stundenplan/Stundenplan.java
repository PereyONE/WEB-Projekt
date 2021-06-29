package com.web.organicer.stundenplan;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;

@Data
@Entity
public class Stundenplan {

    public Stundenplan(ArrayList<Integer> termine) {
        this.termine = termine;
    }

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
    private ArrayList<Integer> termine;
}
