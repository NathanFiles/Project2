package com.imageboard.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.imageboard.models.Posts;
import com.imageboard.repositories.PostRepository;

@Service
public class PostServiceImpl implements PostService {

	@Autowired
	PostRepository pr;
	
	@Override
	public Posts addPost(Posts b) {
		return pr.save(b);
	}

	@Override
	public Posts getPost(int id) {
		return pr.findById(id).get();
	}
	
	@Override
	public List<Posts> allPosts() {
		return (List<Posts>) pr.findAll();
	}

	@Override
	public Posts updatePost(Posts b) {
		return pr.save(b);
	}

	@Override
	public boolean deletePost(Posts b) {
		pr.delete(b);
		return true;
	}

}
