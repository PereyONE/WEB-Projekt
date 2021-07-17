package com.web.organicer.faq;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
public class Faq {


    public Faq(String frage, String antwort) {
        this.frage = frage;
        this.antwort = antwort;
    }

    @Id
    @SequenceGenerator(
            name = "faq_sequence",
            sequenceName = "faq_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "faq_sequence"
    )
    private Long id;
    private String frage;
    private String antwort;
}
