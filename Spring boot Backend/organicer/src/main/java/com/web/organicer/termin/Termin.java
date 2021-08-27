package com.web.organicer.termin;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.web.organicer.student.Student;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
public class Termin {

    @Id
    @SequenceGenerator(
            name = "termin_sequence",
            sequenceName = "termin_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "termin_sequence"
    )
    private Long id;

    @JsonIgnore
    @ManyToOne
    private Student student;

    private String beschreibung;
    private String wochentag;
    private String startzeit;
    private String endzeit;
    private String raum;
    private String typ;
    private int semester;

}
