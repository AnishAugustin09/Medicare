package com.healthcare.service;

import java.util.List;

import com.healthcare.model.AdminEntity;
import com.healthcare.model.ProductEntity;
import com.healthcare.model.UserEntity;

public interface MedicareService {

	// --------------------- Methods for Products ------------------------------
	public List<ProductEntity> getallProduct();
	public ProductEntity getbyId(int id);
	public ProductEntity addProduct(ProductEntity p);
	public void updateProduct(ProductEntity p, int id);
	public void deleteProduct(int id);
	public List<ProductEntity> findByName(String ProductName);
	
	
	//-----------------------Methods for users----------------------------------
	public List<UserEntity> getAllUser();
	public UserEntity getUserById(String email);
	public void addUser(UserEntity u);
	public void updateUser(UserEntity u, String email);
	public void deleteUser(String email);
	public List<UserEntity> findByEmail(String email);
	
	public String UserLogin(UserEntity ue);
	
	
	
	
	
	
	//-----------------------Methods for Admin----------------------------------
	public List<AdminEntity> getAllAccess();
	public AdminEntity getById(String id);
	public void addAdmin(AdminEntity ae);
	public void updateAdmin(AdminEntity ae, String id);
	public void deleteAdmin(String id);
	//public String authenticateAdmin(AdminEntity ae);
	public String adminLogin(AdminEntity ae);
	
	
	
}
