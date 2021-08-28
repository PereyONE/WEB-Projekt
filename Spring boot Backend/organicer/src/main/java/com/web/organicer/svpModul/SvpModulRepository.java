package com.web.organicer.svpModul;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Repository
@Transactional(readOnly = true)
public interface SvpModulRepository extends JpaRepository<SvpModul, Long> {

    ArrayList<SvpModul> findByCustom(int Custom);

    SvpModul findByName (String Name);

    SvpModul findByVertiefungspaket(int Vertiefungspaket);
}
