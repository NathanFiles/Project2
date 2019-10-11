package com.imageboard.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "userlist")
public class Users {

	
	@Id
	@SequenceGenerator(sequenceName = "u_id_maker", name = "u_seq", allocationSize = 1)
	@GeneratedValue(generator = "u_seq", strategy=GenerationType.SEQUENCE)
	@Column
	private int u_id;
	private String username;
	private String password;
	//private String name;
	private int type;
	
	
	public Users() {
		super();
	}


	public Users(int u_id, String username, String password, int type) {
		super();
		this.u_id = u_id;
		this.username = username;
		this.password = password;
		//this.name = name;
		this.type = type;
	}


	public Users(String username, String password, int type) {
		super();
		this.username = username;
		this.password = password;
		//this.name = name;
		this.type = type;
	}


	public int getU_id() {
		return u_id;
	}


	public void setU_id(int u_id) {
		this.u_id = u_id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public int getType() {
		return type;
	}


	public void setType(int type) {
		this.type = type;
	}


	@Override
	public String toString() {
		return "Users [u_id=" + u_id + ", username=" + username + ", password=" + password
				+ ", type=" + type + "]";
	}

	
}
