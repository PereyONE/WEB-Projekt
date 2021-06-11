package com.web.organicer.moduleSpecialization;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModuleSpecializationRepository extends JpaRepository<ModuleSpecialization, Long> {
}
