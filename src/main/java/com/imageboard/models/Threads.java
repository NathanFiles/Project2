package com.imageboard.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "threads")
public class Threads {
	
	@Id
	@SequenceGenerator(sequenceName = "t_id_maker", name = "t_seq", allocationSize = 1)
	@GeneratedValue(generator = "t_seq", strategy=GenerationType.SEQUENCE)
	@Column(name = "t_id")
	
	private int tid;
	private int num_posts;
	private int active;
	
	public Threads() {
		super();
	}

	public Threads(int t_id, int num_posts, int active) {
		super();
		this.tid = t_id;
		this.num_posts = num_posts;
		this.active = active;
	}

	public Threads(int num_posts, int active) {
		super();
		this.num_posts = num_posts;
		this.active = active;
	}

	public int getT_id() {
		return tid;
	}

	public void setT_id(int t_id) {
		this.tid = t_id;
	}

	public int getNum_posts() {
		return num_posts;
	}

	public void setNum_posts(int num_posts) {
		this.num_posts = num_posts;
	}

	public int getActive() {
		return active;
	}

	public void setActive(int active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Threads [t_id=" + tid + ", num_posts=" + num_posts + ", active=" + active + "]";
	}

}
