package com.web.organicer.student;

import java.util.ArrayList;

public class Student {
    private Long id;
    private String name;
    private String password;
    private String email;
    private int semester;
    private int spid;
    private int svpid;
    private int kalenderid;
    private ArrayList<Integer> vertifungen;
    private ArrayList<Integer> wahlfaecher;

    public Student(String name, String password, String email, int spid, int svpid, int kalenderid) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.spid = spid;
        this.svpid = svpid;
        this.kalenderid = kalenderid;
    }

    public Student(Long id, String name, String password, String email, int semester, int spid, int svpid, int kalenderid) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.semester = semester;
        this.spid = spid;
        this.svpid = svpid;
        this.kalenderid = kalenderid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getSemester() {
        return semester;
    }

    public void setSemester(int semester) {
        this.semester = semester;
    }

    public int getSpid() {
        return spid;
    }

    public void setSpid(int spid) {
        this.spid = spid;
    }

    public int getSvpid() {
        return svpid;
    }

    public void setSvpid(int svpid) {
        this.svpid = svpid;
    }

    public int getKalenderid() {
        return kalenderid;
    }

    public void setKalenderid(int kalenderid) {
        this.kalenderid = kalenderid;
    }

    public ArrayList<Integer> getVertifungen() {
        return vertifungen;
    }

    public void setVertifungen(ArrayList<Integer> vertifungen) {
        this.vertifungen = vertifungen;
    }

    public ArrayList<Integer> getWahlfaecher() {
        return wahlfaecher;
    }

    public void setWahlfaecher(ArrayList<Integer> wahlfaecher) {
        this.wahlfaecher = wahlfaecher;
    }

    public Student(Long id, String name, String password, String email, int semester, int spid, int svpid,
                   int kalenderid, ArrayList<Integer> vertifungen, ArrayList<Integer> wahlfaecher) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.semester = semester;
        this.spid = spid;
        this.svpid = svpid;
        this.kalenderid = kalenderid;
        this.vertifungen = vertifungen;
        this.wahlfaecher = wahlfaecher;


    }
}
