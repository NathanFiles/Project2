package com.imageboard.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.imageboard.models.Threads;
import com.imageboard.repositories.ThreadRepository;

@Service
public class ThreadServiceImpl implements ThreadService {

	@Autowired
	ThreadRepository tr;
	
	@Override
	public Threads addThread(Threads t) {
		return tr.save(t);
	}

	@Override
	public Threads getThread(int id) {
		return tr.findById(id).get();
	}

	@Override
	public List<Threads> allThreads() {
		return (List<Threads>) tr.findAll();
	}

	@Override
	public Threads updateThread(Threads t) {
		return tr.save(t);
	}

	@Override
	public boolean deleteThread(Threads t) {
		tr.delete(t);
		return true;
	}

}
