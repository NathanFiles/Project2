package com.imageboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.imageboard.models.Users;
import com.imageboard.services.UserService;



@CrossOrigin(origins = {"http://localhost:4200", "http://project2-imageboard.s3-website.us-east-2.amazonaws.com"})
@RestController
public class UserController {
	
	@Autowired
	UserService us;
	
	
	@PostMapping(value = "/user/login")
	public Users userLogin(@RequestParam("username") String username,
			@RequestParam("password") String password){
			return us.getUserByUsernameAndPassword(username, password);
	}
	
	@RequestMapping(value = "/user/register", method = RequestMethod.POST, consumes = "application/json")
	public Users newUsers(@RequestBody Users user) {
		return us.addUser(user);
	}
}
