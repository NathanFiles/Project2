package com.imageboard.controller;

import java.util.List;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.imageboard.models.Posts;
import com.imageboard.services.PostService;

@CrossOrigin(origins = {"http://localhost:4200", "http://project2-imageboard.s3-website.us-east-2.amazonaws.com"})
@RestController
public class PostController {
	
	@Autowired
	PostService ps;
	
	@RequestMapping(value = "/posts", method = RequestMethod.GET)
	public List<Posts> allPosts(){
		return ps.allPosts();
	}
  
	@RequestMapping(value = "/posts/{id}/replies", method = RequestMethod.GET)
	public List<Posts> getReplies(@PathVariable("id") int id){
		return ps.getReplies(id);
	}
	
	@RequestMapping(value = "/posts/headers", method = RequestMethod.GET)
	public List<Posts> getActiveHeaders(){
		return ps.getHeaderPosts();
	}
	

	@GetMapping(value = "/posts/{id}")
	public Posts getPostById(@PathVariable("id") int id) {
		return ps.getPost(id);
	}
	
	@RequestMapping(value = "/posts", method = RequestMethod.POST, consumes = "application/json")
	public Posts createPost(@RequestBody Posts post) {
		
		return ps.addPost(post);
	}
	
	@PostMapping("/posts/create")
	public Posts uploadImage(@RequestParam(value = "username", required=false) String username, 
			@RequestParam(value = "t_id", required=false) Integer t_id,
			@RequestParam(value = "parent_id", required=false) Integer parent_id, //
			@RequestParam(value = "file", required=false) MultipartFile file, //the picture needs to be sent as file type with name = file
			@RequestParam(value = "text", required=false) String text,
			@RequestParam(value = "timeStamp", required=false) String timeStamp) {
			System.out.println(t_id);
		
			Random r = new Random();
			int rb = (r.nextInt(100000))+2;
            String keyName = "";
            boolean success = false;
            if (file != null ) {
            	keyName = ""+ rb + file.getOriginalFilename();
            	success = ps.uploadImage(keyName, file);
            }
			
			if(success) {
				String imageUrl = "https://krishnakafleybucket.s3.us-east-2.amazonaws.com/"+ keyName;
				
				Posts p = new Posts(username, t_id, parent_id, imageUrl, text, timeStamp);
				return ps.addPost(p);
				
				
			} else {
                String imageUrl = "https://static.tildacdn.com/tild3531-6533-4239-a331-613466346239/-/empty/blob.png";
                
                Posts p = new Posts(username, t_id, parent_id, imageUrl, text, timeStamp);
            	System.out.println(p);
                return ps.addPost(p);
			}
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
