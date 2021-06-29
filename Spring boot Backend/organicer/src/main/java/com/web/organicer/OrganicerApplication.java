package com.web.organicer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class OrganicerApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrganicerApplication.class, args);
	}

}
