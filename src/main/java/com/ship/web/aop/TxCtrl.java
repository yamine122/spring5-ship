package com.ship.web.aop;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ship.web.adm.Admin;
import com.ship.web.utl.Printer;

@RestController
@Transactional
@RequestMapping("/txs")
public class TxCtrl {
	@Autowired Map<String,Object> map;
	@Autowired Admin admin;
	@Autowired TxService txService;
	@Autowired Proxy proxy;
	@Autowired TxMapper txMapper;
	@Autowired Printer printer;
	//@Autowired HashMap<String, String> hashmap;
	
	@GetMapping("/crawling/{site}/{srch}")
	public void crawl(@PathVariable String site, 
		@PathVariable String srch){
		HashMap<String, String> hashmap = new HashMap<>();
		printer.accept(site+",srch "+srch);
		hashmap.clear();
		hashmap.put("site", site);
		hashmap.put("srch", srch);
		txService.crawl(hashmap);
		
		
	}
}
