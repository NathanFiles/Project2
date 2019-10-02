package com.imageboard.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImageboardController {
	
	@RequestMapping(value = "/", method= RequestMethod.GET)
	String sayHello() {
		System.out.println("console print");
		return "Welcome to your imageboard!";
	}

}
