package com.web.organicer.security.jwt;

import lombok.Data;

@Data
public class Jwt {

    private String token;

    public Jwt(String token){
        this.token=token;
    }
}
