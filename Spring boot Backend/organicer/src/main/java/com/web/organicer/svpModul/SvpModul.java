package com.web.organicer.svpModul;

import com.web.organicer.student.Student;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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
    @ManyToOne
    private Student student;
    private String name;
    private String typ;//Pflichtmodul,Wahlmodul,Vertiefungsmodul
    private int ects;
    private int position;
    private int semester7;
    private int semester12;
    private String art;//ULP,Klausur,Modul

    public SvpModul(Student student, String name, String typ, int ects, int position, int semester7, int semester12, String art) {
        this.student = student;
        this.name = name;
        this.typ = typ;
        this.ects = ects;
        this.position = position;
        this.semester7 = semester7;
        this.semester12 = semester12;
        this.art = art;
    }
}

