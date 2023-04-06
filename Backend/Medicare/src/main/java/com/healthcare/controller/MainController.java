package com.healthcare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import com.healthcare.model.AdminEntity;
import com.healthcare.model.ProductEntity;
import com.healthcare.model.UserEntity;
import com.healthcare.service.MedicareService;

@SuppressWarnings("unused")
@RestController
@RequestMapping("/")
@CrossOrigin("http://localhost:4200/")
public class MainController {

	@Autowired
	private MedicareService medicareService;
	
	@GetMapping(value="/")
	public List<ProductEntity> getAllProducts(){
		return medicareService.getallProduct();
	}
	
	@GetMapping(value="/product/{id}")
	public ProductEntity getById(@PathVariable int id) {
		return medicareService.getbyId(id);
	}
	
	@PostMapping(value="/addProduct")
	public String addProduct(@RequestBody ProductEntity pe) {
		medicareService.addProduct(pe);
		return "Added successfully";
	}
	
	@DeleteMapping(value="/deleteProduct/{id}")
	public void deleteProduct(@PathVariable int id) {
		medicareService.deleteProduct(id);
	}
	
	@PutMapping(value="/product/updateProduct/{id}")
	public void updateProduct(@RequestBody ProductEntity pe,@PathVariable int id) {
		 medicareService.updateProduct(pe, id);
	}
	
	
	/*
	 * 
	 * This Part contains all the Mapping methods for User
	 * 
	 * */
	
	@GetMapping(value="/users")
	public List<UserEntity> getAllUser(){
		return medicareService.getAllUser();
	}
	
	@GetMapping(value="/user/{email}")
	public UserEntity getUserById(@PathVariable String email) {
		return medicareService.getUserById(email);
	}
	
	@PostMapping(value="/addUser")
	public void addUser(@RequestBody UserEntity u) {
		
		 BCryptPasswordEncoder crypt= new BCryptPasswordEncoder(); String
		  encodedPassword= crypt.encode(u.getPassword());
		  
		 u.setPassword(encodedPassword);
		 
		medicareService.addUser(u);
	}
	
	@PutMapping(value="/updateUser/{email}")
	public void updateUser(@RequestBody UserEntity u,@PathVariable String email) {
		medicareService.updateUser(u, email);
	}
	
	@DeleteMapping(value="/deleteUser/{email}")
	public void deleteUserById(@PathVariable String email) {
		medicareService.deleteUser(email);
	}
	
	@PostMapping(value="/userLogin")
	public String userLogin(@RequestBody UserEntity ue) {
		return medicareService.UserLogin(ue);
	}
	
	@GetMapping(value="/users/{email}")
	public List<UserEntity> findByEmail(@PathVariable String email){
		return medicareService.findByEmail(email);
	}
	
	
	
	/*
	 * 
	 * This Part contains all the Mapping methods for Admin
	 * 
	 * */
	
	@GetMapping(value="/admins")
	public List getAllAdmiin(AdminEntity ae) {
		return medicareService.getAllAccess();
	}
	
	@GetMapping(value="/admin/{id}")
	public AdminEntity getAdminById(@PathVariable String id) {
		return medicareService.getById(id);
	}
	
	@PostMapping(value="/addAdmin")
	public void addAdmin(@RequestBody AdminEntity ae) {
		//BCryptPasswordEncoder crypt =new BCryptPasswordEncoder();
		//String encodedPassword = crypt.encode(ae.getPassword());
		//ae.setPassword(encodedPassword);
		medicareService.addAdmin(ae);
	}
	
	@PutMapping(value="/updateAdmin/{id}")
	public void updateAdmin(@RequestBody AdminEntity ae,@PathVariable String id) {
		
		medicareService.updateAdmin(ae, id);
	}
	
	@DeleteMapping(value="/deleteAdmin/{id}")
	public void deleteAdmin(@PathVariable String id) {
		medicareService.deleteAdmin(id);
	}
	
	
	/*
	 * @PostMapping(value="/adminLogin") public String AdminAuth(AdminEntity ae)
	 * {return medicareService.authenticateAdmin(ae); }
	 */
	@PostMapping(value="/adminLogin")
	public String login(@RequestBody AdminEntity ae) {
		return medicareService.adminLogin(ae);
	}
	
	@PutMapping(value="/updatePassword/{email}")
	public void updatePassword(@RequestBody AdminEntity ae,@PathVariable String email) {
		 medicareService.updateAdmin(ae, email);
	}

	
}

