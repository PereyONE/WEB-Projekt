package com.web.organicer.moduleSpecialization;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table
public class ModuleSpecialization {
    @Id
    @SequenceGenerator(
            name = "moduleSpecialization_sequence",
            sequenceName = "moduleSpecialization_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "moduleSpecialization_sequence"
    )

    private Long id;
    private String name;

}
