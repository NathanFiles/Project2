package com.imageboard.services;

import java.util.List;

import com.imageboard.models.Posts;

public interface PostService {

	public Posts addPost(Posts p);
	public Posts getPost(int id);
	public List<Posts> allPosts();
	public Posts updatePost(Posts p);
	public boolean deletePost(Posts p);
}
