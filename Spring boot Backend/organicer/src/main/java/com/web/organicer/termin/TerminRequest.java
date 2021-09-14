package com.web.organicer.termin;

import com.web.organicer.svpModul.SvpModul;
import lombok.Data;

@Data
public class TerminRequest {

    private SvpModul svpModul;
    private Termin termin;
}
