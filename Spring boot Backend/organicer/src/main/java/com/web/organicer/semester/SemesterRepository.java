package com.web.organicer.semester;

import com.web.organicer.faq.Faq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface SemesterRepository extends JpaRepository<Semester,Long>{


}


