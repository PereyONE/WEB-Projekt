package com.web.organicer.svpModul;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.ArrayList;

@Repository
@Transactional(readOnly = true)
public interface SvpModulRepository extends JpaRepository<SvpModul, Long> {

    ArrayList<SvpModul> findByCustom(int Custom);

    SvpModul findByName (String Name);

    ArrayList<SvpModul> findByVertiefungspaket(int Vertiefungspaket);

    ArrayList<SvpModul> findByWahlmodul(int Wahlmodul);

    @Query(value = "SELECT * from svp_modul WHERE wahlmodul != 0 AND art = \"Modul\"", nativeQuery = true)
    ArrayList<SvpModul> findWahlSvpmodule();
}
