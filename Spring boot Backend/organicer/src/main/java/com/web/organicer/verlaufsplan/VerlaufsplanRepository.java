package com.web.organicer.verlaufsplan;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Repository
@Transactional(readOnly = true)
public interface VerlaufsplanRepository extends JpaRepository<Verlaufsplan, Long>{

    ArrayList<Verlaufsplan> findByStudentId(Long StudentId);

}


