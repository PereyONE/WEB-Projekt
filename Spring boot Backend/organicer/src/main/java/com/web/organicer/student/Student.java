package com.web.organicer.student;

import com.sun.istack.NotNull;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@Entity
@Table(name = "student")
public class Student implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String username;
    @NotNull
    private String password;
    @NotNull
    private String email;
    private StudentRole studentRole;
    private boolean locked;
    @Enumerated(EnumType.STRING)
    private boolean enabled;

    private int semester;
    private int spid;
    private int svpid;
    private int kalenderid;
    private ArrayList<Integer> vertifungen;
    private ArrayList<Integer> wahlfaecher;

    public Student(String username, String password, String email, StudentRole studentRole, boolean locked, boolean enabled, int semester, int spid, int svpid, int kalenderid, ArrayList<Integer> vertifungen, ArrayList<Integer> wahlfaecher) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.studentRole = studentRole;
        this.locked = locked;
        this.enabled = enabled;
        this.semester = semester;
        this.spid = spid;
        this.svpid = svpid;
        this.kalenderid = kalenderid;
        this.vertifungen = vertifungen;
        this.wahlfaecher = wahlfaecher;
    }

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

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(studentRole.name());
        return Collections.singletonList(authority);
    }

    @Override
    public String getPassword() {
        return password;
    }
}
