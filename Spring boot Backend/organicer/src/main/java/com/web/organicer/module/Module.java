package com.web.organicer.module;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.web.organicer.lehrende.Lehrende;
import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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
    @JsonIgnoreProperties(value = "modules")
    @ManyToMany(mappedBy = "modules",cascade = {CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    private List<Lehrende> lehrende = new ArrayList<>();
    private String moduleAbkürzung;
    private String ects;
    private String moduleTyp;
    private String vertiefung;
    private String prüfungsart;
    private String beschreibung;
    private String verfügbarkeit;
    private String oberkategorie;
    private String regelstudienzeitsieben;//int
    private String regelstudienzeitzwölf;//int
    private String bild;
    private String bildrechte;

    public void addLehrende(Lehrende lehrender) {
        lehrende.add(lehrender);
        lehrender.getModules().add(this);
    }

    public void removeLehrende(Lehrende lehrender) {
        lehrende.remove(lehrender);
        lehrender.getModules().remove(this);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Lehrende)) return false;
        return id != null && id.equals(((Lehrende) o).getId());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

