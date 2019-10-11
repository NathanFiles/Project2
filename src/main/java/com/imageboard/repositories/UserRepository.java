package com.imageboard.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.imageboard.models.Users;


@Repository
public interface UserRepository extends CrudRepository<Users, Integer> {
	
	List<Users> findByUsernameAndPassword(String username, String password);

}
