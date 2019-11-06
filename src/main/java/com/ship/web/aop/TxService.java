package com.ship.web.aop;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ship.web.pxy.Proxy;

@Transactional
@Service
public class TxService {
	@Autowired TxMapper txMapper;
	@Autowired Proxy proxy;
	//@Autowired List<String> txServicelist;
	
	@SuppressWarnings("unchecked")
	public List<?> crawl(Map<?,?> paramMap){
		List<String> txServicelist = new ArrayList<>();
		txServicelist.clear();
		txServicelist = (List<String>) proxy.crawl(paramMap);
		
		return txServicelist;
	}
}
