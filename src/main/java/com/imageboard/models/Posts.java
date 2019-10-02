package com.imageboard.models;

import java.util.Date;

public class Posts {
	
	private int p_id;
	private int p_thread_id;
	private String p_image; // This one is up for revision..not sure of the data type
	private String p_text;
	private Date p_date;
	
	
	public Posts() {
		super();
	}


	public Posts(int p_id, int p_thread_id, String p_image, String p_text, Date p_date) {
		super();
		this.p_id = p_id;
		this.p_thread_id = p_thread_id;
		this.p_image = p_image;
		this.p_text = p_text;
		this.p_date = p_date;
	}


	public Posts(int p_thread_id, String p_image, String p_text, Date p_date) {
		super();
		this.p_thread_id = p_thread_id;
		this.p_image = p_image;
		this.p_text = p_text;
		this.p_date = p_date;
	}


	public int getP_id() {
		return p_id;
	}


	public void setP_id(int p_id) {
		this.p_id = p_id;
	}


	public int getP_thread_id() {
		return p_thread_id;
	}


	public void setP_thread_id(int p_thread_id) {
		this.p_thread_id = p_thread_id;
	}


	public String getP_image() {
		return p_image;
	}


	public void setP_image(String p_image) {
		this.p_image = p_image;
	}


	public String getP_text() {
		return p_text;
	}


	public void setP_text(String p_text) {
		this.p_text = p_text;
	}


	public Date getP_date() {
		return p_date;
	}


	public void setP_date(Date p_date) {
		this.p_date = p_date;
	}


	@Override
	public String toString() {
		return "Posts [p_id=" + p_id + ", p_thread_id=" + p_thread_id + ", p_image=" + p_image + ", p_text=" + p_text
				+ ", p_date=" + p_date + "]";
	}
	
}
