package com.healthcare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.healthcare.model.AdminEntity;
@Repository
@EnableJpaRepositories
public interface AdminRepository extends JpaRepository<AdminEntity, String> {

	@Query(value="select * from admin where email=?1 and password=?2",nativeQuery=true)
	public AdminEntity login(String email, String pass);
}
