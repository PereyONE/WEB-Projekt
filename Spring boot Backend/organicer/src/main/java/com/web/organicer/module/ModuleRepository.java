package com.web.organicer.module;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface ModuleRepository extends JpaRepository<Module, Long> {

    Optional<Module> findByModuleName(String ModuleName);
    Module getById(Long Id);
    Module getByModuleName(String ModuleName);

    Module getByModuleAbkürzung(String moduleAbkürzung);
}
