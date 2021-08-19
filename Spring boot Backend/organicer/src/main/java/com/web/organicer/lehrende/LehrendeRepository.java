package com.web.organicer.lehrende;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface LehrendeRepository extends JpaRepository<Lehrende, Long> {

    ArrayList<Lehrende> findByNachname(String nachname);




}
