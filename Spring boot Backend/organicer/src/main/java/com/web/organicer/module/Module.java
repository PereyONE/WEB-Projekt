package com.web.organicer.module;

import com.web.organicer.lehrende.Lehrende;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;

@Data
@NoArgsConstructor
@Entity
public class Module {

    public Module(String moduleName, String moduleAbkürzung, int ects, int moduleTyp, String vertiefung, String prüfungsart, String beschreibung, String verfügbarkeit, int regelstudienzeitsieben, int regelstudienzeitzwölf, String vorlesungTag, String vorlesungStart, String vorlesungEnde, ArrayList<Lehrende> lehrende, String bild) {
        this.moduleName = moduleName;
        this.moduleAbkürzung = moduleAbkürzung;
        this.ects = ects;
        this.moduleTyp = moduleTyp;
        this.vertiefung = vertiefung;
        this.prüfungsart = prüfungsart;
        this.beschreibung = beschreibung;
        this.verfügbarkeit = verfügbarkeit;
        this.regelstudienzeitsieben = regelstudienzeitsieben;
        this.regelstudienzeitzwölf = regelstudienzeitzwölf;
        this.vorlesungTag = vorlesungTag;
        this.vorlesungStart = vorlesungStart;
        this.vorlesungEnde = vorlesungEnde;
        this.lehrende = lehrende;
        this.bild = bild;
    }

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
    private int ects;
    private int moduleTyp;
    private String vertiefung;
    private String prüfungsart;
    private String beschreibung;
    private String verfügbarkeit;
    private int regelstudienzeitsieben;
    private int regelstudienzeitzwölf;
    private String vorlesungTag;
    private String vorlesungStart;
    private String vorlesungEnde;
    private ArrayList<Lehrende> lehrende;
    private String bild;
}

