package com.web.organicer.svpModul;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
public class SvpModul {

    @Id
    @SequenceGenerator(
            name = "svpModul_sequence",
            sequenceName = "svpModul_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "svpModul_sequence"
    )


    private Long id;
    private String name;
    private int ects;
    private String typ;
    private boolean ulp;
}

