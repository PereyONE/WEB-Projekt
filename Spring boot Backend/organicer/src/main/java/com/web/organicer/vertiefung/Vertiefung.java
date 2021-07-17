package com.web.organicer.vertiefung;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table
public class Vertiefung {

    public Vertiefung(String name) {
        this.name = name;
    }

    @Id
    @SequenceGenerator(
            name = "vertiefung_sequence",
            sequenceName = "vertiefung_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "vertiefung_sequence"
    )

    private Long id;
    private String name;

}
