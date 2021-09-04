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

    @Query(value = "SELECT * FROM Verlaufsplan  join svp_modul on svpmodul_id = svp_modul.id WHERE student_id =?1 and art = ?2",nativeQuery = true)
    ArrayList<Verlaufsplan> findByStudentIdAndArt(Long StudentId, String Art);

    /*@Query("SELECT * FROM svp_modul join verlaufsplan on verlaufsplan.svpmodul_id = svp_modul.id WHERE svp_modul.vertiefungspaket = ?2 And verlaufsplan.student_id = ?1")
    ArrayList<SvpModul> findByStudentIdAndVertiefungspaket(Long Id, int Vertiefungspaket);
*/
}


