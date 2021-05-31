package com.web.organicer.modul;

import java.util.ArrayList;

public class Modul {
    private long id;
    private String name;
    private int vertiefung;
    private ArrayList<Integer> Dozent;
    private int modultyp;
    private boolean ulp;
    private int semester;
    private int ects;
    private String beschreibung;
    private String bild;

    public Modul(String name, int vertiefung, ArrayList<Integer> dozent, int modultyp, boolean ulp, int semester, int ects, String beschreibung, String bild) {
        this.name = name;
        this.vertiefung = vertiefung;
        Dozent = dozent;
        this.modultyp = modultyp;
        this.ulp = ulp;
        this.semester = semester;
        this.ects = ects;
        this.beschreibung = beschreibung;
        this.bild = bild;
    }

    public Modul(long id, String name, int vertiefung, ArrayList<Integer> dozent, int modultyp, boolean ulp, int semester, int ects, String beschreibung, String bild) {
        this.id = id;
        this.name = name;
        this.vertiefung = vertiefung;
        Dozent = dozent;
        this.modultyp = modultyp;
        this.ulp = ulp;
        this.semester = semester;
        this.ects = ects;
        this.beschreibung = beschreibung;
        this.bild = bild;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getVertiefung() {
        return vertiefung;
    }

    public void setVertiefung(int vertiefung) {
        this.vertiefung = vertiefung;
    }

    public ArrayList<Integer> getDozent() {
        return Dozent;
    }

    public void setDozent(ArrayList<Integer> dozent) {
        Dozent = dozent;
    }

    public int getModultyp() {
        return modultyp;
    }

    public void setModultyp(int modultyp) {
        this.modultyp = modultyp;
    }

    public boolean isUlp() {
        return ulp;
    }

    public void setUlp(boolean ulp) {
        this.ulp = ulp;
    }

    public int getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }

    public int getEcts() {
        return ects;
    }

    public void setEcts(int ects) {
        this.ects = ects;
    }

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    public String getBild() {
        return bild;
    }

    public void setBild(String bild) {
        this.bild = bild;
    }
}
