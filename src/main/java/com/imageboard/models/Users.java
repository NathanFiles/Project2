package com.imageboard.models;

public class Users {

	private int u_id;
	private String username;
	private String password;
	private String name;
	private int type;
	
	
	public Users() {
		super();
	}


	public Users(int u_id, String username, String password, String name, int type) {
		super();
		this.u_id = u_id;
		this.username = username;
		this.password = password;
		this.name = name;
		this.type = type;
	}


	public Users(String username, String password, String name, int type) {
		super();
		this.username = username;
		this.password = password;
		this.name = name;
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


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getType() {
		return type;
	}


	public void setType(int type) {
		this.type = type;
	}


	@Override
	public String toString() {
		return "Users [u_id=" + u_id + ", username=" + username + ", password=" + password + ", name=" + name
				+ ", type=" + type + "]";
	}

	
}
