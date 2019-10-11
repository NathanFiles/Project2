package com.imageboard.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.imageboard.models.Users;
import com.imageboard.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository ur;

	@Override
	public Users getUserByUsernameAndPassword(String username, String password) {
		Users u = null;
		List<Users> list = ur.findByUsernameAndPassword(username, password);
		if(list.size() > 0) {
			u = list.get(0);
		}
		 return u;
	}

	@Override
	public Users addUser(Users u) {
		
		return ur.save(u);
	}

	
}
