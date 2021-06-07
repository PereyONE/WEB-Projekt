package com.web.organicer.registration.token;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class ConfirmationTokenService {

    private final ConfirmationTokenRepository conformationTokenRepository;

    public void saveConformationToken(ConfirmationToken token){
        conformationTokenRepository.save(token);
    }

    public Optional<ConfirmationToken> getToken(String token){
        return conformationTokenRepository.findByToken(token);
    }
}
