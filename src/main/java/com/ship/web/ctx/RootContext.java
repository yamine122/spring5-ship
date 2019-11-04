package com.ship.web.ctx;

import javax.sql.DataSource;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
@Import({
	MyBatisContext.class, ServletContext.class
})

@Configuration
@MapperScan(basePackages = {"com.ship.web"})
@ComponentScan(basePackages = {"com.ship.web"})
public class RootContext {
	@Bean
	public DataSource dataSource() {
		
		
		 DriverManagerDataSource dataSource = new DriverManagerDataSource();

		    dataSource.setDriverClassName("com.mysql.jdbc.Driver");
		    dataSource.setUrl("jdbc:mysql://localhost:3306/ship?serverTimezone=UTC");
		    dataSource.setUsername("ship");
		    dataSource.setPassword("ship");
		    
		return dataSource;
	}
	@Bean
	public DataSourceTransactionManager txManager() {
		
		return new DataSourceTransactionManager(dataSource());
	}
	
}
