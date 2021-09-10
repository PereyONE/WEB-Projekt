package com.web.organicer.student;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.web.organicer.svpModul.SvpModul;
import com.web.organicer.termin.Termin;
import com.web.organicer.verlaufsplan.Verlaufsplan;
import lombok.*;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.*;

@Data
@NoArgsConstructor
@Entity
public class Student implements UserDetails {

    @Id
    @SequenceGenerator(
            name = "student_sequence",
            sequenceName = "student_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence"
    )
    private Long id;
    private String username;
    private String email;
    private String password;
    private int semester;
    private int svpSemester;
    private ArrayList<Integer> vertiefungen;
    private ArrayList<Integer> wahlId;

    @Transient
    @JsonIgnore
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private Set<Termin> termin;

    @Transient
    @JsonIgnore
    @OneToMany(mappedBy = "student")
    private Set<Verlaufsplan> verlaufsplan;

    @Enumerated(EnumType.STRING)
    private StudentRole studentRole;
    private Boolean locked = false;
    private Boolean enabled = false;


    public Student(String username, String email, String password, StudentRole studentRole) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.studentRole = studentRole;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(studentRole.name());
        return Collections.singletonList(authority);
    }

    public void setVertiefungen(int vertiefung){vertiefungen.add(vertiefung);}

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
}
