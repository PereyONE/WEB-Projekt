package com.web.organicer.bilder;


import ch.qos.logback.core.net.SyslogOutputStream;
import com.web.organicer.faq.Faq;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;



@RestController
@RequestMapping(path = "/api/bilder/module")
@AllArgsConstructor
@CrossOrigin
public class BilderModuleController {

    @PostMapping(path = "/{modul}")
    public String uploadBildModul(@RequestBody MultipartFile file){

        return "Bild hochgeladen";
    }

    @Autowired
    private Environment env;



    @Autowired
    private HttpServletRequest request;

    @PostConstruct
    public void init() {
        try {
            Files.createDirectories(Paths.get("/upload"));
        } catch (IOException e) {
            throw new RuntimeException("Could not create upload folder!");
        }
    }
/*
    @PostMapping(path = "/{lehrende}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String uploadBildLehrende(@RequestParam("file") MultipartFile file) throws IOException {
        if(file==null){
            System.out.println("pech gehabt");
        }
        System.out.println("1");
        String filePath = ("public/images/lehrende");

        //+ file.getOriginalFilename()
        System.out.println("2");
        String realPath = request.getServletContext().getRealPath(filePath);
        System.out.println("3");

        File dest = new File(filePath);
        System.out.println(dest.getName());

        //Files.copy(file.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
        //file.transferTo(dest);
        Path root = Paths.get("/Users\\justu\\WPR\\neuesRepo\\WEB-Projekt\\react_frontend\\public\\images\\lehrende");
        if (!Files.exists(root)) {
            init();
        }
        Files.copy(file.getInputStream(), root.resolve(file.getOriginalFilename()));
        System.out.println("5");

        return "Bild hochgeladen";
    }
    */

    @PostMapping( consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String uploadBildModule(@RequestParam("file") MultipartFile file) throws IOException {
        if(file==null){
            System.out.println("pech gehabt");
        }
        System.out.println("1");
        String filePath = ("public/images/lehrende");

        //+ file.getOriginalFilename()
        System.out.println("2");
        String realPath = request.getServletContext().getRealPath(filePath);
        System.out.println("3");

        File dest = new File(filePath);
        System.out.println(dest.getName());

        //Files.copy(file.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
        //file.transferTo(dest);
        Path root = Paths.get("/Users\\justu\\WPR\\neuesRepo\\WEB-Projekt\\react_frontend\\public\\images\\module");
        if (!Files.exists(root)) {
            init();
        }
        Files.copy(file.getInputStream(), root.resolve(file.getOriginalFilename()));
        System.out.println("5");

        return "Bild hochgeladen";
    }


    @PostMapping("/posts")
    public String postPost(@RequestPart("picture") MultipartFile img, @RequestPart("title") String title) {

        String fileExtension =  img.getOriginalFilename();
        String newFilename = fileExtension;
        try {
            saveFile(img, newFilename);
        } catch (IOException e) {
            e.printStackTrace();
        }

        String picturePath = "react_frontend/public/images/lehrende" + newFilename;

        System.out.println(picturePath);


        return "gespecuhertnrupg";
    }

    private void saveFile(MultipartFile multipartFile, String filename) throws IOException {
        String destination = env.getProperty("upload_base_dir") + filename;
        File file = new File(destination);
        multipartFile.transferTo(file);
    }
}
