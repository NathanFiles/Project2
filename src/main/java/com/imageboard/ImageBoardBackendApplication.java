package com.imageboard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(value="com.imageboard")
public class ImageBoardBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ImageBoardBackendApplication.class, args);
	}

}
