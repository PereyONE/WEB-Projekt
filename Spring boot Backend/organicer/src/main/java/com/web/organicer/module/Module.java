package com.web.organicer.module;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.web.organicer.termin.Termin;
import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Set;

@AllArgsConstructor
@Component
@NoArgsConstructor
@Entity
@Data
public class Module {

    @Id
    @SequenceGenerator(
            name = "module_sequence",
            sequenceName = "module_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "module_sequence"
    )
    private Long id;
    private String moduleName;
    private String moduleAbkürzung;
    private String ects;//int
    private String moduleTyp;//int
    private String vertiefung;
    private String prüfungsart;
    private String beschreibung;
    private String verfügbarkeit;
    private String oberkategorie;
    private String regelstudienzeitsieben;//int
    private String regelstudienzeitzwölf;//int
    @JsonIgnore
    @OneToMany(mappedBy = "modul")
    private Set<Termin> termin;
    private String bild;


}

