package com.healthcare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.healthcare.model.AdminEntity;
import com.healthcare.model.ProductEntity;
import com.healthcare.model.UserEntity;
import com.healthcare.repository.AdminRepository;
import com.healthcare.repository.ProductRepository;
import com.healthcare.repository.UserRepository;
@Service
public class MedicareServiceIMPL implements MedicareService {

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Override
	public List<ProductEntity> getallProduct() {
		return productRepository.findAll();
	}

	@Override
	public ProductEntity getbyId(int id) {
		return productRepository.findById(id).get();
	}

	@Override
	public ProductEntity addProduct(ProductEntity p) {
		return productRepository.save(p);
	}

	@Override
	public void updateProduct(ProductEntity p, int id) {
		if(productRepository.findById(id).isPresent()) {
			ProductEntity pe = productRepository.findById(id).get();
			pe.setName(p.getName());
			pe.setPrice(p.getPrice());
			pe.setSeller(p.getSeller());
			pe.setDescription(p.getDescription());
			
			productRepository.save(pe);
		}
		
	}

	@Override
	public void deleteProduct(int id) {
		productRepository.deleteById(id);
		
	}

	@Override
	public List<ProductEntity> findByName(String ProductName) {
		// TODO Auto-generated method stub
		return null;
	}
	

	/*
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * */
	
	

	@Override
	public List<UserEntity> getAllUser() {
		return userRepository.findAll();
	}

	@Override
	public UserEntity getUserById(String email) {
		return userRepository.findById(email).get();
	}

	@Override
	public void addUser(UserEntity u) {
		
		userRepository.save(u);
		
	}

	@Override
	public void updateUser(UserEntity u, String email) {

		BCryptPasswordEncoder crypt= new BCryptPasswordEncoder(); 
		if(userRepository.findById(email).isPresent()) {
			UserEntity user= userRepository.findById(email).get();
			user.setFname(u.getFname());
			user.setLname(u.getLname());
			user.setAddress(u.getAddress());
			user.setAge(u.getAge());
			user.setCity(u.getCity());
			user.setState(u.getState());
			user.setPcode(u.getPcode());
			String encodedPassword=crypt.encode(u.getPassword());
			user.setPassword(encodedPassword);
			
			userRepository.save(user);
		}
		
	}

	@Override
	public void deleteUser(String email) {
		userRepository.deleteById(email);
	}
	
	public List<UserEntity> findByEmail(String email){return userRepository.findByEmail(email);}
	
	
	/*
	 * public UserEntity userLogin(UserEntity ue) { BCryptPasswordEncoder crypt= new
	 * BCryptPasswordEncoder(); String pass=crypt.encode(ue.getPassword()); return
	 * userRepository.userLogin(ue.getEmail(), pass);
	 * 
	 * }
	 */
	
	
	public String UserLogin(UserEntity ue) {
		
		 BCryptPasswordEncoder crypt= new BCryptPasswordEncoder(); 
		 String status ="";
		if(userRepository.findById(ue.getEmail()).isPresent()) {
			UserEntity user = userRepository.findById(ue.getEmail()).get();
				if((ue.getEmail().equals(user.getEmail()))&&crypt.matches(ue.getPassword(), user.getPassword()))
					return status="true";
				else if(ue.getEmail()!=user.getEmail())
					return status ="User Not Found";
				else
					return status="false";
			
		}
			return status ;
	}
		
	
	
	

	/*
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * */
	

	@Override
	public List<AdminEntity> getAllAccess() {
		return adminRepository.findAll();
	}

	@Override
	public AdminEntity getById(String id) {
		return adminRepository.findById(id).get();
	}

	@Override
	public void addAdmin(AdminEntity ae) {
		adminRepository.save(ae);
		
	}

	@Override
	public void updateAdmin(AdminEntity ae, String id) {
		if(adminRepository.findById(id).isPresent()) {
			AdminEntity admin= adminRepository.findById(id).get();
			BCryptPasswordEncoder crypt =new BCryptPasswordEncoder();
			String encodedPassword = crypt.encode(ae.getPassword());
			admin.setPassword(encodedPassword);
			
			adminRepository.save(admin);
		}
		
	}

	@Override
	public void deleteAdmin(String id) {
		adminRepository.deleteById(id);
		
	}

	@Override
	public String adminLogin(AdminEntity admin) {
		BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();
		String status="";
		 if(adminRepository.findById(admin.getEmail()).isPresent()) { 
			 AdminEntity ae = adminRepository.findById(admin.getEmail()).get();
				  if(crypt.matches(admin.getPassword(), ae.getPassword())) 
					  return status ="true"; 
				  else 
					  return status ="false"; }
		 else { return "User Not Found"; } }

	
	
	}

	

	/*
	 * @Override public String AdminAuth(AdminEntity admin) {
	 * 
	 * BCryptPasswordEncoder crypt = new BCryptPasswordEncoder(); String status="";
	 * if(adminRepository.findById(admin.getEmail()).isPresent()) { AdminEntity ae =
	 * adminRepository.findById(admin.getEmail()).get();
	 * if(crypt.matches(admin.getPassword(), ae.getPassword())) return status =
	 * "true"; else return status ="false"; }else { return "User Not Found"; } }
	 * 
	 */
	
	
/*
 * public AdminEntity adminLogin(AdminEntity a) { adminRepository.adminLogin();
 * }
 */
	 
/*
 * public String authenticateAdmin(AdminEntity ae) {
 * 
 * String status=""; BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();
 * Optional<AdminEntity> admin= adminRepository.findById(ae.getEmail());
 * if(admin.isPresent()) { AdminEntity a=admin.get();
 * if(crypt.matches(ae.getPassword(), a.getPassword())) return "valid Admin";
 * else return "Invalid Admin"; } return status = "false"; }
 */

	
	
	


