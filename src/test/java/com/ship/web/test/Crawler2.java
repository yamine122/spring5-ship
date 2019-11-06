package com.ship.web.test;

import java.util.ArrayList;
import java.util.List;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class Crawler2 {
	public static void main(String[] args) {
		
		try {
			Document rawData = Jsoup.connect("https://www.op.gg/ranking/ladder/").get();
			  Elements gamer = rawData.select("a[class=\"ranking-highest__name\"]");
			  Elements rank = rawData.select("div[class=\"ranking-highest__rank\"]"); 
			  Elements title = rawData.select("td[class=\"ranking-table__cell ranking-table__cell--rank\"]");
			  Elements artist = rawData.select("td[class=\"select_summoner ranking-table__cell ranking-table__cell--summoner\"]"); 
			  List<String> artist2 = new ArrayList<>();
			  List<String> title2 = new ArrayList<>();
			  List<String> gamer2 = new ArrayList<>();
			  List<String> rank2 = new ArrayList<>();
			  for(Element e : artist) {
				  artist2.add(e.text());
			  }
			  for(Element e : title) {
				  title2.add(e.text());
			  }
			  for(Element e : gamer) {
				  gamer2.add(e.text());
			  }
			  for(Element e : rank) {
				  rank2.add(e.text());
			  }
			  System.out.println(gamer2);
			  System.err.println("---------------");
			  System.err.println(rank2);
			  System.out.println(artist2); 
			  System.out.println("---------------");
			  System.out.println(title2); 

		} catch (Exception e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
}
	}
}