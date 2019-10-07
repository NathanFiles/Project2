package com.imageboard.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.imageboard.models.Posts;

public interface PostService {

	public Posts addPost(Posts p);
	public Posts getPost(int id);
	public List<Posts> allPosts();
	public Posts updatePost(Posts p);
	public boolean deletePost(Posts p);
	public boolean uploadImage(String keyName, MultipartFile file);
}
