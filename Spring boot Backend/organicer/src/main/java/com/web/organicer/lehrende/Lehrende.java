package com.web.organicer.lehrende;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Data
public class Lehrende {

    public Lehrende(String titel, String vorname, String nachname, String email, String telefonnummer, String raum, String sprechstundeTag, String sprechstundeStart, String sprechstundeEnd, String sprechstundeBeschreibung, String bild, ArrayList module) {
        this.titel = titel;
        this.vorname = vorname;
        this.nachname = nachname;
        this.email = email;
        this.telefonnummer = telefonnummer;
        this.raum = raum;
        this.sprechstundeTag = sprechstundeTag;
        this.sprechstundeStart = sprechstundeStart;
        this.sprechstundeEnd = sprechstundeEnd;
        this.sprechstundeBeschreibung = sprechstundeBeschreibung;
        this.bild = bild;
        this.module = module;
    }

    @Id
    @SequenceGenerator(
            name = "lehrende_sequence",
            sequenceName = "lehrende_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "lehrende_sequence"
    )
    private Long id;
    private String titel;
    private String vorname;
    private String nachname;
    private String email;
    private String telefonnummer;
    private String raum;
    private String sprechstundeTag;
    private String sprechstundeStart;
    private String sprechstundeEnd;
    private String sprechstundeBeschreibung;
    private String bild;
    private ArrayList module;
}
