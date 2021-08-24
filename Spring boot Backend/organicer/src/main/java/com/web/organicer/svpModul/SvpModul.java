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
    private String typ;//Pflichtmodul,Wahlmodul,Vertiefungsmodul
    private int ects;
    private int position;
    private int semester7;
    private int semester12;
    private String art;//ULP,Klausur,Modul


}

