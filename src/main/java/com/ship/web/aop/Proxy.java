package com.ship.web.aop;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.ship.web.utl.Printer;

import lombok.Data;

@Data @Component @Lazy
public class Proxy {
	private int pageNum;
	private String search;
	@Autowired Printer printer;
	//@Autowired List<String> proxylist;
	
	public List<?> crawl(Map<?,?> paramMap){
		
		String url = "http://"+paramMap.get("site")+"/";
		printer.accept("넘어온 url\n"+url);
		List<String> proxylist = new ArrayList<>();
		proxylist.clear();
		try {
		Connection.Response response = Jsoup.connect(url).method(Connection.Method.GET).execute();
		
		Document document = response.parse();
		String text = document.html();
		//String text = document.text();
		printer.accept("크롤링한텍스트\n"+text);
		proxylist.add(text);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return proxylist;
	}
}
