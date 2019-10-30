package com.ship.web.brd;

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
import com.ship.web.cmm.IFunction;
import com.ship.web.cmm.ISupplier;
import com.ship.web.utl.Printer;

@RestController
@RequestMapping("/articles")
public class ArticleCtrl {
	private static final Logger logger = LoggerFactory.getLogger(ArticleCtrl.class);
	@Autowired Map<String,Object> map;
	@Autowired Article art;
	@Autowired Printer printer;
	@Autowired ArticleMapper articleMapper;
	@Autowired List<Article> list;
	
	
	@PostMapping("/")
	public Map<?,?> write(@RequestBody Article param){
		printer.accept("글쓰기 들어옴");
		param.setBoardType("게시판");
		printer.accept(param.toString());
		IConsumer<Article> c = t-> articleMapper.insertArticle(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		ISupplier<String> s = () -> articleMapper.count();
		map.put("count", s.get());
		printer.accept("글숫자"+s.get());
		printer.accept("글쓰기 나감"+ map.get("msg"));
		return map;
	}
	@GetMapping("/")
	public List<Article> list(){
		list.clear();
		ISupplier<List<Article>> s = () -> articleMapper.selectAll();
		printer.accept("전체글목록\n"+s.get());
		return s.get();
	}
	
	@GetMapping("/count")
	public Map<?,?> count(){
		printer.accept("카운트들어옴");
		ISupplier<String> s = () -> articleMapper.count();
		map.clear();
		map.put("count", s.get());
		return map;
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
		map.clear();
		map.put("msg", "SUCCESS");
		logger.info("수정2");
		return map;
	} 
	@DeleteMapping("/{artseq}")
	public Map<?,?> deleteArticle(@PathVariable String artseq, @RequestBody Article param){
		printer.accept("딜리트 들어옴");
		IConsumer<Article> c = T -> articleMapper.deleteArticle(param);
		c.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	
	}
	
}
