package com.web.organicer.termin;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class Termin {

    private Long id;
    private String wochentag;
    private String startzeit;
    private String endzeit;
    private String raum;
    private String typ;
}
