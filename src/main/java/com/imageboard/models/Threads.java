package com.imageboard.models;

public class Threads {
	
	private int t_id;
	private int t_size;
	private int t_active;
	
	public Threads() {
		super();
	}


	public Threads(int t_id, int t_size, int t_active) {
		super();
		this.t_id = t_id;
		this.t_size = t_size;
		this.t_active = t_active;
	}


	public Threads(int t_size, int t_active) {
		super();
		this.t_size = t_size;
		this.t_active = t_active;
	}


	public int getT_id() {
		return t_id;
	}


	public void setT_id(int t_id) {
		this.t_id = t_id;
	}


	public int getT_size() {
		return t_size;
	}


	public void setT_size(int t_size) {
		this.t_size = t_size;
	}


	public int getT_active() {
		return t_active;
	}


	public void setT_active(int t_active) {
		this.t_active = t_active;
	}


	@Override
	public String toString() {
		return "Threads [t_id=" + t_id + ", t_size=" + t_size + ", t_active=" + t_active + "]";
	}

}
