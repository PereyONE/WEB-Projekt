package com.web.organicer.lehrende;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface LehrendeRepository extends JpaRepository<Lehrende, Long> {
    ArrayList<Lehrende> findAll();
    ArrayList<Lehrende> findByNachname(String nachname);
    Optional<Lehrende>findById(Long id);
    Lehrende getById(Long Id);
}
