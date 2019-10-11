package com.imageboard.services;

import com.imageboard.models.Users;

public interface UserService {
	public Users addUser(Users u);
	public Users getUserByUsernameAndPassword(String username, String password);
}
