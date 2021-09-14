package com.web.organicer.bilder;


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

@RestController
@RequestMapping(path = "/api/bilder/lehrende")
@AllArgsConstructor
@CrossOrigin
public class BilderLehrendeController {

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

    @PostMapping( consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String uploadBildLehrende(@RequestParam("file") MultipartFile file) throws IOException {
        if(file==null){
            System.out.println("pech gehabt");
        }
        String filePath = ("public/images/lehrende");

        String realPath = request.getServletContext().getRealPath(filePath);
        File dest = new File(filePath);
        System.out.println(dest.getName());

        Path root = Paths.get("/var/www/html/build/images/lehrende");
        if (!Files.exists(root)) {
            init();
        }
        Files.copy(file.getInputStream(), root.resolve(file.getOriginalFilename()));
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


