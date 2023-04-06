package com.healthcare.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="User")
public class UserEntity {

	@Id
	@Column
	private String email;
	@Column
	private String Fname;
	@Column
	private String Lname;
	@Column
	private String Password;
	@Column
	private String Mobile;
	@Column
	private String Age;
	@Column
	private String Address;
	@Column
	private String City;
	@Column
	private String State;
	@Column
	private String Pcode;
	
	
	
	public UserEntity() {
		super();
	}

	

	public UserEntity(String email, String fname, String lname, String password, String mobile,
			String age, String address, String city, String state, String pcode) {
		super();
		this.email = email;
		Fname = fname;
		Lname = lname;
		Password = password;
		Mobile = mobile;
		Age = age;
		Address = address;
		City = city;
		State = state;
		Pcode = pcode;
	}






	


	public String getPcode() {
		return Pcode;
	}



	public String getMobile() {
		return Mobile;
	}


	public void setMobile(String mobile) {
		Mobile = mobile;
	}


	public String getAge() {
		return Age;
	}


	public void setAge(String age) {
		Age = age;
	}


	public String getAddress() {
		return Address;
	}


	public void setAddress(String address) {
		Address = address;
	}


	public String getCity() {
		return City;
	}


	public void setCity(String city) {
		City = city;
	}


	public String getState() {
		return State;
	}


	public void setState(String state) {
		State = state;
	}
	


	public String getFname() {
		return Fname;
	}



	public void setFname(String fname) {
		Fname = fname;
	}



	public String getLname() {
		return Lname;
	}



	public void setLname(String lname) {
		Lname = lname;
	}



	public void setPcode(String pcode) {
		Pcode = pcode;
	}



	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	
	
	
	
}
