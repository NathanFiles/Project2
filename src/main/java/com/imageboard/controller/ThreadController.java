package com.imageboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.imageboard.models.Threads;
import com.imageboard.services.ThreadService;

@CrossOrigin(origins = {"http://localhost:4200", "http://project2-imageboard.s3-website.us-east-2.amazonaws.com"})
@RestController
public class ThreadController {
	
	@Autowired
	ThreadService ts;

	@RequestMapping(value = "/threads", method = RequestMethod.GET)
	public List<Threads> allThreads(){
		return ts.allThreads();
	}
	
	@RequestMapping(value = "/threads/active", method = RequestMethod.GET)
	public List<Threads> activeThreads(){
		return ts.activeThreads();
	}
	
	@GetMapping(value = "/threads/{id}")
	public Threads getThreadById(@PathVariable("id") int id) {
		return ts.getThread(id);
	}
	
	@RequestMapping(value = "/threads", method = RequestMethod.POST, consumes = "application/json")
	public Threads createThread(@RequestBody Threads thread) {
		return ts.addThread(thread);
	}
	
	@RequestMapping(value = "/threads", method = RequestMethod.PUT, consumes = "application/json")
	public Threads updateThread(@RequestBody Threads thread) {
		return ts.updateThread(thread);
	}
	
	@RequestMapping(value = "/threads/{id}", method= RequestMethod.DELETE)
	public boolean removeThread(@PathVariable("id") int id) {
		return ts.deleteThread(ts.getThread(id));
	}
}
