package com.web.organicer.bilder;


import com.web.organicer.faq.Faq;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping(path = "/api/bilder")
@AllArgsConstructor
@CrossOrigin
public class BilderController {

    @PostMapping(path = "/{modul}")
    public String uploadBildModul(@RequestBody MultipartFile file){

        return "Bild hochgeladen";
    }


    @Autowired
    private HttpServletRequest request;

    @PostMapping(path = "/{lehrende}")
    public String uploadBildLehrende(@RequestBody MultipartFile file) throws IOException {
        String filePath = ("react_frontend/public/images/lehrende/" + file.getOriginalFilename());
        String realPath = request.getServletContext().getRealPath(filePath);

        File dest = new File(filePath);
        file.transferTo(dest);
        return "Bild hochgeladen";
    }
}

