package com.imageboard.services;

import java.util.List;

import com.imageboard.models.Threads;

public interface ThreadService {

	public Threads addThread(Threads t);
	public Threads getThread(int id);
	public List<Threads> allThreads();
	public Threads updateThread(Threads t);
	public boolean deleteThread(Threads t);
}
