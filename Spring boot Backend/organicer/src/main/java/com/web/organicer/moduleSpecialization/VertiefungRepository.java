package com.web.organicer.moduleSpecialization;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VertiefungRepository extends JpaRepository<Vertiefung, Long> {

    Optional<Vertiefung> findByName(String ModuleSpecializationName);
}
