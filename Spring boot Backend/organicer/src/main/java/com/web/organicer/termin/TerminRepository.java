package com.web.organicer.termin;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TerminRepository extends JpaRepository<Termin, Long>{

}

