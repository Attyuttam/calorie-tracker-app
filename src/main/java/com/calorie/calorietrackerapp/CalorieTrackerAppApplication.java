package com.calorie.calorietrackerapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages="com.calorie.calorietrackerapp")
@EntityScan(basePackages = "com.calorie.calorietrackerapp")
public class CalorieTrackerAppApplication extends SpringBootServletInitializer{
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(CalorieTrackerAppApplication.class);
	}
	
	public static void main(String[] args) {
		SpringApplication.run(CalorieTrackerAppApplication.class, args);
	}

}
