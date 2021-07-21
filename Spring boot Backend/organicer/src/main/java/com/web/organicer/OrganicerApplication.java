package com.web.organicer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//exclude = SecurityAutoConfiguration.class
@SpringBootApplication()
public class OrganicerApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrganicerApplication.class, args);
	}
}
