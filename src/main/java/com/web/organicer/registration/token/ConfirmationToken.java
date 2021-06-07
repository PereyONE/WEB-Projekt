package com.web.organicer.registration.token;

import com.web.organicer.student.Student;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class ConfirmationToken {

    @Id
    @SequenceGenerator(
            name = "conformation_token_sequence",
            sequenceName = "conformation_token_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "conformation_token_sequence"
    )
    private Long id;

    @Column(nullable = false)
    private String token;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "student_id"
    )
    private Student student;

    public ConfirmationToken(String token, Student student) {
        this.token = token;
        this.student= student;
    }
}
