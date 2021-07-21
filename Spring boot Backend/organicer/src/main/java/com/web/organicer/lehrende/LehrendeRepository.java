package com.web.organicer.lehrende;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface LehrendeRepository extends JpaRepository<Lehrende, Long> {

    Optional<Lehrende> findByVorname(String vorname);

}
