package com.web.organicer.faq;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface FaqRepository extends JpaRepository<Faq, Long> {

    Optional<Faq> findByFrage(String frage);
    List<Faq> findByKategorie(String kategorie);

}

