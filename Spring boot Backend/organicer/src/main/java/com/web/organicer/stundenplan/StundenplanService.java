package com.web.organicer.stundenplan;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
@AllArgsConstructor
public class StundenplanService {
    /*
    private final StundenplanRepository stundenplanRepository;

    public Stundenplan getStundenplan(){

    }

    public String postStundenplan(Stundenplan stundenplan){
        if (stundenplan.getId()==null){
            return addNewStundenplan(stundenplan);
            }
        return updateStundenplan(stundenplan);
    }

    public String addNewStundenplan (Stundenplan stundenplan){
        stundenplanRepository.save(stundenplan);
        return "Stundenplan wurde hinzugefügt";
    }

    public String updateStundenplan (Stundenplan stundenplan){
        stundenplanRepository.save(stundenplan);
        return "Stundenplan wurde aktualisiert";
    }

    public String deleteStundenplan (Stundenplan stundenplan){
        if (stundenplan.getId() == null) {
            return "Keine Stundenplan id";
        }
        stundenplanRepository.delete(stundenplan);
        return "Stundenplan wurde gelöscht";
    }

     */
}


