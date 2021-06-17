package com.web.organicer.stundenplan;

import com.web.organicer.module.Module;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StundenplanRepository extends JpaRepository<Module, Long>{

    Optional<Stundenplan> findByStundenplanId(Long id);

}

