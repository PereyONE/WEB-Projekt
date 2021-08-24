package com.web.organicer.termin;


import com.web.organicer.faq.Faq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Repository
public interface TerminRepository extends JpaRepository<Termin, Long>{

    Optional<Termin> findById(Long terminId);
}

