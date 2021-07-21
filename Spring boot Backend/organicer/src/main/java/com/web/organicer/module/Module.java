package com.web.organicer.module;

import com.web.organicer.lehrende.Lehrende;
import com.web.organicer.termin.Termin;
import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;

@Data
@Entity
public class Module {

    public Module(String moduleName, String moduleAbkürzung, int ects, int moduleTyp, String vertiefung, String prüfungsart, String beschreibung, String verfügbarkeit, int regelstudienzeitsieben, int regelstudienzeitzwölf, ArrayList<Long> terminId, ArrayList<Long> lehrendeId, String bild) {
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
        this.terminId = terminId;
        this.lehrendeId = lehrendeId;
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
    private ArrayList<Long> terminId;
    private ArrayList<Long> lehrendeId;
    private String bild;
}

