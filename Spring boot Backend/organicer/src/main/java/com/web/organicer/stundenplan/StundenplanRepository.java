package com.web.organicer.stundenplan;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StundenplanRepository extends JpaRepository<Stundenplan, Long>{
    Optional<Stundenplan> findById(Long studentId);
}

