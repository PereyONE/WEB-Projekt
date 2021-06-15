package com.web.organicer.moduleSpecialization;

import com.web.organicer.module.Module;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ModuleSpecializationRepository extends JpaRepository<ModuleSpecialization, Long> {

    Optional<Module> findByModuleSpecializationName(String ModuleSpecializationName);
}
