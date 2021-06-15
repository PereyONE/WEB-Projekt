package com.web.organicer.instructor;


import com.web.organicer.module.Module;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InstructorRepository extends JpaRepository<Instructor, Long> {

    Optional<Module> findByInstructorName(String InstructorName);
}
