package com.web.organicer.svpModul;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.web.organicer.termin.Termin;
import com.web.organicer.verlaufsplan.Verlaufsplan;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.List;
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
    @OneToMany(mappedBy = "svpModul", cascade = CascadeType.ALL)
    private Set<Verlaufsplan> verlaufsplan;

    @OneToMany(mappedBy = "svpModul",cascade = CascadeType.ALL)
    private List<Termin> termin;

    int custom;
    private String name;
    private String typ;//Pflichtmodul,Wahlmodul,Vertiefungsmodul
    private int ects;//ects punkte
    private int semester7;//position in der regelstudienzeit mit 7 semestern
    private int semester12;//position in der regelstudienzeit mit 12 semestern
    private int vertiefungspaket;
    private int wahlmodul;
    private String verfuegbarkeit;//wintersemester,sommersemester
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

