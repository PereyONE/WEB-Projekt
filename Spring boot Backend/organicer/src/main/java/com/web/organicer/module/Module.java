package com.web.organicer.module;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.ArrayList;

@Component
@Getter
@Setter
@NoArgsConstructor
@Entity
@Data
public class Module {

    public Module(String moduleName, String moduleAbkürzung, String ects, String moduleTyp, String vertiefung, String prüfungsart, String beschreibung, String verfügbarkeit, String regelstudienzeitsieben, String regelstudienzeitzwölf, ArrayList<Long> terminId, ArrayList<Long> lehrendeId, String bild) {
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
    private String ects;//int
    private String moduleTyp;//int
    private String vertiefung;
    private String prüfungsart;
    private String beschreibung;
    private String verfügbarkeit;
    private String regelstudienzeitsieben;//int
    private String regelstudienzeitzwölf;//int
    private ArrayList<Long> terminId;
    private ArrayList<Long> lehrendeId;
    private String bild;
}

