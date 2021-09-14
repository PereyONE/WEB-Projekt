package com.web.organicer.termin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface TerminRepository extends JpaRepository<Termin, Long>{

    Optional<Termin> findById(Long terminId);
    ArrayList<Termin> findByStudentId(Long StudentId);
    String findByBeschreibung(String Beschreibung);
}

