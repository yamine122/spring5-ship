package com.ship.web.brd;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ship.web.cmm.IConsumer;
import com.ship.web.cmm.ISupplier;
import com.ship.web.pxy.Proxy;
import com.ship.web.pxy.ProxyMap;
import com.ship.web.utl.Printer;

@RestController
@RequestMapping("/articles")
public class ArticleCtrl {
	private static final Logger logger = LoggerFactory.getLogger(ArticleCtrl.class);
	
	@Autowired Article art;
	@Autowired Printer printer;
	@Autowired ArticleMapper articleMapper;
	@Autowired List<Article> list;
	@Autowired Proxy pxy;
	@Autowired ProxyMap map;
	
	
	@PostMapping("/")
	public Map<?,?> write(@RequestBody Article param){
		printer.accept("글쓰기 들어옴");
		param.setBoardType("게시판");
		printer.accept(param.toString());
		IConsumer<Article> c = t-> articleMapper.insertArticle(param);
		c.accept(param);
		ISupplier<String> s = () -> articleMapper.count();
		map.accept(Arrays.asList("msg", "count"),Arrays.asList("SUCCESS", s.get()));
		
		return map.get();
	}
	@GetMapping("/page/{pageNo}/size/{pageSize}")
	public Map<?,?> list(@PathVariable String pageNo,
			@PathVariable String pageSize){
		System.out.println("넘어온 page넘버"+pageNo);
		pxy.setPageNum(pxy.parseInt(pageNo));
		pxy.setPageSize(pxy.parseInt(pageSize));
		pxy.paging();
		list.clear();
		ISupplier<List<Article>> s = () -> articleMapper.selectAll(pxy);
		int ran = pxy.random(1, 2);
		System.out.println(ran);
		map.accept(Arrays.asList("articles","pxy"),
				Arrays.asList(s.get(),pxy));
		
		return map.get();
	}
	
	@GetMapping("/count")
	public Map<?,?> count(){
		
		ISupplier<String> s = () -> articleMapper.count();
		map.accept(Arrays.asList("count"),Arrays.asList(s.get()));
		return map.get();
	}
	
	@GetMapping("/{artseq}")
	public Article read(@RequestBody Article param) {
		return art;
	}
	@PutMapping("/{artseq}")
	public Map<?,?> updateArticle(@PathVariable String artseq, @RequestBody Article param) {
		logger.info("수정"+param);
		IConsumer<Article> c = t -> articleMapper.updateArticle(param);
		c.accept(param);
		
		map.accept(Arrays.asList("msg"),Arrays.asList("SUCCESS"));
		return map.get();
	} 
	@DeleteMapping("/{artseq}")
	public Map<?,?> deleteArticle(@PathVariable String artseq, @RequestBody Article param){
		printer.accept("딜리트 들어옴");
		IConsumer<Article> c = T -> articleMapper.deleteArticle(param);
		c.accept(param);
		
		map.accept(Arrays.asList("msg"),Arrays.asList("SUCCESS"));
		return map.get();
	
	}
	
}
