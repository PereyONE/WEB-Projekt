package com.web.organicer.module;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ModuleRepository extends JpaRepository<Module, Long> {

    Optional<Module> findByModuleName(String ModuleName);

}
