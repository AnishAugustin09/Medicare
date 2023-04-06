package com.healthcare.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthcare.model.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {

	@Query(value="select * from user where email=?1 and password=?2",nativeQuery=true)
	public UserEntity userLogin(String email, String pass);
	
	@Query(value="select * from user where email =?1",nativeQuery=true)
	public List<UserEntity> findByEmail(String email);
}
