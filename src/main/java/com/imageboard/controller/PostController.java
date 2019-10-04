package com.imageboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.imageboard.models.Posts;
import com.imageboard.services.PostService;

@RestController
public class PostController {
	
	@Autowired
	PostService ps;
	
	@RequestMapping(value = "/posts", method = RequestMethod.GET)
	public List<Posts> allPosts(){
		return ps.allPosts();
	}

	@GetMapping(value = "/posts/{id}")
	public Posts getPostById(@PathVariable("id") int id) {
		return ps.getPost(id);
	}
	
	@RequestMapping(value = "/posts", method = RequestMethod.POST, consumes = "application/json")
	public Posts createPost(@RequestBody Posts post) {
		return ps.addPost(post);
	}
	
	@RequestMapping(value = "/posts", method = RequestMethod.PUT, consumes = "application/json")
	public Posts updatePost(@RequestBody Posts post) {
		return ps.updatePost(post);
	}
	
	@RequestMapping(value = "/posts/{id}", method= RequestMethod.DELETE)
	public boolean removePost(@PathVariable("id") int id) {
		return ps.deletePost(ps.getPost(id));
	}
	
}
