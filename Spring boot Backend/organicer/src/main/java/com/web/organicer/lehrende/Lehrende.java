package com.web.organicer.lehrende;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.web.organicer.module.Module;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.*;


@Component
@Getter
@Setter
@NoArgsConstructor
@Entity
@Data
public class Lehrende {

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
    private String funktion;
    private String email;
    private String telefonnummer;
    private String raum;
    private String sprechstunde;
    private String bild;
    private String bildrechte;

    @JsonIgnoreProperties(value = "lehrende")
    @ManyToMany(cascade = {CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    private List<Module> modules = new ArrayList<>();

    public Lehrende(String titel, String vorname, String nachname, String funktion, String email, String telefonnummer, String raum, String sprechstunde, String bild) {
        this.titel = titel;
        this.vorname = vorname;
        this.nachname = nachname;
        this.funktion = funktion;
        this.email = email;
        this.telefonnummer = telefonnummer;
        this.raum = raum;
        this.sprechstunde = sprechstunde;
        this.bild = bild;
    }

    public void addModule(Module modul) {
        modules.add(modul);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Lehrende lehrender = (Lehrende) o;
        return Objects.equals(id, lehrender.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}
