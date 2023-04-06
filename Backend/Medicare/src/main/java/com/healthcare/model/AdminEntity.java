package com.healthcare.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Admin")
public class AdminEntity {

	@Id
	@Column(nullable=false)
	private String email;
	@Column
	private String password;
	public AdminEntity(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public AdminEntity() {
		super();
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "AdminEntity [email=" + email + ", password=" + password + "]";
	}
	
	
	
	
	
}
