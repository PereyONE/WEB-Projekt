package com.web.organicer.svpModul;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.web.organicer.student.Student;
import com.web.organicer.verlaufsplan.Verlaufsplan;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
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

    @Transient
    @JsonIgnore
    @OneToMany( mappedBy = "svpModul",cascade = CascadeType.ALL)
    private Set<Verlaufsplan> verlaufsplan;
    int custom;
    private String name;
    private String typ;//Pflichtmodul,Wahlmodul,Vertiefungsmodul
    private int ects;
    private int semester7;
    private int semester12;
    private int vertiefungspaket;
    private String art;//ULP,Klausur,Modul

    public SvpModul(String name, int custom, String typ, int ects, int semester7, int semester12, String art) {
        this.name = name;
        this.custom = custom;
        this.typ = typ;
        this.ects = ects;
        this.semester7 = semester7;
        this.semester12 = semester12;
        this.art = art;
    }
}

