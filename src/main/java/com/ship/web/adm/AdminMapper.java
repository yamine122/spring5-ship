package com.ship.web.adm;


import org.springframework.stereotype.Repository;

@Repository
public interface AdminMapper {


	public Admin selectAdminByIdPw(Admin param);

	public Admin deleteAdmin(Admin param);

	public Admin updateAdmin(Admin param);

	public Admin selectAdminById(String param);

	public Admin selectUserByIdPw(Admin param);

	
	

}
