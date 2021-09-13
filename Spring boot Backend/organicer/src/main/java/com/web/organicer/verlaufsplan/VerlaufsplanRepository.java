package com.web.organicer.verlaufsplan;

import com.web.organicer.svpModul.SvpModul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Repository
@Transactional(readOnly = true)
public interface VerlaufsplanRepository extends JpaRepository<Verlaufsplan, Long>{

    ArrayList<Verlaufsplan> findByStudentId(Long StudentId);

    @Query(value = "SELECT * FROM verlaufsplan  join svp_modul on svpmodul_id = svp_modul.id WHERE student_id =?1 and art = \"modul\" or art = \"ulp\"",nativeQuery = true)
    ArrayList<Verlaufsplan> findByStudentIdAndArt(Long StudentId);

    @Query(value = "SELECT * FROM svp_modul join verlaufsplan on verlaufsplan.svpmodul_id = id WHERE vertiefungspaket = ?2 And verlaufsplan.student_id = ?1",nativeQuery = true)
    ArrayList<SvpModul> findByStudentIdAndVertiefungspaket(Long Id, int Vertiefungspaket);

    @Query(value = "SELECT * FROM verlaufsplan join svp_modul on svpmodul_id = svp_modul.id WHERE student_id =?1 AND svp_modul.vertiefung = 8", nativeQuery = true)
    ArrayList<Verlaufsplan> findPlatzhalterById(Long id);

    @Query(value = "SELECT * FROM verlaufsplan  join svp_modul on svpmodul_id = svp_modul.id WHERE student_id =?1 and vertiefungspaket != 0",nativeQuery = true)
    ArrayList<Verlaufsplan> findVertiefungenInVerlaufsplan(Long id);

    @Query(value = "SELECT * FROM verlaufsplan  join svp_modul on svpmodul_id = svp_modul.id WHERE student_id =?1 and wahlmodul != 0",nativeQuery = true)
    ArrayList<Verlaufsplan> findWahlmodulInVerlaufsplan(Long id);
}


