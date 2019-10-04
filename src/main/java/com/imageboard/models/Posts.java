package com.imageboard.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
@Entity
@Table(name="posts")
public class Posts {
	@Id
	@SequenceGenerator(sequenceName = "p_id_maker", name = "p_seq", allocationSize=1)
	@GeneratedValue(generator = "p_seq", strategy=GenerationType.SEQUENCE)
	@Column
	private int p_id;
	
	private String username;
	
	private int t_id;
	
	private int parent_id;
	
	private String image; // This one is up for revision..not sure of the data type
	
	private String text;
	
	private String timestamp;
	

	public Posts() {
		super();
	}


	public Posts(String username, int t_id, int parent_id, String image, String text, String timestamp) {
		super();
		this.username = username;
		this.t_id = t_id;
		this.parent_id = parent_id;
		this.image = image;
		this.text = text;
		this.timestamp = timestamp;
	}






	public Posts(int p_id, String username, int t_id, int parent_id, String image, String text, String timestamp) {
		super();
		this.p_id = p_id;
		this.username = username;
		this.t_id = t_id;
		this.parent_id = parent_id;
		this.image = image;
		this.text = text;
		this.timestamp = timestamp;
	}






	public int getP_id() {
		return p_id;
	}


	public void setP_id(int p_id) {
		this.p_id = p_id;
	}


	public int getT_id() {
		return t_id;
	}


	public void setT_id(int t_id) {
		this.t_id = t_id;
	}


	public int getParent_id() {
		return parent_id;
	}


	public void setParent_id(int parent_id) {
		this.parent_id = parent_id;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}


	public String getText() {
		return text;
	}


	public void setText(String text) {
		this.text = text;
	}


	public String getTimestamp() {
		return timestamp;
	}


	public void setTimestamp(String timestamp) {
		this.timestamp = timestamp;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	@Override
	public String toString() {
		return "Posts [p_id=" + p_id + ", username=" + username + ", t_id=" + t_id + ", parent_id=" + parent_id
				+ ", image=" + image + ", text=" + text + ", timestamp=" + timestamp + "]";
	}
	
	
	
}
